import { useState } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useUpdateRequest } from '@/hooks/useAdminRequests';
import type { HSRequest } from '@/hooks/useHSRequests';
import { ChevronDown, ChevronUp, Loader2, Save, Package, FileText, Wrench, Cog } from 'lucide-react';

interface AdminRequestCardProps {
  request: HSRequest;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

type RequestStatus = 'pending' | 'processing' | 'completed';

const AdminRequestCard = ({ request }: AdminRequestCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [status, setStatus] = useState<RequestStatus>((request.status as RequestStatus) || 'pending');
  const [hsCode, setHsCode] = useState(request.hs_code || '');
  const [aiResponse, setAiResponse] = useState(request.ai_response || '');
  const [adminNote, setAdminNote] = useState(request.admin_note || '');
  const { toast } = useToast();
  const updateMutation = useUpdateRequest();

  const handleSave = async () => {
    try {
      await updateMutation.mutateAsync({
        id: request.id,
        status: status as 'pending' | 'processing' | 'completed',
        hs_code: hsCode || null,
        ai_response: aiResponse || null,
        admin_note: adminNote || null,
      });

      toast({
        title: 'Đã lưu thành công',
        description: `Request "${request.product_name}" đã được cập nhật.`,
      });
    } catch (error) {
      toast({
        title: 'Lỗi khi lưu',
        description: 'Không thể cập nhật request. Vui lòng thử lại.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="transition-all">
      <CardHeader 
        className="cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Package className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <CardTitle className="text-base truncate">{request.product_name}</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {request.product_description}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {format(new Date(request.created_at), "dd/MM/yyyy 'lúc' HH:mm", { locale: vi })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={statusColors[status as keyof typeof statusColors]}>
              {status === 'pending' && 'Chờ xử lý'}
              {status === 'processing' && 'Đang xử lý'}
              {status === 'completed' && 'Hoàn thành'}
            </Badge>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4 border-t pt-4">
          {/* Request Details */}
          <div className="grid gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex gap-2">
              <FileText className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">Mô tả sản phẩm</p>
                <p className="text-sm">{request.product_description}</p>
              </div>
            </div>
            {request.material && (
              <div className="flex gap-2">
                <Wrench className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Chất liệu</p>
                  <p className="text-sm">{request.material}</p>
                </div>
              </div>
            )}
            {request.function_use && (
              <div className="flex gap-2">
                <Cog className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Công dụng</p>
                  <p className="text-sm">{request.function_use}</p>
                </div>
              </div>
            )}
          </div>

          {/* Admin Controls */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Trạng thái</Label>
                <Select value={status} onValueChange={(v) => setStatus(v as RequestStatus)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Chờ xử lý</SelectItem>
                    <SelectItem value="processing">Đang xử lý</SelectItem>
                    <SelectItem value="completed">Hoàn thành</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`hs-${request.id}`}>Mã HS Code</Label>
                <Input
                  id={`hs-${request.id}`}
                  value={hsCode}
                  onChange={(e) => setHsCode(e.target.value)}
                  placeholder="VD: 8471.30.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`response-${request.id}`}>AI Response (Markdown)</Label>
              <Textarea
                id={`response-${request.id}`}
                value={aiResponse}
                onChange={(e) => setAiResponse(e.target.value)}
                placeholder="Nhập phân tích và giải thích mã HS Code..."
                rows={6}
                className="font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`note-${request.id}`}>Ghi chú Admin (nội bộ)</Label>
              <Textarea
                id={`note-${request.id}`}
                value={adminNote}
                onChange={(e) => setAdminNote(e.target.value)}
                placeholder="Ghi chú nội bộ..."
                rows={2}
              />
            </div>

            <Button 
              onClick={handleSave} 
              disabled={updateMutation.isPending}
              className="w-full sm:w-auto"
            >
              {updateMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Đang lưu...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Lưu thay đổi
                </>
              )}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AdminRequestCard;
