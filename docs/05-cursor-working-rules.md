# Cursor 开发规则

本文档规定使用 Cursor AI 助手开发 Tongli Timber 外贸独立站时的开发规范和注意事项，避免破坏已建立的架构和设计。

---

## 1. 开发前必读

在开始任何修改之前，必须先阅读以下文档：

| 优先级 | 文档 | 说明 |
|--------|------|------|
| **必须** | [.cursor/rules/tongli-website.mdc](./.cursor/rules/tongli-website.mdc) | 项目规则摘要 |
| **必须** | [00-project-brief.md](./00-project-brief.md) | 项目概述和商业目标 |
| **必须** | [01-site-map.md](./01-site-map.md) | URL 结构规范 |
| **必须** | [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) | CMS 架构 |
| **必须** | [03-seo-technical-checklist.md](./03-seo-technical-checklist.md) | SEO 技术要求 |

---

## 2. 禁止事项（绝对禁止）

### 2.1 禁止修改 sitemap 和 URL 结构
- ❌ 不要修改已有页面的 URL
- ❌ 不要创建新的顶级 URL 路径
- ❌ 不要删除已有的 URL 结构
- ❌ 不要添加无意义的 URL 参数

### 2.2 禁止写死内容和数据
- ❌ 不要把产品内容写死在 `page.tsx` 中
- ❌ 不要把博客文章写死在代码中
- ❌ 不要硬编码客户案例数据
- ❌ 不要伪造产品图片描述

### 2.3 禁止破坏 SEO
- ❌ 不要删除页面的 title 或 meta description
- ❌ 不要移除 canonical 标签
- ❌ 不要移除 breadcrumb 结构
- ❌ 不要删除 Schema 结构化数据

### 2.4 禁止随意修改 UI 设计
- ❌ 不要大幅修改已确认的视觉设计
- ❌ 不要随意更换配色方案
- ❌ 不要改变已有的布局结构
- ❌ 不要添加未确认的新功能

### 2.5 禁止破坏已有功能
- ❌ 不要删除或破坏现有的页面组件
- ❌ 不要移除已实现的功能（如导航、表单）
- ❌ 不要破坏响应式布局

---

## 3. 修改规范

### 3.1 小改动规范

对于不影响架构的小改动（如样式调整、文本修改）：

1. 直接修改相关文件
2. 修改后说明改动了哪些文件
3. 确认改动符合现有规范

### 3.2 中等改动规范

对于涉及页面结构调整、组件修改的中等改动：

1. 先说明改动计划
2. 等待确认
3. 修改代码
4. 说明改动内容和原因

### 3.3 大改动规范

对于涉及架构变更、URL 调整、功能重构的大改动：

1. **必须**先输出详细计划
2. **必须**等待用户确认
3. 修改代码
4. **必须**说明所有改动
5. **必须**更新相关文档

---

## 4. 文件修改报告

每次修改代码后，必须输出：

### 4.1 修改文件列表
```
本次修改的文件：
- src/app/products/page.tsx
- src/components/ProductCard.tsx
- src/styles/product.css
```

### 4.2 修改内容说明
```
修改内容：
1. 调整了产品列表的网格布局（3列 → 4列）
2. 修改了产品卡片的图片比例
3. 更新了移动端响应式样式
```

### 4.3 遵守规范确认
```
✅ 遵守规范确认：
- 未修改 URL 结构
- 未写死内容数据
- 未破坏 SEO 元素
- 未修改已有设计
```

---

## 5. 新增页面规范

### 5.1 新增静态页面
- 遵循 [01-site-map.md](./01-site-map.md) 的 URL 规范
- 确保页面包含所有 SEO 元素（H1、title、meta description、canonical）
- 添加 breadcrumb 结构
- 添加必要的 Schema

### 5.2 新增动态页面
- 动态页面需规划 URL 结构
- 创建对应的 WordPress 内容类型
- 确保数据通过 API 获取

---

## 6. SEO 规范

### 6.1 必须保留的元素
每个页面必须包含：
- `<title>` 标签（唯一、不超过 60 字符）
- `<meta name="description">`（唯一、150-160 字符）
- `<link rel="canonical">` 标签
- Breadcrumb 结构
- 唯一 H1 标签
- 所有图片的 alt 属性

### 6.2 Schema 规范
- 产品页必须包含 Product Schema
- 博客页必须包含 Article Schema
- 所有页面必须包含 BreadcrumbList Schema

### 6.3 URL 规范
- 使用英文小写
- 单词间用连字符 `-`
- 不超过 3 层深度

---

## 7. WordPress CMS 规范

### 7.1 当前状态
- WordPress Headless CMS 尚未集成
- 产品和博客暂时写死在代码中（过渡方案）
- 最终目标是所有动态内容由 WordPress 管理

### 7.2 过渡期规范
在 WordPress 集成前：
- 新增产品/博客内容时，创建独立页面文件
- 页面结构遵循最终 URL 规范
- 为后续 CMS 集成预留数据结构

### 7.3 CMS 集成后
- 所有产品迁移到 WordPress 管理
- 所有博客迁移到 WordPress 管理
- 前端代码改为 API 获取数据
- 删除写死的内容文件

---

## 8. 代码规范

### 8.1 React/Next.js 规范
- 优先使用 Server Components
- 避免滥用 `use client`
- 组件职责单一
- Props 类型定义清晰

### 8.2 样式规范
- 优先使用 Tailwind CSS
- 保持样式一致性
- 遵循现有设计系统

### 8.3 文件组织
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── products/          # 产品相关
│   ├── collections/      # 系列相关
│   ├── applications/     # 应用场景
│   ├── resources/        # 资源/博客
│   ├── projects/         # 项目案例
│   └── ...
├── components/           # React 组件
├── lib/                  # 工具函数
└── styles/              # 全局样式
```

---

## 9. 视觉设计规范

### 9.1 已有设计
- 首页设计：已完成
- 产品列表/详情页：已完成
- Collections 页面：已完成
- Applications 页面：已完成
- Custom Solutions 页面：已完成
- About 页面：已完成
- Contact 页面：已完成

### 9.2 设计修改
- 样式微调：可接受（需说明）
- 布局调整：需确认
- 设计重构：禁止

---

## 10. 故障排查

### 10.1 常见问题
| 问题 | 可能原因 | 解决思路 |
|------|----------|----------|
| 页面加载慢 | 图片过大 | 使用 WebP 格式，优化图片 |
| SEO 缺失 | 组件问题 | 检查 layout.tsx 的 metadata |
| 样式错乱 | Tailwind 冲突 | 检查类名优先级 |
| 功能失效 | JS 错误 | 检查浏览器控制台 |

### 10.2 调试建议
1. 使用 `console.log` 调试变量
2. 检查 Network 面板的 API 请求
3. 使用 React DevTools 检查组件状态

---

## 11. 相关文档

- [.cursor/rules/tongli-website.mdc](./.cursor/rules/tongli-website.mdc) - 项目规则摘要
- [00-project-brief.md](./00-project-brief.md) - 项目概述
- [01-site-map.md](./01-site-map.md) - 网站结构
- [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) - WordPress CMS 架构
- [03-seo-technical-checklist.md](./03-seo-technical-checklist.md) - SEO 技术清单
