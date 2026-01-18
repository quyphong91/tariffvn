import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Loader2, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useUpdateArticle, useDeleteArticle, generateSlug } from "@/hooks/useArticles";
import { useAdminRole } from "@/hooks/useAdminRole";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AdminArticleEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading } = useAdminRole();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [autoGenerateSlug, setAutoGenerateSlug] = useState(false);

  // Fetch article by ID
  const { data: article, isLoading: articleLoading, error: articleError } = useQuery({
    queryKey: ["articles", "id", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!id && !!user && isAdmin,
  });

  // Populate form when article is loaded
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSlug(article.slug);
      setSummary(article.summary || "");
      setContent(article.content || "");
      setImageUrl(article.image_url || "");
      setIsPublished(article.is_published ?? true);
    }
  }, [article]);

  // Auto-generate slug from title (only when enabled)
  useEffect(() => {
    if (autoGenerateSlug && title) {
      setSlug(generateSlug(title));
    }
  }, [title, autoGenerateSlug]);

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!roleLoading && user && !isAdmin) {
      toast.error("Bạn không có quyền truy cập trang này");
      navigate("/admin/login");
    }
  }, [isAdmin, roleLoading, user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    if (!title.trim() || !slug.trim()) {
      toast.error("Vui lòng nhập tiêu đề và slug");
      return;
    }

    try {
      await updateArticle.mutateAsync({
        id,
        title: title.trim(),
        slug: slug.trim(),
        summary: summary.trim() || undefined,
        content: content.trim() || undefined,
        image_url: imageUrl.trim() || undefined,
        is_published: isPublished,
      });

      toast.success("Đã cập nhật bài viết thành công!");
      navigate("/admin");
    } catch (error: any) {
      if (error.message?.includes("duplicate")) {
        toast.error("Slug đã tồn tại, vui lòng chọn slug khác");
      } else {
        toast.error("Có lỗi xảy ra khi cập nhật bài viết");
      }
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteArticle.mutateAsync(id);
      toast.success("Đã xóa bài viết thành công!");
      navigate("/admin");
    } catch (error) {
      toast.error("Có lỗi xảy ra khi xóa bài viết");
    }
  };

  // Loading state
  if (authLoading || roleLoading || articleLoading) {
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

  // Not authorized
  if (!user || !isAdmin) {
    return null;
  }

  // Article not found
  if (!article && !articleLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
            <Button onClick={() => navigate("/admin")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Admin Panel
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
        <title>Chỉnh sửa bài viết | Admin HSTC</title>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/admin")}
              className="mb-6 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Admin Panel
            </Button>

            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Chỉnh sửa bài viết</CardTitle>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" className="gap-2">
                      <Trash2 className="w-4 h-4" />
                      Xóa
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Xác nhận xóa bài viết?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Hành động này không thể hoàn tác. Bài viết sẽ bị xóa vĩnh viễn.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Hủy</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Xóa bài viết
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Tiêu đề *</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Nhập tiêu đề bài viết..."
                      required
                    />
                  </div>

                  {/* Slug */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="slug">Slug (URL) *</Label>
                      <div className="flex items-center gap-2">
                        <Switch
                          id="auto-slug"
                          checked={autoGenerateSlug}
                          onCheckedChange={setAutoGenerateSlug}
                        />
                        <Label htmlFor="auto-slug" className="text-sm text-muted-foreground">
                          Tự động tạo từ tiêu đề
                        </Label>
                      </div>
                    </div>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => {
                        setAutoGenerateSlug(false);
                        setSlug(e.target.value);
                      }}
                      placeholder="url-friendly-slug"
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      URL: /tin-tuc/{slug || "..."}
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <Label htmlFor="summary">Tóm tắt</Label>
                    <Textarea
                      id="summary"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Mô tả ngắn về bài viết (hiển thị ở trang danh sách)..."
                      rows={3}
                    />
                  </div>

                  {/* Image Upload */}
                  <ImageUpload
                    value={imageUrl}
                    onChange={setImageUrl}
                    label="Ảnh bìa"
                  />

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Nội dung (Markdown)</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Viết nội dung bài viết với Markdown..."
                      rows={15}
                      className="font-mono text-sm"
                    />
                    <p className="text-sm text-muted-foreground">
                      Hỗ trợ Markdown: **in đậm**, *in nghiêng*, ## Tiêu đề, - Danh sách, [Link](url)
                    </p>
                  </div>

                  {/* Published */}
                  <div className="flex items-center gap-3">
                    <Switch
                      id="is-published"
                      checked={isPublished}
                      onCheckedChange={setIsPublished}
                    />
                    <Label htmlFor="is-published">
                      {isPublished ? "Công khai" : "Bản nháp"}
                    </Label>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={updateArticle.isPending}
                      className="gap-2"
                    >
                      {updateArticle.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      Lưu thay đổi
                    </Button>
                    {slug && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => window.open(`/tin-tuc/${slug}`, "_blank")}
                        className="gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Xem bài viết
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdminArticleEdit;
