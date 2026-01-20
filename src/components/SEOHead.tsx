import { Helmet } from "react-helmet-async";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const BASE_URL = "https://tracuuhs.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-banner.png`;
const LOGO_URL = `${BASE_URL}/Logo.png`;

interface ArticleData {
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  articleData?: ArticleData;
  isHomepage?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export function SEOHead({
  title,
  description,
  image,
  url,
  type = "website",
  noIndex = false,
  articleData,
  isHomepage = false,
  breadcrumbs,
}: SEOHeadProps) {
  const canonicalUrl = useCanonicalUrl();
  const pageUrl = url || canonicalUrl;
  const pageImage = image || DEFAULT_IMAGE;
  const fullTitle = title.includes("| HSTC") ? title : `${title} | HSTC`;

  // Organization Schema (Homepage only)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Công cụ tra cứu HS Code nhanh và toàn diện - HSTC",
    url: BASE_URL,
    logo: LOGO_URL,
    sameAs: [
      // Placeholders for social links
      // "https://www.facebook.com/hstc",
      // "https://www.youtube.com/@hstc",
    ],
  };

  // WebSite Schema with SearchAction (Homepage only)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tra cứu thuế nhập khẩu theo HS Code - HSTC",
    alternateName: [
      "tracuuhs.com",
      "Tra cứu thuế nhập khẩu",
      "Tra cứu biểu thuế",
      "Tra cứu thuế suất",
      "Tra cứu biểu thuế",
    ],
    url: `${BASE_URL}/`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/tra-cuu-thue-nhap-khau?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // NewsArticle Schema (Article pages only)
  const newsArticleSchema = articleData
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: title,
        description: description,
        image: pageImage,
        datePublished: articleData.publishedTime,
        dateModified: articleData.modifiedTime || articleData.publishedTime,
        author: {
          "@type": "Organization",
          name: articleData.author || "Ban biên tập HSTC",
        },
        publisher: {
          "@type": "Organization",
          name: "HSTC",
          logo: {
            "@type": "ImageObject",
            url: LOGO_URL,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      }
    : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="HSTC" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />

      {/* Article-specific meta tags */}
      {type === "article" && articleData && (
        <>
          <meta property="article:published_time" content={articleData.publishedTime} />
          {articleData.modifiedTime && (
            <meta property="article:modified_time" content={articleData.modifiedTime} />
          )}
        </>
      )}

      {/* Homepage Schemas */}
      {isHomepage && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
        </>
      )}

      {/* Article Schema */}
      {type === "article" && newsArticleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(newsArticleSchema)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
