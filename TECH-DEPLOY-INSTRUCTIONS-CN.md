# Newlink Realty 新网站部署说明

这份说明给负责上线的技术人员使用。

## 先确认三个概念

- **Domain / 域名**：`newlinkrealty.com.au`，只是网址和 DNS 解析入口。
- **Hosting / 服务器**：真正存放网站文件并运行网站的地方，可以是 GoDaddy 主机，也可以是 AWS EC2、Lightsail 或其他云服务器。
- **CMS / 后台**：登录后编辑文章、图片和页面的管理系统。本次交付的是静态 HTML 网站，默认没有 CMS 后台，更新内容需要替换服务器上的文件，或后续另接 CMS。

域名已经能打开旧网站，说明当前一定存在可用的托管服务。是否需要购买新服务器，要先查清楚当前域名 DNS 指向和现有网站的托管位置，不能仅凭“有域名”判断。

## 本次要上传的文件

解压 `newlink-realty-site-upload.zip` 后，将里面的全部内容上传到网站 Web 根目录。`index.html` 必须直接位于根目录。

必须能直接访问：

```text
https://www.newlinkrealty.com.au/
https://www.newlinkrealty.com.au/about/
https://www.newlinkrealty.com.au/services/
https://www.newlinkrealty.com.au/residential-sale/
https://www.newlinkrealty.com.au/rent/
https://www.newlinkrealty.com.au/manage/
https://www.newlinkrealty.com.au/commercial-leases/
https://www.newlinkrealty.com.au/contact/
https://www.newlinkrealty.com.au/robots.txt
https://www.newlinkrealty.com.au/sitemap.xml
https://www.newlinkrealty.com.au/llms.txt
```

## 方案 A：使用 GoDaddy 自己购买的主机

适用于 GoDaddy 的 Web Hosting、Linux Hosting、cPanel Hosting 等产品。仅有 Domain 管理页面不够，还需要有 Hosting 产品。

1. 登录 GoDaddy，进入 **My Products / 我的产品**。
2. 找到 **Web Hosting / 网站主机**，点击 **Manage / 管理**。
3. 进入 **cPanel** 或 **File Manager / 文件管理器**。
4. 打开网站根目录，通常是 `public_html`、`www` 或 `htdocs`。
5. 先把旧网站完整备份，至少备份当前根目录和数据库（如果旧站使用数据库）。
6. 上传 `newlink-realty-site-upload.zip`。
7. 在服务器上解压 ZIP，并确认 `index.html`、`robots.txt`、`sitemap.xml` 是根目录文件，不要多套一层 `newlink-realty-site/` 文件夹。
8. 清理或刷新缓存，打开首页和上面列出的独立页面逐一检查。

如果 GoDaddy 只有 Domain，没有 Web Hosting，就不能把这些文件上传到 Domain 页面；需要使用已有 AWS 服务器，或购买一个 Hosting 产品。

## 方案 B：继续使用 AWS 服务器

适用于域名 DNS 已经指向 AWS EC2、Lightsail、Elastic Beanstalk、S3/CloudFront 或其他 AWS 服务的情况。

技术人员需要先确认：

- DNS A/AAAA/CNAME 记录当前指向哪一个 AWS 服务；
- 使用 Nginx、Apache、S3/CloudFront 还是其他 Web 服务；
- 网站根目录实际路径，例如 `/var/www/html` 或项目部署目录；
- 当前部署方式是 SFTP、SSH、Git、CI/CD 还是 AWS 控制台上传。

确认后，将 ZIP 内容上传或发布到当前网站根目录，并让 Web 服务继续把 `/` 指向新的 `index.html`。如果使用 Nginx/Apache，需要确认目录权限和静态文件配置；如果使用 S3/CloudFront，需要上传到对应 bucket 并刷新 CloudFront 缓存。

## 是否需要购买服务器

不一定。分三种情况：

1. **已有可用的 AWS 服务器**：通常不需要再买服务器，只需要替换现有网站文件或配置新的发布目录。
2. **已有 GoDaddy Web Hosting**：通常不需要再买服务器，直接上传到 GoDaddy 的 Web 根目录。
3. **只有 GoDaddy Domain，没有任何 Hosting**：需要选择一个托管方式，购买 GoDaddy Hosting 或使用 AWS 服务器。

域名和服务器可以分开购买。域名只负责解析，服务器负责存放和提供网站。

## 关于“后台”和 Asset 文件

本次新网站没有 WordPress、Strapi 或其他 CMS 后台。文件结构如下：

- 页面文件：各目录下的 `index.html`
- 样式：`styles.css`、`subpages.css`
- 交互：`script.js`
- 图片和 Logo：`assets/`
- AI/搜索引擎文件：`robots.txt`、`sitemap.xml`、`llms.txt`

上传后，图片会位于：

```text
https://www.newlinkrealty.com.au/assets/
```

旧网站的公开 HTML 显示其部分资源来自旧站的 Rails ActiveStorage 和 Phoenix S3 地址；这不能作为新站的上传入口。新站的资源已经随 ZIP 放在本地 `assets/` 文件夹中。

如果业务方需要“登录后台改文字和图片”，需要额外接入 CMS，或改造成 WordPress/Headless CMS；本次 ZIP 本身不包含后台账号或内容管理系统。

## 上线后的必查项

1. 先用临时地址或 staging 检查，不要直接覆盖生产站而不留备份。
2. 确认 HTTPS 正常，HTTP 自动跳转 HTTPS。
3. 确认旧域名的 `www` 和非 `www` 访问策略一致。
4. 确认 `robots.txt`、`sitemap.xml`、`llms.txt` 可公开访问。
5. 将 `https://www.newlinkrealty.com.au/sitemap.xml` 提交到 Google Search Console 和 Bing Webmaster Tools。
6. 联系表单需要接入邮箱、CRM 或表单服务；当前页面只保留了静态表单结构。

## 需要技术人员回复的信息

请技术人员确认以下四项后再正式替换旧站：

```text
1. 当前域名 DNS 指向的托管平台：GoDaddy / AWS / 其他
2. 当前网站文件根目录或部署方式：cPanel / SFTP / SSH / Git / S3 / 其他
3. 是否存在旧站数据库和 CMS 后台，以及是否需要保留
4. 联系表单准备接收至哪个邮箱、CRM 或表单服务
```
