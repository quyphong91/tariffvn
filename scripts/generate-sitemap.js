// ============================================
// SITEMAP GENERATOR SCRIPT
// ============================================
// Chạy script này để tạo sitemap.xml:
// node scripts/generate-sitemap.js
// ============================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Domain chính của website
const SITE_URL = 'https://tracuuhs.com';

// Static routes
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/search', priority: 0.9, changefreq: 'weekly' },
  { path: '/tariff-lookup', priority: 0.9, changefreq: 'monthly' },
  { path: '/gri-rules', priority: 0.8, changefreq: 'monthly' },
  { path: '/chapter-notes', priority: 0.8, changefreq: 'monthly' },
  { path: '/chapter-notes/full-all', priority: 0.7, changefreq: 'monthly' },
  { path: '/sen-notes', priority: 0.8, changefreq: 'monthly' },
  { path: '/wco-compendium', priority: 0.7, changefreq: 'monthly' },
  { path: '/news', priority: 0.8, changefreq: 'daily' },
];

// Read blog posts from blogData.ts
function extractBlogSlugs() {
  const blogDataPath = path.resolve(__dirname, '../src/data/blogData.ts');
  const content = fs.readFileSync(blogDataPath, 'utf-8');
  
  // Extract slugs using regex
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const dateRegex = /date:\s*["']([^"']+)["']/g;
  
  const slugs = [];
  const dates = [];
  
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  while ((match = dateRegex.exec(content)) !== null) {
    dates.push(match[1]);
  }
  
  return slugs.map((slug, index) => ({
    slug,
    date: dates[index] || new Date().toISOString().split('T')[0]
  }));
}

// Generate XML sitemap
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const blogPosts = extractBlogSlugs();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static routes
  for (const route of staticRoutes) {
    xml += `  <url>
    <loc>${SITE_URL}/#${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  }

  // Add blog posts
  for (const post of blogPosts) {
    xml += `  <url>
    <loc>${SITE_URL}/#/news/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  }

  // Add chapter notes (1-99)
  for (let i = 1; i <= 99; i++) {
    const chapterNum = i.toString().padStart(2, '0');
    xml += `  <url>
    <loc>${SITE_URL}/#/chapter-notes/full/${chapterNum}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  }

  // Add SEN notes (1-99)
  for (let i = 1; i <= 99; i++) {
    const chapterNum = i.toString().padStart(2, '0');
    xml += `  <url>
    <loc>${SITE_URL}/#/sen-notes/full/${chapterNum}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  // Write to public folder
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📍 Location: ${outputPath}`);
  console.log(`📊 Total URLs: ${staticRoutes.length + blogPosts.length + 198}`);
  console.log(`   - Static pages: ${staticRoutes.length}`);
  console.log(`   - Blog posts: ${blogPosts.length}`);
  console.log(`   - Chapter notes: 99`);
  console.log(`   - SEN notes: 99`);
}

generateSitemap();
