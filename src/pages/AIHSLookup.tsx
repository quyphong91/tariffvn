import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuotaCounter } from '@/components/ai-lookup/QuotaCounter';
import { RequestForm } from '@/components/ai-lookup/RequestForm';
import { RequestList } from '@/components/ai-lookup/RequestList';
import { MyRequestsTab } from '@/components/ai-lookup/MyRequestsTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';

const AIHSLookup = () => {
  const [isQuotaExhausted, setIsQuotaExhausted] = useState(false);
  const canonicalUrl = useCanonicalUrl();
  
  return (
    <>
      <Helmet>
        <title>Tra cứu HS Code bằng AI | HSTC</title>
        <meta 
          name="description" 
          content="Gửi yêu cầu tra cứu HS Code và nhận kết quả phân tích từ AI. Dịch vụ miễn phí giúp xác định mã HS Code phù hợp cho hàng hóa xuất nhập khẩu." 
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 dark:to-background py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Beta
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Tra cứu HS Code bằng HSTC AI
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Mô tả sản phẩm của bạn và nhận đề xuất mã HS Code từ AI. 
                  Dịch vụ miễn phí, giới hạn số lượt mỗi ngày.
                </p>
                
                {/* Disclaimer */}
                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-left">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Lưu ý quan trọng:</strong> Kết quả tra cứu HS Code bằng AI chỉ mang tính chất 
                      tham khảo ban đầu và không thay thế ý kiến chuyên gia hoặc quyết định chính thức 
                      của cơ quan Hải quan. Vui lòng xác minh lại mã HS Code với các nguồn chính thức 
                      trước khi sử dụng cho mục đích khai báo hải quan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-8">
                {/* Quota Counter */}
                <QuotaCounter onQuotaExhausted={setIsQuotaExhausted} />
                
                {/* Request Form */}
                <div className="bg-card border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Gửi yêu cầu tra cứu</h2>
                  <RequestForm disabled={isQuotaExhausted} />
                </div>
                
                {/* Request List with Tabs */}
                <div className="bg-card border rounded-lg p-6">
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="all">Tất cả</TabsTrigger>
                      <TabsTrigger value="my">Của tôi</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all">
                      <RequestList />
                    </TabsContent>
                    
                    <TabsContent value="my">
                      <MyRequestsTab />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIHSLookup;
