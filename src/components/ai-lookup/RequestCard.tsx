import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { HSRequest } from '@/hooks/useHSRequests';
import { StatusBadge } from './StatusBadge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RequestCardProps {
  request: HSRequest;
  isOwn?: boolean;
}

export const RequestCard = ({ request, isOwn = false }: RequestCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const truncatedName = request.product_name.length > 60 
    ? request.product_name.slice(0, 60) + '...' 
    : request.product_name;
  
  const truncatedDescription = request.product_description.length > 100 
    ? request.product_description.slice(0, 100) + '...' 
    : request.product_description;
  
  const timeAgo = formatDistanceToNow(new Date(request.created_at), {
    addSuffix: true,
    locale: vi,
  });
  
  const handleCopy = async () => {
    if (!request.ai_response) return;
    
    const textToCopy = request.hs_code 
      ? `Mã HS: ${request.hs_code}\n\n${request.ai_response}`
      : request.ai_response;
    
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div 
      className={cn(
        "border rounded-lg bg-card transition-all duration-200",
        isOwn && "border-primary/30 bg-primary/5",
        isExpanded && "shadow-md"
      )}
    >
      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start justify-between text-left hover:bg-muted/50 transition-colors rounded-lg"
      >
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={request.status} />
            {isOwn && (
              <span className="text-xs text-primary font-medium">Của tôi</span>
            )}
            <span className="text-xs text-muted-foreground">{timeAgo}</span>
          </div>
          <h3 className="font-medium text-foreground line-clamp-1">
            {truncatedName}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {truncatedDescription}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-border/50 pt-4">
          {/* Full request details */}
          <div className="space-y-3">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase">Tên sản phẩm</span>
              <p className="text-sm mt-1">{request.product_name}</p>
            </div>
            
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase">Mô tả</span>
              <p className="text-sm mt-1 whitespace-pre-wrap">{request.product_description}</p>
            </div>
            
            {request.material && (
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase">Chất liệu</span>
                <p className="text-sm mt-1">{request.material}</p>
              </div>
            )}
            
            {request.function_use && (
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase">Công dụng</span>
                <p className="text-sm mt-1">{request.function_use}</p>
              </div>
            )}
          </div>
          
          {/* AI Response (if completed) */}
          {request.status === 'completed' && request.ai_response && (
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
              {request.hs_code && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <span className="text-sm font-medium">Mã HS đề xuất:</span>
                  <code className="px-2 py-1 bg-green-100 dark:bg-green-900/50 rounded text-green-800 dark:text-green-200 font-mono font-bold">
                    {request.hs_code}
                  </code>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase">Kết quả phân tích</span>
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 mr-1" />
                        Đã copy
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-sm dark:prose-invert max-w-none bg-muted/50 rounded-lg p-4">
                  <ReactMarkdown>{request.ai_response}</ReactMarkdown>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  <strong>Lưu ý:</strong> Kết quả tra cứu HS Code bằng AI chỉ mang tính chất tham khảo 
                  ban đầu và không thay thế ý kiến chuyên gia hoặc quyết định chính thức của cơ quan Hải quan.
                </p>
              </div>
            </div>
          )}
          
          {/* Processing message */}
          {request.status === 'processing' && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Yêu cầu đang được xử lý. Vui lòng quay lại sau để xem kết quả.
                </p>
              </div>
            </div>
          )}
          
          {/* Pending message (only for own requests) */}
          {request.status === 'pending' && isOwn && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Yêu cầu đang chờ được duyệt. Chúng tôi sẽ xử lý sớm nhất có thể.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
