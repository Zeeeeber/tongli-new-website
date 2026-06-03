# 内容发布流程

本文档说明 Tongli Timber 外贸独立站的内容发布流程，指导业务人员如何在 WordPress 后台维护网站内容。

---

## 1. 角色与权限

### 1.1 角色定义

| 角色 | 权限 | 说明 |
|------|------|------|
| 管理员 (Administrator) | 完全控制 | 网站技术管理、插件管理、用户管理 |
| 编辑 (Editor) | 内容管理 | 发布/编辑所有内容、管理分类和标签 |
| 作者 (Author) | 自主发布 | 仅可发布和编辑自己的内容 |
| 贡献者 (Contributor) | 提交内容 | 可撰写内容，需审核后发布 |

### 1.2 业务人员权限
业务人员建议使用 **Editor** 或 **Author** 角色，具有完整的内容管理能力。

---

## 2. WordPress 后台概览

### 2.1 内容菜单

```
WordPress 后台
├── 文章 (Posts)
│   ├── 全部文章
│   ├── 新建文章
│   ├── 分类
│   └── 标签
├── 媒体 (Media)
│   └── 媒体库
├── 页面 (Pages)
│   ├── 全部页面
│   └── 新建页面
├── 产品 (Products) [自定义类型]
│   ├── 全部产品
│   ├── 新建产品
│   └── 产品分类
├── 案例 (Projects) [自定义类型]
│   ├── 全部案例
│   ├── 新建案例
│   └── 案例分类
├── 外观 (Appearance)
│   └── 自定义
└── 设置 (Settings)
    └── SEO / 固定链接
```

---

## 3. 产品发布流程

### 3.1 新建产品

1. **进入产品管理**
   - 后台左侧菜单点击「产品」→「新建产品」

2. **填写基本信息**
   - 产品名称（标题）
   - 产品描述（正文内容）
   - 产品简介（摘要/Excerpt）

3. **上传图片**
   - 封面图（Featured Image）
   - 产品图片库（Gallery）
   - 相关证书图片

4. **设置分类**
   - 选择产品分类（Natural Wood Veneer / Engineered Wood Veneer 等）

5. **填写技术规格**
   - 厚度、尺寸、基材等规格信息

6. **设置应用场景**
   - 选择适用场景（家具厂、门厂、酒店项目等）

7. **SEO 设置**
   - SEO 标题（SEO Title）
   - SEO 描述（SEO Description）
   - URL 别名（Slug）

8. **发布**
   - 点击「发布」或「更新」

### 3.2 产品字段说明

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| 产品名称 | 是 | 显示在页面标题 | White Oak Natural Wood Veneer |
| 产品描述 | 是 | 详细描述产品特点 | 采用优质白橡木皮... |
| 封面图 | 是 | 列表页展示图 | 1200x800px, JPG/WebP |
| 产品分类 | 是 | 确定 URL 结构 | natural-wood-veneer |
| SEO 标题 | 建议 | 搜索结果标题 | White Oak Wood Veneer - Premium Quality \| Tongli Timber |
| SEO 描述 | 建议 | 搜索结果摘要 | High-quality white oak wood veneer sheets... |
| URL 别名 | 是 | 页面 URL | white-oak-veneer |

### 3.3 产品分类

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

---

## 4. 博客/资源发布流程

### 4.1 新建文章

1. **进入文章管理**
   - 后台左侧菜单点击「文章」→「新建文章」

2. **填写基本信息**
   - 文章标题
   - 文章正文
   - 文章摘要（可选）

3. **上传封面图**
   - featured_image

4. **设置分类和标签**
   - 文章分类：Product News / Industry News / Company News
   - 标签：可选，用于细分类目

5. **SEO 设置**
   - SEO 标题
   - SEO 描述
   - URL 别名

6. **发布**
   - 点击「发布」

### 4.2 文章分类

```
Resources
├── Product News (产品新闻)
│   └── 新品发布、产品更新
├── Industry News (行业资讯)
│   └── 行业趋势、技术文章
└── Company News (公司新闻)
    └── 展会、认证、获奖
```

---

## 5. 项目案例发布流程

### 5.1 新建案例

1. **进入案例管理**
   - 后台左侧菜单点击「案例」→「新建案例」

2. **填写基本信息**
   - 项目名称
   - 项目描述
   - 客户类型
   - 项目地点
   - 完成时间

3. **上传图片**
   - 项目主图
   - 项目图片库

4. **关联产品**
   - 选择本项目使用的产品

