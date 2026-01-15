import { Loader2, Inbox } from 'lucide-react';
import { useMyRequests } from '@/hooks/useHSRequests';
import { getMyRequestIds } from '@/lib/hsRequestStorage';
import { RequestCard } from './RequestCard';

export const MyRequestsTab = () => {
  const myRequestIds = getMyRequestIds();
  const { data: requests, isLoading, error } = useMyRequests(myRequestIds);
  
  if (myRequestIds.length === 0) {
    return (
      <div className="text-center py-12">
        <Inbox className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">
          Bạn chưa gửi yêu cầu nào. Hãy gửi yêu cầu tra cứu ở form phía trên.
        </p>
      </div>
    );
  }
  
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
  
  if (!requests || requests.length === 0) {
    return (
      <div className="text-center py-12">
        <Inbox className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">
          Không tìm thấy yêu cầu nào của bạn.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {requests.map((request) => (
        <RequestCard 
          key={request.id} 
          request={request}
          isOwn={true}
        />
      ))}
    </div>
  );
};
