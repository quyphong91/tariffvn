import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Share2, Copy, Check } from "lucide-react";
import { getPostBySlug, getRecentPosts } from "@/data/blogData";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useState } from "react";
import { toast } from "sonner";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = slug ? getPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
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

  if (!post) {
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
            <Button onClick={() => navigate("/news")}>
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
      <Helmet>
        <title>{post.title} | TracuuHS</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | TracuuHS`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/news")}
              className="mb-6 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Button>

            {/* Article */}
            <article className="space-y-6">
              {/* Header */}
              <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}
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
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

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
                      {post.content}
                    </ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
              <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Bài viết khác
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentPosts.slice(0, 2).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/news/${relatedPost.slug}`}
                      className="group"
                    >
                      <Card className="h-full shadow-card hover:shadow-soft transition-all duration-300 group-hover:-translate-y-1">
                        <CardContent className="p-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={relatedPost.date}>
                              {format(new Date(relatedPost.date), "dd/MM/yyyy")}
                            </time>
                          </div>
                          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
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
