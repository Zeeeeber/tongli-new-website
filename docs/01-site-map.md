# Tongli Timber 网站结构 (Sitemap)

本文档记录网站的正式 URL 结构，区分静态页面和动态页面，便于后续 WordPress CMS 集成规划。

---

## 1. 完整 URL 结构

### 首页
```
/                           # 静态页面（固定）
```

### Products (产品) - 需 WordPress 动态管理
```
/products                                           # 产品列表页（静态）
/products/wood-veneer-panels                        # 固定分类页
/products/natural-wood-veneer                       # 固定分类页
/products/engineered-wood-veneer                    # 固定分类页
/products/3d-wood-panels                            # 固定分类页
/products/veneer-edge-banding                       # 固定分类页
/products/melamine-board                            # 固定分类页
/products/supporting-boards                         # 固定分类页
/products/[category]/[product-slug]                 # 动态 - WordPress 产品详情页
```

### Collections (产品系列)
```
/collections                                        # 系列列表页（静态）
/collections/natural-wood-veneer                    # 固定分类页
/collections/engineered-veneer                      # 固定分类页
/collections/melamine-board                         # 固定分类页
```

### Applications (应用场景)
```
/applications                                       # 场景列表页（静态）
/applications/furniture-factory                     # 固定页面
/applications/hotel-projects                        # 固定页面
/applications/door-factory                          # 固定页面
/applications/commercial-spaces                     # 固定页面
/applications/high-end-customization                # 固定页面
/applications/wholesaler                            # 固定页面
```

### Custom Solutions (定制服务)
```
/custom-solutions                                   # 固定页面
```

### About (关于我们)
```
/about                                              # 固定页面
```

### Projects (项目案例) - 需 WordPress 动态管理
```
/projects                                           # 案例列表页（动态 - WordPress）
/projects/[project-slug]                            # 动态 - WordPress 案例详情页
```

### Resources (资源中心/Blog) - 需 WordPress 动态管理
```
/resources                                          # 资源列表页（动态 - WordPress）
/resources/category/product-news                    # 动态分类页
/resources/category/industry-news                   # 动态分类页
/resources/category/company-news                    # 动态分类页
/resources/[article-slug]                           # 动态 - WordPress 文章详情页
```

### Contact (联系我们)
```
/contact                                            # 固定页面
/thank-you                                          # 感谢页（静态）
```

### Technical Files (技术文件)
```
/sitemap.xml                                        # 自动生成
/robots.txt                                         # 静态配置
```

---

## 2. 页面分类

### 静态页面 (Static Pages)
这些页面内容相对固定，不需要频繁更新，由 Next.js 代码直接管理。

| URL | 类型 | 说明 |
|-----|------|------|
| `/` | 首页 | 公司介绍 + 主要产品入口 |
| `/products` | 列表页 | 产品分类导航 |
| `/products/wood-veneer-panels` | 分类页 | 木皮胶合板分类 |
| `/products/natural-wood-veneer` | 分类页 | 天然木皮分类 |
| `/products/engineered-wood-veneer` | 分类页 | 科技木皮分类 |
| `/products/3d-wood-panels` | 分类页 | 3D木纹板分类 |
| `/products/veneer-edge-banding` | 分类页 | 封边条分类 |
| `/products/melamine-board` | 分类页 | 三聚氰胺板分类 |
| `/products/supporting-boards` | 分类页 | 辅材板分类 |
| `/collections` | 列表页 | 系列导航 |
| `/collections/natural-wood-veneer` | 分类页 | 天然木皮系列 |
| `/collections/engineered-veneer` | 分类页 | 科技木系列 |
| `/collections/melamine-board` | 分类页 | 三聚氰胺板系列 |
| `/applications` | 列表页 | 应用场景导航 |
| `/applications/furniture-factory` | 详情页 | 家具厂应用 |
| `/applications/hotel-projects` | 详情页 | 酒店项目应用 |
| `/applications/door-factory` | 详情页 | 门厂应用 |
| `/applications/commercial-spaces` | 详情页 | 商业空间应用 |
| `/applications/high-end-customization` | 详情页 | 高端定制应用 |
| `/applications/wholesaler` | 详情页 | 批发商应用 |
| `/custom-solutions` | 详情页 | 定制服务 |
| `/about` | 详情页 | 关于我们 |
| `/contact` | 表单页 | 联系我们 |
| `/thank-you` | 感谢页 | 提交成功感谢 |

### 动态页面 (Dynamic Pages) - WordPress 管理
这些页面内容需要频繁更新，由 WordPress CMS 管理。

| URL | WordPress 内容类型 | 说明 |
|-----|-------------------|------|
| `/products/[category]/[product-slug]` | Products | 单个产品详情页 |
| `/projects` | Projects | 项目案例列表 |
| `/projects/[project-slug]` | Projects | 单个案例详情 |
| `/resources` | Blog/Post | 资源/博客列表 |
| `/resources/[article-slug]` | Blog/Post | 单篇文章详情 |

---

## 3. URL 命名规范

### 规则
1. 使用英文小写字母
2. 单词之间用连字符 `-` 分隔
3. 避免使用特殊字符和中文
4. URL 层级不宜过深（最多 3 层）

### 示例
```
/products/natural-wood-veneer          # ✅ 正确
/products/Natural-Wood-Veneer          # ❌ 大写
/products/natural_wood_veneer          # ❌ 下划线
/products/天然木皮                      # ❌ 中文
```

---

## 4. 分类页 URL 结构

### Products 分类
```
/products/natural-wood-veneer           # 天然木皮
/products/engineered-wood-veneer        # 科技木皮
/products/3d-wood-panels                # 3D木纹板
/products/veneer-edge-banding            # 封边条
/products/melamine-board                 # 三聚氰胺板
/products/supporting-boards             # 辅材板
```

### Resources 分类
```
/resources/category/product-news        # 产品新闻
/resources/category/industry-news       # 行业资讯
/resources/category/company-news        # 公司新闻
```

---

## 5. 未来 WordPress 路由映射

当 WordPress Headless CMS 集成后，以下路由将指向 WordPress 数据：

| Next.js 路由 | WordPress 内容类型 | 数据源 |
|-------------|-------------------|--------|
| `/products/[category]/[slug]` | `product` | WordPress REST API |
| `/projects` | `project` | WordPress REST API |
| `/projects/[slug]` | `project` | WordPress REST API |
| `/resources` | `post` | WordPress REST API |
| `/resources/[slug]` | `post` | WordPress REST API |

---

## 6. 禁止事项

- ❌ 不要修改已有的 URL 结构
- ❌ 不要在 URL 中添加无意义的参数
- ❌ 不要创建重复内容页面
- ❌ 不要使用中文或特殊字符作为 URL

---

## 7. 相关文档

- [00-project-brief.md](./00-project-brief.md) - 项目概述
- [02-wordpress-cms-architecture.md](./02-wordpress-cms-architecture.md) - WordPress CMS 架构
