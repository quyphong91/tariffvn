// ============================================
// SITEMAP ROUTES CONFIGURATION
// ============================================
// Định nghĩa các routes tĩnh và động cho sitemap
// Khi thêm trang mới, cập nhật danh sách staticRoutes bên dưới
// ============================================

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Các routes tĩnh của website
export const staticRoutes: SitemapRoute[] = [
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

// Domain chính của website (thay đổi khi deploy)
export const SITE_URL = 'https://tracuuhs.com';
