import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/data/blogData";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const NewsList = () => {
  const canonicalUrl = useCanonicalUrl();
  const posts = getAllPosts();

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Tin tức & Bài viết | TracuuHS</title>
        <meta
          name="description"
          content="Cập nhật tin tức, hướng dẫn phân loại hàng hóa, biểu thuế và các thay đổi chính sách liên quan đến mã HS Code tại Việt Nam."
        />
        <meta property="og:title" content="Tin tức & Bài viết | TracuuHS" />
        <meta
          property="og:description"
          content="Cập nhật tin tức, hướng dẫn phân loại hàng hóa, biểu thuế và các thay đổi chính sách liên quan đến mã HS Code."
        />
      </Helmet>

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

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Chưa có bài viết nào.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/news/${post.slug}`}
                  className="group block animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group-hover:-translate-y-1">
                    {/* Cover Image */}
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-5 space-y-3">
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}
                        </time>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
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