5. **客户评价**
   - 可添加客户反馈或评价

6. **SEO 设置**
   - SEO 标题
   - SEO 描述
   - URL 别名

7. **发布**
   - 点击「发布」

---

## 6. 图片上传规范

### 6.1 图片要求

| 类型 | 格式 | 尺寸 | 大小 |
|------|------|------|------|
| 产品封面图 | JPG/WebP | 1200x800px 最佳 | < 500KB |
| 产品图库 | JPG/WebP | 800x600px 最小 | < 300KB |
| 博客封面图 | JPG/WebP | 1200x630px (16:9) | < 400KB |
| 案例图片 | JPG/WebP | 1920x1080px 最佳 | < 800KB |
| 证书图片 | PNG/JPG | 800x600px 最佳 | < 200KB |

### 6.2 图片命名
使用描述性英文名称：
```
✅ natural-wood-veneer-white-oak-sheets.jpg
✅ hotel-project-lobby-veneer-application.jpg
❌ IMG_001.jpg
❌ product1.jpg
```

### 6.3 Alt 文本
上传图片时填写 alt 文本：
```
✅ "White oak natural wood veneer sheets for furniture manufacturing"
✅ "Hotel project应用 natural wood veneer in lobby"
❌ "产品图片"
```

---

## 7. SEO 最佳实践

### 7.1 SEO 标题格式

| 页面类型 | 格式 | 示例 |
|---------|------|------|
| 产品页 | `{产品名} - 关键词 | Tongli Timber` | White Oak Wood Veneer - Premium Quality \| Tongli Timber |
| 博客页 | `{文章标题} | Tongli Timber` | New Natural Veneer Collection 2024 \| Tongli Timber |
| 案例页 | `{项目名} | Tongli Timber` | Hilton Hotel Renovation Project \| Tongli Timber |

### 7.2 SEO 描述模板

**产品页：**
```
[产品类型] for [应用场景]. [核心优势]. [号召用语] [联系/询价引导]
```

示例：
```
Premium natural white oak wood veneer sheets for furniture and interior decoration. 
High-quality, sustainable, and competitively priced. Get free samples now - contact Tongli Timber.
```

### 7.3 URL 命名

| 内容类型 | URL 格式 | 示例 |
|---------|----------|------|
| 产品 | `/products/{category}/{product-slug}` | /products/natural-wood-veneer/white-oak-veneer |
| 文章 | `/resources/{category}/{article-slug}` | /resources/product-news/new-collection |
| 案例 | `/projects/{project-slug}` | /projects/hilton-hotel-renovation |

---

## 8. 内容审核流程

### 8.1 审核流程

```
内容创建 → 草稿保存 → 内部预览 → 审核 → 发布
```

1. **草稿保存**：完成内容后先保存草稿
2. **内部预览**：预览发布效果
3. **审核**：检查内容准确性、SEO 设置
4. **发布**：确认无误后发布

### 8.2 发布前检查清单

**内容检查：**
- [ ] 标题和内容准确无误
- [ ] 产品规格信息正确
- [ ] 图片清晰、已添加 alt 文本
- [ ] 无拼写或语法错误

**SEO 检查：**
- [ ] SEO 标题已设置（50-60字符）
- [ ] SEO 描述已设置（150-160字符）
- [ ] URL 别名已设置（英文、含关键词）
- [ ] 分类已选择

---

## 9. 常见问题

### Q1: 如何更新已发布的内容？
A: 在文章/产品列表中找到需要更新的内容，点击编辑，修改后点击「更新」。

### Q2: 产品图片模糊怎么办？
A: 重新上传高质量图片（建议 1200x800px 以上），确保使用 JPG 或 WebP 格式。

### Q3: 分类写错了怎么办？
A: 在文章/产品编辑页面修改分类，然后更新即可。URL 会自动更新。

### Q4: 需要删除一篇文章怎么办？
A: 不建议直接删除，建议将文章移至「草稿」状态或设置 noindex。URL 变更会影响 SEO。

### Q5: 文章发布后多久能在前台显示？
A: ISR 模式下，通常在 1 小时内自动更新。可手动触发重新验证。

---

## 10. 相关文档

- [00-project-brief.md](./00-project-brief.md) - 项目概述
- [01-site-map.md](./01-site-map.md) - 网站结构
- [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) - WordPress CMS 架构
- [03-seo-technical-checklist.md](./03-seo-technical-checklist.md) - SEO 技术清单
- [05-cursor-working-rules.md](./05-cursor-working-rules.md) - 开发规则
