const productSignal =
  /\b(?:veneer|plywood|panel|board|MDF|wood|melamine|banding|walnut|oak|maple|teak|ash|birch|sapele|eucalyptus|rosewood|mahogany|bamboo)\b/i;

const phraseReplacements: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bNatural Wood Veneer Sheets\b/gi, "صفائح قشرة خشب طبيعي"],
  [/\bNatural Wood Veneer\b/gi, "قشرة خشب طبيعي"],
  [/\bEngineered Wood Veneer\b/gi, "قشرة خشب هندسية"],
  [/\bWood Veneer Edge Banding\b/gi, "شرائط حواف قشرة خشبية"],
  [/\bVeneer Edge Banding\b/gi, "شرائط حواف القشرة"],
  [/\bWood Veneer Panels\b/gi, "ألواح قشرة خشبية"],
  [/\bWood Veneer Panel\b/gi, "لوح قشرة خشبية"],
  [/\bWood Veneer Plywood\b/gi, "خشب رقائقي مكسو بقشرة خشبية"],
  [/\bVeneer Plywood\b/gi, "خشب رقائقي مكسو بالقشرة"],
  [/\bCommercial Plywood\b/gi, "خشب رقائقي تجاري"],
  [/\bPlywood Sheets\b/gi, "صفائح خشب رقائقي"],
  [/\bMelamine Particle Board\b/gi, "لوح جسيمات بالميلامين"],
  [/\bMelamine MDF Board\b/gi, "لوح MDF بالميلامين"],
  [/\bMelamine MDF Panel\b/gi, "لوح MDF بالميلامين"],
  [/\bMelamine Board\b/gi, "لوح ميلامين"],
  [/\bParticle Board\b/gi, "لوح جسيمات"],
  [/\bMDF Board\b/gi, "لوح MDF"],
  [/\bMDF Panel\b/gi, "لوح MDF"],
  [/\b3D Wood Wall Panels\b/gi, "ألواح جدران خشبية ثلاثية الأبعاد"],
  [/\b3D Wood Wall Panel\b/gi, "لوح جدار خشبي ثلاثي الأبعاد"],
  [/\b3D Wood Panel\b/gi, "لوح خشبي ثلاثي الأبعاد"],
  [/\b3D Wall Panel\b/gi, "لوح جدار ثلاثي الأبعاد"],
  [/\bWood Slat Wall Panels\b/gi, "ألواح جدران بشرائح خشبية"],
  [/\bWood Wall Panels\b/gi, "ألواح جدران خشبية"],
  [/\bWood Wall Panel\b/gi, "لوح جدار خشبي"],
  [/\bDecorative Wood Panels\b/gi, "ألواح خشبية زخرفية"],
  [/\bDecorative Wood Panel\b/gi, "لوح خشبي زخرفي"],
  [/\bDecorative Panel\b/gi, "لوح زخرفي"],
  [/\bWall Panels\b/gi, "ألواح جدران"],
  [/\bWall Panel\b/gi, "لوح جدار"],
  [/\bQuarter Sawn\b/gi, "نشر ربعي"],
  [/\bQuarter Cut\b/gi, "قطع ربعي"],
  [/\bCrown Cut\b/gi, "قطع تاجي"],
  [/\bRift Cut\b/gi, "قطع شعاعي"],
  [/\bRotary Cut\b/gi, "قطع دوّار"],
  [/\bStraight Grain\b/gi, "عروق مستقيمة"],
  [/\bFine Grain\b/gi, "عروق دقيقة"],
  [/\bBlack Walnut\b/gi, "جوز أسود"],
  [/\bWhite Oak\b/gi, "بلوط أبيض"],
  [/\bRed Oak\b/gi, "بلوط أحمر"],
  [/\bDark Walnut\b/gi, "جوز داكن"],
  [/\bBurma Teak\b/gi, "ساج بورمي"],
  [/\bBird(?:'s|s) Eye Maple\b/gi, "قيقب عين الطائر"],
  [/\bFlame Maple\b/gi, "قيقب مموّج"],
  [/\bOlive Ash\b/gi, "خشب رماد زيتوني"],
  [/\bChinese Ash\b/gi, "خشب رماد صيني"],
  [/\bAmerican Walnut\b/gi, "جوز أمريكي"],
  [/\bAmerican Cherry\b/gi, "كرز أمريكي"],
  [/\bGolden Oak\b/gi, "بلوط ذهبي"],
  [/\bPanel Manufacturer\b/gi, "مصنّع ألواح"],
  [/\bPanel Supplier\b/gi, "مورّد ألواح"],
  [/\bPlywood Supplier\b/gi, "مورّد خشب رقائقي"],
  [/\bBanding Supplier\b/gi, "مورّد شرائط حواف"],
  [/\bBanding Factory\b/gi, "مصنع شرائط حواف"],
  [/\bDecorative Panel Factory\b/gi, "مصنع ألواح زخرفية"],
  [/\bChina\b/gi, "الصين"],
  [/\bSupplier\b/gi, "مورّد"],
  [/\bManufacturer\b/gi, "مصنّع"],
  [/\bFactory\b/gi, "مصنع"],
  [/\bWalnut\b/gi, "جوز"],
  [/\bMaple\b/gi, "قيقب"],
  [/\bTeak\b/gi, "ساج"],
  [/\bOak\b/gi, "بلوط"],
  [/\bAsh\b/gi, "رماد"],
  [/\bBirch\b/gi, "بتولا"],
  [/\bCherry\b/gi, "كرز"],
  [/\bSapele\b/gi, "سابيلي"],
  [/\bEucalyptus\b/gi, "أوكالبتوس"],
  [/\bRosewood\b/gi, "خشب الورد"],
  [/\bMahogany\b/gi, "ماهوجني"],
  [/\bBasswood\b/gi, "زيزفون"],
  [/\bBamboo\b/gi, "خيزران"],
  [/\bCedar\b/gi, "أرز"],
  [/\bBeech\b/gi, "زان"],
  [/\bElm\b/gi, "دردار"],
  [/\bWenge\b/gi, "وينجي"],
  [/\bBurl\b/gi, "عقدة خشبية"],
  [/\bNatural\b/gi, "طبيعي"],
  [/\bEngineered\b/gi, "هندسي"],
  [/\bDecorative\b/gi, "زخرفي"],
  [/\bPrefinished\b/gi, "مسبق التشطيب"],
  [/\bTextured\b/gi, "محبّب"],
  [/\bDyed\b/gi, "مصبوغ"],
  [/\bSmoked\b/gi, "مدخّن"],
  [/\bFumed\b/gi, "مبخّر"],
  [/\bFluted\b/gi, "مضلّع"],
  [/\bGrooved\b/gi, "محزّز"],
  [/\bPanel\b/gi, "لوح"],
  [/\bPanels\b/gi, "ألواح"],
  [/\bPlywood\b/gi, "خشب رقائقي"],
  [/\bVeneer\b/gi, "قشرة"],
  [/\bWood\b/gi, "خشب"],
  [/\bSheets\b/gi, "صفائح"],
  [/\bSheet\b/gi, "صفيحة"],
  [/\bBoard\b/gi, "لوح"],
  [/\bEdge Tape\b/gi, "شريط حافة"],
  [/\bEdge\b/gi, "حافة"],
  [/\bBanding\b/gi, "شريط حواف"],
  [/\bFurniture\b/gi, "أثاث"],
  [/\bCabinet\b/gi, "خزانة"],
  [/\bDoor\b/gi, "باب"],
  [/\bInterior\b/gi, "داخلي"],
  [/\bSurface\b/gi, "سطح"],
  [/\bTexture\b/gi, "ملمس"],
  [/\bPattern\b/gi, "نمط"],
  [/\bLinear\b/gi, "خطي"],
  [/\bVertical\b/gi, "عمودي"],
  [/\bLight\b/gi, "فاتح"],
  [/\bDark\b/gi, "داكن"],
  [/\bBlack\b/gi, "أسود"],
  [/\bWhite\b/gi, "أبيض"],
  [/\bGolden\b/gi, "ذهبي"],
  [/\bGrey\b/gi, "رمادي"],
  [/\bSample\b/gi, "عينة"],
  [/\bWall\b/gi, "جدار"],
  [/\bGrade\b/gi, "درجة"],
  [/\bPlain\b/gi, "خام"],
];

function latinRatio(value: string): number {
  const latin = value.match(/[A-Za-z]/g)?.length ?? 0;
  const letters = value.match(/[A-Za-z\u0600-\u06ff]/g)?.length ?? 0;
  return letters === 0 ? 0 : latin / letters;
}

export function translateArabicTechnicalTitle(
  source: string,
  currentTranslation: string,
): string {
  if (
    source.length > 180 ||
    /[.!?]/.test(source) ||
    !productSignal.test(source) ||
    latinRatio(currentTranslation) < 0.4
  ) {
    return currentTranslation;
  }

  const naturalSheetPatterns: ReadonlyArray<
    readonly [RegExp, (species: string) => string]
  > = [
    [/^Quarter Cut (.+) Natural Wood Veneer Sheets$/i, (species) => `صفائح قشرة خشب طبيعي من ${species} بقطع ربعي`],
    [/^Crown Cut (.+) Natural Wood Veneer Sheets$/i, (species) => `صفائح قشرة خشب طبيعي من ${species} بقطع تاجي`],
    [/^Rift Cut (.+) Natural Wood Veneer Sheets$/i, (species) => `صفائح قشرة خشب طبيعي من ${species} بقطع شعاعي`],
    [/^Natural (.+) Wood Veneer Sheets$/i, (species) => `صفائح قشرة خشب طبيعي من ${species}`],
    [/^(.+) Natural Wood Veneer Sheets$/i, (species) => `صفائح قشرة خشب طبيعي من ${species}`],
  ];

  for (const [pattern, format] of naturalSheetPatterns) {
    const match = source.match(pattern);
    if (match?.[1]) {
      let species = match[1];
      for (const [replacementPattern, replacement] of phraseReplacements) {
        species = species.replace(replacementPattern, replacement);
      }
      return format(species.replace(/\s+/g, " ").trim());
    }
  }

  let translated = source;
  for (const [pattern, replacement] of phraseReplacements) {
    translated = translated.replace(pattern, replacement);
  }

  translated = translated.replace(/\s+/g, " ").trim();
  return /[\u0600-\u06ff]/.test(translated) ? translated : currentTranslation;
}
