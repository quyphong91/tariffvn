import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/hooks/useAuth';
import { useAdminRole } from '@/hooks/useAdminRole';
import { useAdminRequests } from '@/hooks/useAdminRequests';
import { useAllArticles } from '@/hooks/useArticles';
import AdminRequestCard from '@/components/admin/AdminRequestCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, LogOut, Search, Shield, ChevronLeft, ChevronRight, Plus, Newspaper, Edit, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const AdminPanel = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  const { signOut, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading, user } = useAdminRole();
  const navigate = useNavigate();

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [statusFilter, debouncedSearch]);

  const { data, isLoading, error } = useAdminRequests(page, statusFilter, debouncedSearch);
  const { data: articles, isLoading: articlesLoading } = useAllArticles();

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!authLoading && !roleLoading) {
      if (!user) {
        navigate('/admin/login');
      } else if (!isAdmin) {
        navigate('/admin/login');
      }
    }
  }, [user, isAdmin, authLoading, roleLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel | HSTC</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-muted/30">
        {/* Header */}
        <header className="bg-background border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <h1 className="text-lg font-semibold">Admin Panel</h1>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="default" size="sm" asChild>
                  <Link to="/admin/articles/create">
                    <Plus className="w-4 h-4 mr-2" />
                    Thêm bài viết
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Đăng xuất
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <Tabs defaultValue="requests" className="space-y-6">
            <TabsList>
              <TabsTrigger value="requests">HS Requests</TabsTrigger>
              <TabsTrigger value="articles">Bài viết</TabsTrigger>
            </TabsList>

            {/* HS Requests Tab */}
            <TabsContent value="requests" className="space-y-6">
              {/* Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Tìm theo tên sản phẩm..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Lọc theo trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tất cả trạng thái</SelectItem>
                        <SelectItem value="pending">Chờ xử lý</SelectItem>
                        <SelectItem value="processing">Đang xử lý</SelectItem>
                        <SelectItem value="completed">Hoàn thành</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {data && (
                    <p className="text-sm text-muted-foreground mt-3">
                      Tổng cộng: {data.totalCount} requests
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Request List */}
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : error ? (
                <Card>
                  <CardContent className="py-12 text-center text-destructive">
                    Lỗi khi tải dữ liệu. Vui lòng thử lại.
                  </CardContent>
                </Card>
              ) : data?.requests.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    Không tìm thấy request nào.
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {data?.requests.map((request) => (
                    <AdminRequestCard key={request.id} request={request} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {data && data.totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm px-4">
                    Trang {data.currentPage} / {data.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                    disabled={page === data.totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5" />
                    Quản lý bài viết
                  </CardTitle>
                  <Button asChild size="sm">
                    <Link to="/admin/articles/create">
                      <Plus className="w-4 h-4 mr-2" />
                      Thêm mới
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  {articlesLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : articles?.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      Chưa có bài viết nào.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {articles?.map((article) => (
                        <div
                          key={article.id}
                          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium truncate">{article.title}</h3>
                              {article.is_published ? (
                                <Eye className="w-4 h-4 text-green-500 flex-shrink-0" />
                              ) : (
                                <EyeOff className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {article.published_at
                                ? format(new Date(article.published_at), 'dd/MM/yyyy HH:mm')
                                : 'Chưa đặt ngày'}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/articles/edit/${article.id}`}>
                              <Edit className="w-4 h-4 mr-2" />
                              Sửa
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
