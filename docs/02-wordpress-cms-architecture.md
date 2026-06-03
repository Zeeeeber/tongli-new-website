# WordPress Headless CMS 架构

本文档说明 Tongli Timber 外贸独立站的 WordPress 后台架构规划，作为后续 CMS 集成的技术参考。

---

## 1. 架构概览

```
┌─────────────────┐     REST API      ┌─────────────────┐
│  WordPress 后台  │ ────────────────→ │   Next.js 前端   │
│  (内容管理)       │ ←─────────────── │   (用户访问)     │
└─────────────────┘                   └─────────────────┘
       │                                     │
       ↓                                     ↓
  业务人员更新                          静态生成/ISR
  产品、博客等内容                      页面自动更新
```

### 技术栈
- **CMS**: WordPress (最新版本)
- **API**: WordPress REST API (v2)
- **前端**: Next.js (App Router)
- **数据同步**: ISR (Incremental Static Regeneration)

---

## 2. WordPress 内容类型

### 2.1 Products (产品)

#### 字段定义

| 字段名 | 类型 | 说明 | SEO |
|--------|------|------|-----|
| title | text | 产品名称 | → H1, title |
| slug | text | URL 别名 | → URL |
| description | rich text | 产品描述 | → meta description |
| featured_image | image | 产品主图 | → og:image |
| gallery | images | 产品图片库 | |
| category | taxonomy | 产品分类 | |
| specifications | repeater | 技术规格 | |
| applications | text | 应用场景 | |
| certifications | images | 相关证书 | |
| seo_title | text | SEO 标题 | → title tag |
| seo_description | textarea | SEO 描述 | → meta description |
| canonical_url | text | 规范链接 | → canonical |

#### 产品分类 (Product Categories)

```
Products
├── Wood Veneer Panels
│   ├── Natural Wood Veneer
│   ├── Engineered Wood Veneer
│   └── 3D Wood Panels
├── Edge Banding
│   └── Veneer Edge Banding
├── Melamine Board
└── Supporting Boards
    ├── MDF
    ├── Plywood
    └── Particle Board
```

#### 产品模板 URL
```
/products/{category-slug}/{product-slug}
例: /products/natural-wood-veneer/white-oak-veneer
```

---

### 2.2 Resources / Blog (资源中心)

#### 字段定义

| 字段名 | 类型 | 说明 | SEO |
|--------|------|------|-----|
| title | text | 文章标题 | → H1, title |
| slug | text | URL 别名 | → URL |
| content | rich text | 文章内容 | |
| excerpt | text | 文章摘要 | → meta description |
| featured_image | image | 封面图 | → og:image |
| category | taxonomy | 文章分类 | |
| tags | taxonomy | 标签 | |
| author | user | 作者 | |
| publish_date | date | 发布时间 | |
| seo_title | text | SEO 标题 | → title tag |
| seo_description | textarea | SEO 描述 | → meta description |
| canonical_url | text | 规范链接 | → canonical |

#### 文章分类 (Post Categories)

```
Resources
├── Product News (产品新闻)
├── Industry News (行业资讯)
└── Company News (公司新闻)
```

#### 文章模板 URL
```
/resources/{category-slug}/{article-slug}
或
/resources/{article-slug}
例: /resources/product-news/new-veneer-collection-2024
```

---

### 2.3 Projects (项目案例)

#### 字段定义

| 字段名 | 类型 | 说明 | SEO |
|--------|------|------|-----|
| title | text | 项目名称 | → H1, title |
| slug | text | URL 别名 | → URL |
| description | rich text | 项目描述 | → meta description |
| client_type | select | 客户类型 | |
| location | text | 项目地点 | |
| completion_date | date | 完成时间 | |
| featured_image | image | 项目主图 | → og:image |
| gallery | images | 项目图片 | |
| products_used | posts (products) | 使用产品 | |
| testimonial | textarea | 客户评价 | |
| seo_title | text | SEO 标题 | → title tag |
| seo_description | textarea | SEO 描述 | → meta description |
| canonical_url | text | 规范链接 | → canonical |

#### 项目模板 URL
```
/projects/{project-slug}
例: /projects/hilton-hotel-renovation
```

