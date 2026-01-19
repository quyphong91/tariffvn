import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { usePublishedArticles } from "@/hooks/useArticles";

const NewsList = () => {
  const { data: articles, isLoading, error } = usePublishedArticles();

  return (
    <>
      <SEOHead
        title="Tin tức & Bài viết"
        description="Cập nhật tin tức, hướng dẫn phân loại hàng hóa, biểu thuế và các thay đổi chính sách liên quan đến mã HS Code tại Việt Nam."
      />

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tin tức & Bài viết
            </h1>
            <p className="text-muted-foreground text-lg">
              Cập nhật thông tin mới nhất về HS Code, biểu thuế và chính sách hải quan
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <p className="text-destructive">Có lỗi xảy ra khi tải bài viết.</p>
            </div>
          )}

          {/* Posts Grid */}
          {!isLoading && !error && articles?.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Chưa có bài viết nào.</p>
            </div>
          )}

          {!isLoading && !error && articles && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/tin-tuc/${article.slug}`}
                  className="group block animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group-hover:-translate-y-1">
                    {/* Cover Image */}
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={article.image_url || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-5 space-y-3">
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.published_at}>
                          {format(new Date(article.published_at), "dd MMMM, yyyy", { locale: vi })}
                        </time>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.summary}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-1 text-sm font-medium text-primary pt-2">
                        <span>Đọc thêm</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsList;
