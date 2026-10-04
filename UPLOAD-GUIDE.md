# Newlink Realty 上传说明

## 上传方式

将本压缩包内的全部内容上传到网站的 Web 根目录（通常是 `public_html`、`www` 或 `htdocs`）。

上传后，以下文件必须直接位于网站根目录：

- `index.html`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `assets/`
- `about/`
- `services/`
- `residential-sale/`
- `rent/`
- `manage/`
- `commercial-leases/`
- `contact/`

不要把整个压缩包文件名对应的文件夹再套一层，否则首页会变成 `/newlink-realty-site/index.html`。

## 上线后检查

1. 打开 `https://www.newlinkrealty.com.au/`，确认首页能正常访问。
2. 分别打开 `/about/`、`/services/`、`/residential-sale/`、`/rent/`、`/manage/`、`/commercial-leases/`、`/contact/`。
3. 确认 `https://www.newlinkrealty.com.au/robots.txt` 可以访问。
4. 确认 `https://www.newlinkrealty.com.au/sitemap.xml` 可以访问。
5. 确认 `https://www.newlinkrealty.com.au/llms.txt` 可以访问。
6. 确认网站启用了 HTTPS，且 HTTP 会跳转到 HTTPS。

## 搜索引擎提交

上线后将以下地址提交到 Google Search Console 和 Bing Webmaster Tools：

`https://www.newlinkrealty.com.au/sitemap.xml`

## 表单说明

页面表单已经保留为静态表单结构。正式上线前，请将表单接入现有邮箱、CRM 或表单服务，否则用户提交后不会自动发送到业务邮箱。

## 域名说明

当前页面中的 canonical、Open Graph 和 sitemap 已按 `https://www.newlinkrealty.com.au/` 配置。如果实际部署域名不同，请同步修改 `index.html`、各独立页面、`robots.txt` 和 `sitemap.xml` 中的域名。