---

### 2.4 Collections (产品系列)

#### 字段定义

| 字段名 | 类型 | 说明 |
|--------|------|------|
| title | text | 系列名称 |
| slug | text | URL 别名 |
| description | rich text | 系列描述 |
| featured_image | image | 系列封面图 |
| products | posts (products) | 系列产品 |

#### 系列分类

```
Collections
├── Natural Wood Veneer (天然木皮)
├── Engineered Veneer (科技木皮)
└── Melamine Board (三聚氰胺板)
```

---

## 3. SEO 字段说明

### 3.1 SEO Title
- 推荐长度：50-60 字符
- 应包含核心关键词
- 格式：`{产品名} - 品牌名` 或 `{产品名} | 品牌名`

### 3.2 SEO Description
- 推荐长度：150-160 字符
- 应包含核心关键词和号召性用语
- 必须是页面内容的准确描述

### 3.3 Canonical URL
- 默认留空，系统自动生成
- 如需指定规范页面，手动填写

---

## 4. 图片管理

### 4.1 图片字段
| 字段 | 类型 | 说明 |
|------|------|------|
| featured_image | 单图 | 主图/封面图 |
| gallery | 多图 | 图片库 |
| certifications | 多图 | 证书图片 |

### 4.2 图片 SEO 要求
- 所有图片必须添加 alt 文本
- alt 文本应描述性且包含关键词
- 图片文件名应使用英文

---

## 5. FAQ (常见问题)

作为 WordPress 自定义内容类型或 ACF 字段组管理。

#### FAQ 字段
| 字段 | 类型 | 说明 |
|------|------|------|
| question | text | 问题 |
| answer | rich text | 回答 |

#### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your minimum order quantity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our MOQ is 50 sheets for standard products."
      }
    }
  ]
}
```

---

## 6. Related Content (关联内容)

### 6.1 Related Products
使用 WordPress posts-to-posts 或 ACF Relationship 字段实现产品关联。

### 6.2 Related Articles
同分类下的相关文章自动关联。

---

## 7. WordPress 插件推荐

### 7.1 必需插件
| 插件 | 用途 |
|------|------|
| WordPress REST API | API 接口（内置） |
| Yoast SEO / Rank Math | SEO 优化 |
| WP REST API Cache | API 缓存加速 |
| ACF Pro | 自定义字段 |

### 7.2 可选插件
| 插件 | 用途 |
|------|------|
| WPML | 多语言支持 |
| EWWW Image Optimizer | 图片优化 |
| WP Fastest Cache | 缓存优化 |

---

## 8. API 端点

### 8.1 Products API
```
GET /wp-json/wp/v2/product?per_page=10&page=1
GET /wp-json/wp/v2/product/{id}
GET /wp-json/wp/v2/product?slug={slug}
GET /wp-json/wp/v2/product?categories={category_id}
```

### 8.2 Posts API
```
GET /wp-json/wp/v2/posts?per_page=10&page=1
GET /wp-json/wp/v2/posts/{id}
GET /wp-json/wp/v2/posts?slug={slug}
GET /wp-json/wp/v2/posts?categories={category_id}
```

### 8.3 Projects API
```
GET /wp-json/wp/v2/project?per_page=10&page=1
GET /wp-json/wp/v2/project/{id}
GET /wp-json/wp/v2/project?slug={slug}
```

---

## 9. Next.js 数据获取策略

### 9.1 ISR (Incremental Static Regeneration)
```typescript
// app/products/[category]/[slug]/page.tsx
export const revalidate = 3600; // 1小时重新生成

async function getProduct(category: string, slug: string) {
  const res = await fetch(`${API_URL}/product?slug=${slug}`, {
    next: { revalidate: 3600 }
  });
  return res.json();
}
```

### 9.2 On-Demand Revalidation
WordPress 内容更新时触发 webhook，Next.js 立即重新生成页面。

---

## 10. 相关文档

- [00-project-brief.md](./00-project-brief.md) - 项目概述
- [01-site-map.md](./01-site-map.md) - 网站结构
- [03-seo-technical-checklist.md](./03-seo-technical-checklist.md) - SEO 技术清单
