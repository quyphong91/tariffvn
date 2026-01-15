-- Tạo bảng hs_requests
CREATE TABLE public.hs_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  
  -- Thông tin request từ người dùng
  product_name TEXT NOT NULL,
  product_description TEXT NOT NULL,
  material TEXT,
  function_use TEXT,
  
  -- Trạng thái xử lý
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed')),
  
  -- Response từ Admin/AI
  ai_response TEXT,
  hs_code TEXT,
  admin_note TEXT
);

-- Indexes cho performance
CREATE INDEX idx_hs_requests_status ON public.hs_requests(status);
CREATE INDEX idx_hs_requests_created_at ON public.hs_requests(created_at DESC);

-- Enable RLS
ALTER TABLE public.hs_requests ENABLE ROW LEVEL SECURITY;

-- Ai cũng được INSERT (gửi request mới)
CREATE POLICY "Anyone can submit requests" 
ON public.hs_requests FOR INSERT 
WITH CHECK (true);

-- Ai cũng được SELECT tất cả (filter ở frontend)
CREATE POLICY "Anyone can view all requests" 
ON public.hs_requests FOR SELECT 
USING (true);

-- RPC Function đếm số request hôm nay
CREATE OR REPLACE FUNCTION public.get_today_request_count()
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER
  FROM public.hs_requests
  WHERE created_at >= CURRENT_DATE
    AND created_at < CURRENT_DATE + INTERVAL '1 day'
$$;