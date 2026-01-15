import { useQuotaCount } from '@/hooks/useHSRequests';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, Loader2 } from 'lucide-react';

interface QuotaCounterProps {
  onQuotaExhausted?: (exhausted: boolean) => void;
}

export const QuotaCounter = ({ onQuotaExhausted }: QuotaCounterProps) => {
  const { data: quota, isLoading, error } = useQuotaCount();
  
  const isExhausted = quota ? quota.remaining <= 0 : false;
  
  // Notify parent về trạng thái quota
  if (onQuotaExhausted && quota) {
    onQuotaExhausted(isExhausted);
  }
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg">
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
        <span className="text-sm text-muted-foreground">Đang kiểm tra quota...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center p-4 bg-destructive/10 rounded-lg text-destructive">
        <AlertCircle className="w-4 h-4 mr-2" />
        <span className="text-sm">Không thể kiểm tra quota. Vui lòng thử lại.</span>
      </div>
    );
  }
  
  if (!quota) return null;
  
  const progressValue = (quota.remaining / quota.total) * 100;
  
  if (isExhausted) {
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium text-destructive">Đã hết lượt truy vấn hôm nay</p>
            <p className="text-sm text-muted-foreground">
              Do hạn chế về hạ tầng và chi phí, số lượt truy vấn AI HSTC hôm nay đã tạm hết. 
              Vui lòng thông cảm và quay lại vào ngày mai.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-muted/50 rounded-lg space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Lượt truy vấn hôm nay</span>
        <span className="font-medium">
          Còn lại <span className="text-primary">{quota.remaining}</span>/{quota.total} lượt
        </span>
      </div>
      <Progress value={progressValue} className="h-2" />
    </div>
  );
};
