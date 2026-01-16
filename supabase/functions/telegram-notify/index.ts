import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface HSRequest {
  id: string
  product_name: string
  product_description: string
  material?: string
  function_use?: string
  created_at: string
}

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  table: string
  record: HSRequest
  schema: string
  old_record: HSRequest | null
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID')

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Missing Telegram configuration')
    }

    const payload: WebhookPayload = await req.json()
    console.log('Received webhook payload:', JSON.stringify(payload))

    // Only process INSERT events
    if (payload.type !== 'INSERT') {
      return new Response(
        JSON.stringify({ message: 'Skipped: not an INSERT event' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const record = payload.record

    // Format the Telegram message
    const message = `🆕 *Yêu cầu tra cứu HS mới*

📦 *Sản phẩm:* ${escapeMarkdown(record.product_name)}

📝 *Mô tả:* ${escapeMarkdown(record.product_description)}

${record.material ? `🧱 *Chất liệu:* ${escapeMarkdown(record.material)}` : ''}
${record.function_use ? `⚙️ *Công dụng:* ${escapeMarkdown(record.function_use)}` : ''}

🕐 *Thời gian:* ${new Date(record.created_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}

🔗 *ID:* \`${record.id}\``

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    const telegramResult = await telegramResponse.json()
    console.log('Telegram response:', JSON.stringify(telegramResult))

    if (!telegramResult.ok) {
      throw new Error(`Telegram API error: ${telegramResult.description}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Notification sent' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error:', errorMessage)
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

// Escape special Markdown characters
function escapeMarkdown(text: string): string {
  if (!text) return ''
  return text
    .replace(/_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/~/g, '\\~')
    .replace(/`/g, '\\`')
    .replace(/>/g, '\\>')
    .replace(/#/g, '\\#')
    .replace(/\+/g, '\\+')
    .replace(/-/g, '\\-')
    .replace(/=/g, '\\=')
    .replace(/\|/g, '\\|')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\./g, '\\.')
    .replace(/!/g, '\\!')
}
