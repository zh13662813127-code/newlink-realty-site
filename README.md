# Newlink Realty website

This is a framework-free, responsive static site for Newlink Realty. It is designed to be easy for search engines and AI systems to understand through semantic HTML, JSON-LD, `robots.txt`, `sitemap.xml` and `llms.txt`.

Indexable landing pages are included for `/about/`, `/services/`, `/residential-sale/`, `/rent/`, `/manage/`, `/commercial-leases/` and `/contact/` so each core service has a distinct URL and description.

For the person handling hosting and DNS, see `TECH-DEPLOY-INSTRUCTIONS-CN.md`.

## Run locally

```bash
cd newlink-realty-site
python3 -m http.server 4173
```

Then open http://127.0.0.1:4173/.

## Deploy

Upload this directory to any static host such as Netlify, Vercel, Cloudflare Pages or an existing web server. Update the canonical URL, Open Graph image URL and sitemap URLs in `index.html`, `robots.txt` and `sitemap.xml` if the site will use a different domain.

The contact form is marked up for Netlify Forms and currently shows an in-page confirmation for static hosting. Connect it to the preferred CRM, email service or form provider before production launch.
