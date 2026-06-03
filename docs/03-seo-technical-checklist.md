# SEO 技术清单

本文档规定 Tongli Timber 外贸独立站每个页面必须满足的 SEO 技术要求，确保网站符合 Google 搜索最佳实践。

---

## 1. 基础 SEO 元素

### 1.1 Title 标签
| 要求 | 说明 |
|------|------|
| 唯一性 | 每个页面必须有唯一的 title |
| 长度 | 50-60 字符最佳，不超过 60 字符 |
| 格式 | `{页面标题} | Tongli Timber` 或 `{页面标题} - Tongli Timber` |
| 关键词 | 开头放置核心关键词 |
| 品牌 | 包含品牌名 Tongli Timber |

**示例：**
```
Natural Wood Veneer Panels - Premium Quality | Tongli Timber
```

### 1.2 Meta Description
| 要求 | 说明 |
|------|------|
| 唯一性 | 每个页面必须有唯一的 meta description |
| 长度 | 150-160 字符最佳 |
| 内容 | 准确概括页面内容，包含关键词 |
| 号召性 | 包含适当的行动号召 |

**示例：**
```
Discover premium natural wood veneer panels from Tongli Timber. High-quality natural wood veneers for furniture, doors, and interior decoration. Request free samples today.
```

### 1.3 Canonical URL
| 要求 | 说明 |
|------|------|
| 设置 | 每个页面必须设置 canonical URL |
| 指向 | 指向规范版本页面（去除过滤/排序参数） |
| 首页 | 首页 canonical 为 `https://www.tonglitimber.com/` |

**示例：**
```html
<link rel="canonical" href="https://www.tonglitimber.com/products/natural-wood-veneer" />
```

### 1.4 H1 标签
| 要求 | 说明 |
|------|------|
| 唯一性 | 每个页面必须有且仅有一个 H1 |
| 内容 | 与页面 title 一致或高度相关 |
| 格式 | 使用纯文本，不嵌套其他标题 |

**示例：**
```html
<h1>Natural Wood Veneer Panels</h1>
```

---

## 2. 页面结构要求

### 2.1 Breadcrumb (面包屑导航)
| 要求 | 说明 |
|------|------|
| 格式 | Home > Category > Page |
| Schema | 必须包含 BreadcrumbList Schema |
| 链接 | 除最后一层外，其他层级均可点击 |

**示例：**
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/natural-wood-veneer">Natural Wood Veneer</a></li>
    <li aria-current="page">White Oak Veneer</li>
  </ol>
</nav>
```

### 2.2 URL 结构
| 要求 | 说明 |
|------|------|
| 格式 | 全小写，单词间用连字符 |
| 层级 | 不超过 3 层 |
| 含义 | URL 应有明确含义 |

**示例：**
```
✅ /products/natural-wood-veneer/white-oak
❌ /products/123
❌ /products/natural_wood_veneer
❌ /p/wood-veneer-panels
```

---

## 3. 图片 SEO

### 3.1 Alt 文本
| 要求 | 说明 |
|------|------|
| 必需 | 所有图片必须有 alt 属性 |
| 描述性 | 准确描述图片内容 |
| 关键词 | 可包含相关产品关键词 |
| 长度 | 125 字符以内 |

**示例：**
```html
✅ <img src="white-oak-veneer-plywood.jpg" alt="White Oak Wood Veneer Plywood Sheet 4x8 ft" />
❌ <img src="img1.jpg" alt="" />
❌ <img src="product.jpg" alt="产品图片" />
```

### 3.2 图片命名
| 要求 | 说明 |
|------|------|
| 英文名 | 使用英文描述性文件名 |
| 关键词 | 可包含产品关键词 |
| 分隔符 | 使用连字符分隔单词 |

**示例：**
```
✅ natural-wood-veneer-white-oak-plywood.jpg
❌ IMG_1234.jpg
❌ chanpin1.jpg
```

---

## 4. Schema 结构化数据

### 4.1 必需 Schema 类型

| 页面类型 | Schema 类型 | 说明 |
|---------|-------------|------|
| 首页 | Organization | 公司信息 |
| 产品页 | Product | 产品信息 |
| 博客页 | Article | 文章信息 |
| 案例页 | Article / LocalBusiness | 案例信息 |
| FAQ 页 | FAQPage | 常见问题 |
| 面包屑 | BreadcrumbList | 面包屑导航 |

### 4.2 Product Schema 示例
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Natural White Oak Wood Veneer",
  "description": "Premium quality natural white oak wood veneer...",
  "image": "https://www.tonglitimber.com/images/products/white-oak.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Tongli Timber"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### 4.3 Article Schema 示例
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "New Natural Wood Veneer Collection 2024",
  "image": "https://www.tonglitimber.com/images/blog/new-collection.jpg",
  "author": {
    "@type": "Organization",
    "name": "Tongli Timber"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tongli Timber"
  },
  "datePublished": "2024-01-15"
}
```

