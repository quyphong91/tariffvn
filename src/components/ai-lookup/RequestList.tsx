import { useState } from 'react';
import { Search, Loader2, Inbox } from 'lucide-react';
import { usePublicRequests } from '@/hooks/useHSRequests';
import { RequestCard } from './RequestCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getMyRequestIds } from '@/lib/hsRequestStorage';

export const RequestList = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  
  const { data, isLoading, error } = usePublicRequests(page, searchTerm);
  const myRequestIds = getMyRequestIds();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput.trim().slice(0, 200));
    setPage(1);
  };
  
  const handleClearSearch = () => {
    setSearchInput('');
    setSearchTerm('');
    setPage(1);
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12 text-destructive">
        Có lỗi xảy ra khi tải dữ liệu. Vui lòng thử lại.
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Tìm theo tên sản phẩm..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-9"
            maxLength={200}
          />
        </div>
        <Button type="submit" variant="secondary">
          Tìm
        </Button>
        {searchTerm && (
          <Button type="button" variant="ghost" onClick={handleClearSearch}>
            Xóa
          </Button>
        )}
      </form>
      
      {/* Results */}
      {data && data.requests.length > 0 ? (
        <>
          <div className="space-y-3">
            {data.requests.map((request) => (
              <RequestCard 
                key={request.id} 
                request={request}
                isOwn={myRequestIds.includes(request.id)}
              />
            ))}
          </div>
          
          {/* Pagination */}
          {data.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Trước
              </Button>
              <span className="text-sm text-muted-foreground">
                Trang {data.currentPage} / {data.totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                disabled={page === data.totalPages}
              >
                Sau
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <Inbox className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">
            {searchTerm 
              ? 'Không tìm thấy kết quả phù hợp.' 
              : 'Chưa có yêu cầu nào được xử lý.'}
          </p>
        </div>
      )}
    </div>
  );
};
