-- Recreate trigger on hs_requests table for INSERT events
DROP TRIGGER IF EXISTS on_hs_request_insert_notify_telegram ON public.hs_requests;
CREATE TRIGGER on_hs_request_insert_notify_telegram
  AFTER INSERT ON public.hs_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_telegram_on_hs_request();