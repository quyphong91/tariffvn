import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, Calendar, Share2, Check, Loader2, ChevronRight, Home } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { useArticleBySlug, usePublishedArticles } from "@/hooks/useArticles";

const BASE_URL = "https://tracuuhs.com";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const { data: article, isLoading, error } = useArticleBySlug(slug);
  const { data: allArticles } = usePublishedArticles();
  
  // Get related articles (exclude current)
  const relatedArticles = allArticles?.filter(a => a.slug !== slug).slice(0, 2) || [];

  // Breadcrumbs data - auto-updates when article changes
  const breadcrumbs = useMemo(() => {
    if (!article) return [];
    return [
      { name: "Trang chủ", url: BASE_URL },
      { name: "Tin tức", url: `${BASE_URL}/tin-tuc` },
      { name: article.title, url: `${BASE_URL}/tin-tuc/${article.slug}` },
    ];
  }, [article]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.summary || "",
          url,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Đã sao chép link bài viết");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">
              Không tìm thấy bài viết
            </h1>
            <p className="text-muted-foreground">
              Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.
            </p>
            <Button onClick={() => navigate("/tin-tuc")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.summary || ""}
        image={article.image_url || undefined}
        type="article"
        articleData={{
          publishedTime: article.published_at,
          modifiedTime: article.updated_at || undefined,
        }}
        breadcrumbs={breadcrumbs}
      />

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Visual Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only md:not-sr-only">Trang chủ</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <Link
                    to="/tin-tuc"
                    className="hover:text-primary transition-colors"
                  >
                    Tin tức
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-foreground font-medium line-clamp-1 max-w-[200px] md:max-w-none">
                    {article.title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Article */}
            <article className="space-y-6">
              {/* Header */}
              <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.published_at}>
                      {format(new Date(article.published_at), "dd MMMM, yyyy", { locale: vi })}
                    </time>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="gap-2"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                    Chia sẻ
                  </Button>
                </div>
              </header>

              {/* Cover Image */}
              {article.image_url && (
                <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <Card className="shadow-card">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-li:text-muted-foreground prose-table:text-sm">
                    <ReactMarkdown
                      components={{
                        h2: ({ children }) => (
                          <h2 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-3">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-6 space-y-2 mb-4 text-muted-foreground">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-muted-foreground">{children}</li>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6 bg-muted/30 py-3 pr-4 rounded-r-lg">
                            {children}
                          </blockquote>
                        ),
                        a: ({ href, children }) => (
                          <Link
                            to={href || "#"}
                            className="text-primary hover:text-primary/80 underline underline-offset-2"
                          >
                            {children}
                          </Link>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-foreground">
                            {children}
                          </strong>
                        ),
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-6">
                            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children }) => (
                          <thead className="bg-muted">{children}</thead>
                        ),
                        th: ({ children }) => (
                          <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="border border-border px-4 py-2 text-muted-foreground">
                            {children}
                          </td>
                        ),
                      }}
                    >
                      {article.content || ""}
                    </ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Related Posts */}
            {relatedArticles.length > 0 && (
              <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Bài viết khác
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/tin-tuc/${relatedArticle.slug}`}
                      className="group"
                    >
                      <Card className="h-full shadow-card hover:shadow-soft transition-all duration-300 group-hover:-translate-y-1">
                        <CardContent className="p-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={relatedArticle.published_at}>
                              {format(new Date(relatedArticle.published_at), "dd/MM/yyyy")}
                            </time>
                          </div>
                          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedArticle.summary}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsDetail;
