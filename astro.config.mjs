import { defineConfig } from 'astro/config';

const normalizeSiteUrl = (value) => {
  if (!value) return null;
  return value.replace(/\/+$/, '');
};

export default defineConfig({
  site: normalizeSiteUrl(process.env.SITE_URL) ?? 'https://routsify.com',
  output: 'static',
  trailingSlash: 'always'
});
