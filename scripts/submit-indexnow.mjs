const DEFAULT_SITE_URL = "https://www.tlveneer.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = "bc25c99e26a943fdaceb29e5aa5203e4";

const siteUrl = new URL(process.env.SITE_URL || DEFAULT_SITE_URL);
const sitemapUrl = new URL("/sitemap.xml", siteUrl);
const keyLocation = new URL(`/${INDEXNOW_KEY}.txt`, siteUrl);

function decodeXmlText(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Tongli-SEO-IndexNow/1.0" },
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch ${url}: HTTP ${response.status}`);
  }

  return response.text();
}

async function readSitemap(url, visited = new Set()) {
  const normalizedUrl = url.toString();
  if (visited.has(normalizedUrl)) return [];
  visited.add(normalizedUrl);

  const xml = await fetchText(url);
  const locations = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map(
    (match) => decodeXmlText(match[1].trim()),
  );

  if (/<sitemapindex[\s>]/i.test(xml)) {
    const nestedUrls = locations.map((location) => new URL(location));
    const nestedResults = await Promise.all(
      nestedUrls.map((nestedUrl) => readSitemap(nestedUrl, visited)),
    );
    return nestedResults.flat();
  }

  return locations;
}

const discoveredUrls = await readSitemap(sitemapUrl);
const urlList = [
  ...new Set(
    discoveredUrls.filter((url) => {
      try {
        return new URL(url).host === siteUrl.host;
      } catch {
        return false;
      }
    }),
  ),
];

if (urlList.length === 0) {
  throw new Error(`No URLs found in ${sitemapUrl}`);
}

if (urlList.length > 10_000) {
  throw new Error(`IndexNow accepts at most 10,000 URLs; found ${urlList.length}`);
}

const payload = {
  host: siteUrl.host,
  key: INDEXNOW_KEY,
  keyLocation: keyLocation.toString(),
  urlList,
};

if (process.env.INDEXNOW_DRY_RUN === "1") {
  console.log(
    JSON.stringify(
      {
        dryRun: true,
        host: payload.host,
        keyLocation: payload.keyLocation,
        sitemap: sitemapUrl.toString(),
        urlCount: payload.urlList.length,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (![200, 202].includes(response.status)) {
  const responseBody = await response.text();
  throw new Error(
    `IndexNow submission failed: HTTP ${response.status}${
      responseBody ? ` - ${responseBody}` : ""
    }`,
  );
}

console.log(
  `IndexNow accepted ${urlList.length} URLs for ${siteUrl.host} (HTTP ${response.status}).`,
);
