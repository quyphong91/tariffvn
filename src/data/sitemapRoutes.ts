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
  { path: '/tra-cuu-hs-code', priority: 0.9, changefreq: 'weekly' },
  { path: '/tra-cuu-thue-nhap-khau', priority: 0.9, changefreq: 'monthly' },
  { path: '/ai-tra-cuu-hs', priority: 0.8, changefreq: 'daily' },
  { path: '/quy-tac-phan-loai-hs', priority: 0.8, changefreq: 'monthly' },
  { path: '/chu-giai-hs', priority: 0.8, changefreq: 'monthly' },
  { path: '/chu-giai-hs/full-all', priority: 0.7, changefreq: 'monthly' },
  { path: '/chu-giai-sen', priority: 0.8, changefreq: 'monthly' },
  { path: '/tuyen-tap-phan-loai-wco', priority: 0.7, changefreq: 'monthly' },
  { path: '/tin-tuc', priority: 0.8, changefreq: 'daily' },
  { path: '/gioi-thieu', priority: 0.6, changefreq: 'monthly' },
  { path: '/chinh-sach-bao-mat', priority: 0.5, changefreq: 'yearly' },
];

// Domain chính của website (thay đổi khi deploy)
export const SITE_URL = 'https://tracuuhs.com';
