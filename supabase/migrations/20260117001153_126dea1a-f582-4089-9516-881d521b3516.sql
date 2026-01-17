-- Create function to call the edge function webhook
CREATE OR REPLACE FUNCTION public.notify_telegram_on_hs_request()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  payload jsonb;
BEGIN
  payload := jsonb_build_object(
    'type', TG_OP,
    'table', TG_TABLE_NAME,
    'schema', TG_TABLE_SCHEMA,
    'record', row_to_json(NEW),
    'old_record', CASE WHEN TG_OP = 'UPDATE' THEN row_to_json(OLD) ELSE NULL END
  );

  PERFORM net.http_post(
    url := 'https://vmeviaxdzfsawwawbgbh.supabase.co/functions/v1/telegram-notify',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('supabase.service_role_key', true)
    ),
    body := payload
  );

  RETURN NEW;
END;
$$;

-- Create trigger on hs_requests table for INSERT events
DROP TRIGGER IF EXISTS on_hs_request_insert_notify_telegram ON public.hs_requests;
CREATE TRIGGER on_hs_request_insert_notify_telegram
  AFTER INSERT ON public.hs_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_telegram_on_hs_request();