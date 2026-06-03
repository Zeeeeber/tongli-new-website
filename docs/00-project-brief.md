# Tongli Timber 外贸独立站 - 项目概述

## 1. 网站商业目标

### 核心目标
打造一个专业的 B2B 外贸独立站，通过 Google SEO 获取海外客户询盘，实现从"被动获客"到"主动引流"的业务模式升级。

### 关键指标
- 目标市场：全球 B2B 买家（家具制造商、酒店项目承包商、门厂、批发商、高端定制商）
- 核心渠道：Google 搜索引擎（SEO + 部分付费流量）
- 转化目标：获取高质量询盘邮件，而非即时在线下单

---

## 2. 目标客户画像

### 主要客户类型

| 客户类型 | 特征 | 核心需求 |
|---------|------|---------|
| 家具厂 | 大批量采购，注重性价比和供货稳定性 | 产品规格齐全、价格有竞争力 |
| 酒店项目承包商 | 项目导向，注重品质和交付能力 | 产品质量认证、项目案例 |
| 门厂 | 中等批量，注重贴面效果和加工性能 | 贴面质量、厚度规格多样 |
| 商业空间装修商 | 项目导向，注重设计和视觉呈现 | 花色选择、表面处理效果 |
| 高端定制商 | 小批量，注重独特性和品质 | 稀有木皮、定制服务 |
| 批发商 | 大批量，注重价格和物流 | 起订量灵活、物流配套 |

### 客户决策因素
1. 产品质量（证书、样品）
2. 价格竞争力
3. 供货稳定性
4. 定制能力
5. 物流支持

---

## 3. 产品范围

### 产品分类体系

```
Products (产品)
├── Wood Veneer Panels (木皮胶合板)
│   ├── Natural Wood Veneer (天然木皮)
│   ├── Engineered Wood Veneer (科技木皮)
│   └── 3D Wood Panels (立体木纹板)
├── Edge Banding (封边条)
│   └── Veneer Edge Banding (木皮封边条)
├── Melamine Board (三聚氰胺板)
│   └── Various Colors (多种花色)
└── Supporting Boards (辅材板)
    ├── MDF
    ├── Plywood (胶合板)
    └── Particle Board (刨花板)

Collections (产品系列)
├── Natural Wood Veneer (天然木皮系列)
├── Engineered Veneer (科技木系列)
└── Melamine Board (三聚氰胺板系列)

Applications (应用场景)
├── Furniture Factory (家具厂)
├── Hotel Projects (酒店项目)
├── Door Factory (门厂)
├── Commercial Spaces (商业空间)
├── High-End Customization (高端定制)
└── Wholesaler (批发商)

Custom Solutions (定制服务)
├── Veneer Species (木皮品种选择)
├── Substrate Types (基材选择)
├── Dimensions (尺寸定制)
├── Veneer Matching (拼花方式)
├── Paint/Finish (油漆/表面处理)
└── Packaging (包装方式)
```

---

## 4. 内容运营策略

### 内容类型

| 内容类型 | 用途 | 更新频率 |
|---------|------|---------|
| 产品详情 | 展示产品规格、应用、优势 | 根据新品/调整更新 |
| 产品新闻 | 行业趋势、新品发布 | 每月 2-4 篇 |
| 行业资讯 | 木材行业动态 | 每月 1-2 篇 |
| 公司新闻 | 展会、认证、动态 | 按需发布 |
| 项目案例 | 展示成功合作案例 | 每季度 1-2 篇 |
| FAQ | 解答常见技术问题 | 按需补充 |

### 内容原则
- **真实性**：所有产品、案例、数据必须真实
- **专业性**：展示木材行业专业知识
- **实用性**：帮助客户了解产品和使用场景
- **国际化**：英文为主，目标市场语言版本

---

## 5. 长期运营模式

### CMS 架构
- **前端**：Next.js（静态生成 + ISR）
- **后端**：WordPress Headless CMS
- **数据流向**：WordPress 后台 → API → Next.js 前端

### 运营流程
1. 业务人员在 WordPress 后台创建/编辑内容
2. 内容通过 REST API 或 GraphQL 同步到前端
3. Next.js 页面自动更新（ISR 增量静态再生）
4. 搜索索引自动更新

### SEO 维护
- 每个页面独立设置 title、description、canonical
- 自动生成 sitemap.xml
- 结构化数据（Schema）标记
- 图片 alt 标签管理

---

## 6. 项目约束

### 绝对禁止事项
1. ❌ 虚构客户、证书、案例、数据
2. ❌ 写死产品和博客内容到 page.tsx
3. ❌ 随意修改 sitemap 和 URL 结构
4. ❌ 不符合 Google SEO 基础要求
5. ❌ 重复造轮子（已有设计不要重做）

### 必须遵守
1. ✅ 所有内容通过 WordPress 后台管理
2. ✅ 每个页面满足 SEO 技术要求
3. ✅ 保持 URL 结构稳定
4. ✅ 页面设计完成后，新增内容不改代码

---

## 7. 项目参与人员

| 角色 | 职责 |
|-----|------|
| 业务人员 | WordPress 后台内容维护、询盘处理 |
| 前端开发 | Next.js 开发、SEO 优化、技术维护 |
| SEO 专员 | 关键词研究、内容策略、流量分析 |
| 项目管理 | 协调开发进度、质量把控 |

---

## 8. 相关文档

- [01-site-map.md](./01-site-map.md) - 网站结构
- [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) - WordPress CMS 架构
- [03-seo-technical-checklist.md](./03-seo-technical-checklist.md) - SEO 技术清单
- [04-content-publishing-workflow.md](./04-content-publishing-workflow.md) - 内容发布流程
- [05-cursor-working-rules.md](./05-cursor-working-rules.md) - 开发规则
