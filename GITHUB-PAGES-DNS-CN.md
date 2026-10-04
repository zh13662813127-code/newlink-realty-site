# GitHub Pages 上线与 DNS 切换

仓库：<https://github.com/zh13662813127-code/newlink-realty-site>

GitHub Pages 已从 `main` 分支根目录发布，并已绑定自定义域名 `newlinkrealty.com.au`。

## GoDaddy DNS 记录

在 GoDaddy 的 DNS 管理中，只修改网站访问记录：

| 类型 | 主机 | 值 |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `zh13662813127-code.github.io` |

删除或替换旧的网站 A 记录和 `www` CNAME。不要删除 Microsoft 365 的 MX 记录，否则企业邮箱会受影响。DNS 生效通常需要几分钟到数小时。

## GitHub Pages 设置

DNS 生效后，在仓库 **Settings → Pages** 确认 Custom domain 为 `newlinkrealty.com.au`，等待证书签发后开启 **Enforce HTTPS**。同时检查 `www.newlinkrealty.com.au` 是否跳转到主域名。

## 搜索引擎收录

网站允许抓取，已经包含 `robots.txt`、`sitemap.xml`、语义 HTML、JSON-LD 和 `llms.txt`。上线后：

1. 在 Google Search Console 添加域名并完成 DNS 验证。
2. 提交 `https://newlinkrealty.com.au/sitemap.xml`。
3. 在 Bing Webmaster Tools 添加站点并提交相同 sitemap。
4. 用 URL Inspection 请求首页和主要服务页编入索引。

GitHub Pages 本身不会保证排名或收录；公开、稳定的 HTTPS 页面、真实内容、持续更新和外部引用仍然会影响结果。

## 表单限制

当前联系表单在 GitHub Pages 上只显示本地确认，不会自动发邮件。生产上线前需要接入 Formspree、Basin、Getform 或自有 API，并在 `index.html` 中替换表单提交地址。
