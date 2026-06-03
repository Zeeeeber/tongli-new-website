# Wood Veneer Panel 产品详情页模板

## 文件位置
`src/app/products/wood-veneer-panels/[slug]/page.tsx`

当前已有一个示例页面：
- `src/app/products/wood-veneer-panels/white-oak-veneer-plywood/page.tsx`

---

## 如何创建新的木皮板产品详情页

### 步骤 1：复制模板文件

复制以下文件夹：
```
src/app/products/wood-veneer-panels/white-oak-veneer-plywood/
```

重命名为新产品名称（使用 kebab-case），例如：
```
src/app/products/wood-veneer-panels/natural-oak-veneer-plywood/
```

### 步骤 2：修改文件名

将 `page.tsx` 内的 `product` 常量对象内容替换为新产品数据：

```tsx
const product = {
  name: "Natural Oak Veneer Plywood",       // 修改：产品名称
  slug: "natural-oak-veneer-plywood",       // 修改：URL slug
  category: "Wood Veneer Panels",          // 可保留或修改
  code: "NV-OAK-001",                      // 修改：产品编号
  shortDesc: "...",                         // 修改：简短描述
  description: "...",                       // 修改：详细描述
  tags: ["Natural Oak", "Veneer", "Furniture"], // 修改：关键词标签
};
```

### 步骤 3：修改图片

在 `public/images/products/` 目录下创建对应文件夹，放入新产品图片。

更新页面中的图片引用路径，例如：
```tsx
src="/images/products/natural-oak/detail-banner.jpg"
```

### 步骤 4：修改 URL 导航

如果需要，在 `relatedProducts` 数组中更新相关产品链接。

---

## 需要修改的内容清单

| 内容 | 位置 | 说明 |
|------|------|------|
| `product.name` | 第 1 个 section | 页面标题、H1、面包屑 |
| `product.slug` | 第 1 个 section | URL 路径 |
| `product.category` | 第 1 个 section | 产品分类标签 |
| `product.code` | 第 1 个 section | 产品编号 |
| `product.shortDesc` | 第 1 个 section | 简短描述 |
| `product.description` | 第 1 个 section | 详细描述（富文本） |
| `product.tags` | 第 1 个 section | 关键词标签数组 |
| 产品图片 | 第 1 个 section | Gallery 图片 |
| 相关产品链接 | `relatedProducts` | 底部相关产品导航 |

---

## 通用部分（无需修改）

以下内容适用于所有木皮板产品，无需修改：

- **Detailed Specifications** — 通用产品规格表（品牌、产品类型、基材、厚度、表面处理等）
- **Product Detail Content** — 13 个产品详情板块（Banner、特点、实拍、应用、公司介绍、证书、客户反馈、生产流程、基材选择、木皮选择、木皮等级、表面处理、包装）
- **FAQ** — 5 个常见问题
- **Breadcrumb** — 面包屑导航
- **ContactFormModal** — 询盘弹窗
- **响应式设计** — 已优化 PC / 平板 / 手机

---

## FAQ 数据（可按需修改）

位于文件顶部的 `faqs` 数组：
```tsx
const faqs = [
  { q: "问题1", a: "答案1" },
  { q: "问题2", a: "答案2" },
  // ...
];
```

---

## 目录结构参考

```
src/app/products/wood-veneer-panels/
├── [slug]/page.tsx          ← 每个产品详情页
│
src/app/products/wood-veneer-panels/white-oak-veneer-plywood/page.tsx  ← 示例模板
```
