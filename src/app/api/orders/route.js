import { createClient } from '@supabase/supabase-js';
import { sendOrderConfirmation } from '@/lib/email';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY || '';
const adminClient = serviceKey ? createClient(supabaseUrl, serviceKey) : null;

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_id, user_email, user_name, items, shipping, payment_method, subtotal, discount, shipping_charge, total, coupon_code } = body;
    
    if (!adminClient) return Response.json({ success: false, error: 'DB not configured' }, { status: 500 });
    
    // Ensure profile exists first (foreign key constraint)
    if (user_id) {
      await adminClient.from('profiles').upsert({
        id: user_id,
        email: user_email || 'unknown@email.com',
        name: user_name || 'User',
      }, { onConflict: 'id' }).maybeSingle();
    }
    
    const orderNumber = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    
    const { data, error } = await adminClient.from('orders').insert({
      user_id,
      order_number: orderNumber,
      items: JSON.stringify(items),
      shipping: JSON.stringify(shipping),
      payment_method,
      subtotal,
      discount,
      shipping_charge,
      total,
      coupon_code,
      status: 'confirmed',
    }).select().single();

    if (error) throw error;
    
    // Send confirmation email (non-blocking)
    sendOrderConfirmation({ ...data, email: body.user_email });
    
    return Response.json({ success: true, order: data });
  } catch (err) {
    console.error('Order save error:', err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('user_id');
  
  if (!userId) return Response.json({ orders: [] });
  if (!adminClient) return Response.json({ orders: [] });
  
  const { data, error } = await adminClient
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) return Response.json({ orders: [] });
  return Response.json({ orders: data || [] });
}
