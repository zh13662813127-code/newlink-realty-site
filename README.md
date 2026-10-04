# Newlink Realty website

This is a framework-free, responsive static site for Newlink Realty. It is designed to be easy for search engines and AI systems to understand through semantic HTML, JSON-LD, `robots.txt`, `sitemap.xml` and `llms.txt`.

The live site is currently published at https://zh13662813127-code.github.io/newlink-realty-site/. Indexable landing pages are included for `/about/`, `/services/`, `/residential-sale/`, `/rent/`, `/manage/`, `/commercial-leases/` and `/contact/` so each core service has a distinct URL and description.

For the person handling hosting and DNS, see `TECH-DEPLOY-INSTRUCTIONS-CN.md`.

## Run locally

```bash
cd newlink-realty-site
python3 -m http.server 4173
```

Then open http://127.0.0.1:4173/.

## Deploy

The site is deployed through GitHub Pages from the `main` branch. A custom domain can be added later; when that happens, update the canonical URL, Open Graph image URL and sitemap URLs in the HTML files, `robots.txt` and `sitemap.xml`, then add the matching `CNAME` file.

The contact form is marked up for Netlify Forms and currently shows an in-page confirmation for static hosting. Connect it to the preferred CRM, email service or form provider before production launch.