### 4.4 BreadcrumbList Schema 示例
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.tonglitimber.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.tonglitimber.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Natural Wood Veneer",
      "item": "https://www.tonglitimber.com/products/natural-wood-veneer"
    }
  ]
}
```

---

## 5. Technical SEO

### 5.1 Sitemap
| 要求 | 说明 |
|------|------|
| 生成 | 自动生成 sitemap.xml |
| 更新 | 内容更新时自动更新 sitemap |
| 包含 | 包含所有产品、博客、案例页面 |

### 5.2 Robots.txt
```
User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /cgi-bin/
Sitemap: https://www.tonglitimber.com/sitemap.xml
```

### 5.3 Open Graph 标签
| 属性 | 内容 |
|------|------|
| og:title | 页面 title |
| og:description | Meta description |
| og:image | 页面主图（1200x630px） |
| og:url | 页面 URL |
| og:type | website / article |
| og:site_name | Tongli Timber |

**示例：**
```html
<meta property="og:title" content="Natural Wood Veneer Panels - Premium Quality | Tongli Timber" />
<meta property="og:description" content="Discover premium natural wood veneer panels..." />
<meta property="og:image" content="https://www.tonglitimber.com/images/og-image.jpg" />
<meta property="og:url" content="https://www.tonglitimber.com/products/natural-wood-veneer" />
<meta property="og:type" content="website" />
```

### 5.4 Twitter Card 标签
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Natural Wood Veneer Panels - Premium Quality | Tongli Timber" />
<meta name="twitter:description" content="Discover premium natural wood veneer panels..." />
<meta name="twitter:image" content="https://www.tonglitimber.com/images/og-image.jpg" />
```

---

## 6. 性能要求

| 指标 | 要求 |
|------|------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| 图片 | 使用 WebP 格式，懒加载 |
| 代码 | 代码分割，按需加载 |

---

## 7. 移动端要求

| 要求 | 说明 |
|------|------|
| 响应式 | 移动端适配所有屏幕尺寸 |
| 可点击 | 按钮和链接间距足够（至少 48px） |
| 字体 | 移动端字体不小于 16px |

---

## 8. 页面类型检查清单

### 首页 (/)
- [ ] 唯一 H1
- [ ] 唯一 title (50-60字符)
- [ ] 唯一 meta description (150-160字符)
- [ ] Organization Schema
- [ ] og:title, og:description, og:image
- [ ] 主图 alt 文本

### 产品详情页
- [ ] 唯一 H1
- [ ] 唯一 title
- [ ] 唯一 meta description
- [ ] Product Schema
- [ ] BreadcrumbList Schema
- [ ] 所有图片 alt 文本
- [ ] Canonical URL
- [ ] 相关产品链接

### 博客详情页
- [ ] 唯一 H1
- [ ] 唯一 title
- [ ] 唯一 meta description
- [ ] Article Schema
- [ ] BreadcrumbList Schema
- [ ] featured_image 带 alt
- [ ] Author 信息
- [ ] 发布日期

### 分类页 (产品列表/博客列表)
- [ ] 唯一 H1
- [ ] 唯一 title
- [ ] 唯一 meta description
- [ ] BreadcrumbList Schema
- [ ] 分页处理
- [ ] noindex 需确认（重复内容页面）

---

## 9. 禁止事项

- ❌ 多个页面使用相同 title
- ❌ 多个页面使用相同 meta description
- ❌ 缺少 canonical 标签
- ❌ 图片无 alt 文本
- ❌ 使用中文或特殊字符作为 URL
- ❌ 滥用 H1（每页多个）
- ❌ 内容重复页面未设置 noindex

---

## 10. 相关文档

- [00-project-brief.md](./00-project-brief.md) - 项目概述
- [01-site-map.md](./01-site-map.md) - 网站结构
- [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) - WordPress CMS 架构
