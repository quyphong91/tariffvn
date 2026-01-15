import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useSubmitRequest } from '@/hooks/useHSRequests';

const requestSchema = z.object({
  product_name: z
    .string()
    .min(1, 'Vui lòng nhập tên sản phẩm')
    .max(200, 'Tên sản phẩm không quá 200 ký tự'),
  product_description: z
    .string()
    .min(1, 'Vui lòng nhập mô tả sản phẩm')
    .max(1000, 'Mô tả không quá 1000 ký tự'),
  material: z
    .string()
    .max(500, 'Chất liệu không quá 500 ký tự')
    .optional(),
  function_use: z
    .string()
    .max(500, 'Công dụng không quá 500 ký tự')
    .optional(),
});

type RequestFormData = z.infer<typeof requestSchema>;

interface RequestFormProps {
  disabled?: boolean;
  onSuccess?: () => void;
}

export const RequestForm = ({ disabled = false, onSuccess }: RequestFormProps) => {
  const { toast } = useToast();
  const submitMutation = useSubmitRequest();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      product_name: '',
      product_description: '',
      material: '',
      function_use: '',
    },
  });
  
  const onSubmit = async (data: RequestFormData) => {
    try {
      await submitMutation.mutateAsync({
        product_name: data.product_name,
        product_description: data.product_description,
        material: data.material,
        function_use: data.function_use,
      });
      
      toast({
        title: 'Yêu cầu đã gửi thành công!',
        description: 'Yêu cầu của bạn đang chờ xử lý. Kiểm tra tab "Của tôi" để theo dõi.',
      });
      
      reset();
      onSuccess?.();
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Không thể gửi yêu cầu. Vui lòng thử lại.',
        variant: 'destructive',
      });
    }
  };
  
  const isSubmitting = submitMutation.isPending;
  const isDisabled = disabled || isSubmitting;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="product_name">
          Tên sản phẩm <span className="text-destructive">*</span>
        </Label>
        <Input
          id="product_name"
          placeholder="VD: Áo sơ mi nam tay dài"
          disabled={isDisabled}
          {...register('product_name')}
        />
        {errors.product_name && (
          <p className="text-sm text-destructive">{errors.product_name.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="product_description">
          Mô tả chi tiết sản phẩm <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="product_description"
          placeholder="VD: Áo sơ mi nam tay dài, dệt kim, có cổ đức, cài nút phía trước, dùng để mặc hàng ngày..."
          rows={4}
          disabled={isDisabled}
          {...register('product_description')}
        />
        {errors.product_description && (
          <p className="text-sm text-destructive">{errors.product_description.message}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="material">Chất liệu / Nguyên liệu</Label>
          <Input
            id="material"
            placeholder="VD: 100% Cotton, Polyester 65% Cotton 35%..."
            disabled={isDisabled}
            {...register('material')}
          />
          {errors.material && (
            <p className="text-sm text-destructive">{errors.material.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="function_use">Công dụng / Chức năng</Label>
          <Input
            id="function_use"
            placeholder="VD: Dùng để mặc, dùng trong công nghiệp..."
            disabled={isDisabled}
            {...register('function_use')}
          />
          {errors.function_use && (
            <p className="text-sm text-destructive">{errors.function_use.message}</p>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isDisabled}
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Đang gửi...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Gửi yêu cầu tra cứu
          </>
        )}
      </Button>
    </form>
  );
};
