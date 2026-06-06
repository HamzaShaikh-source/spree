import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvdXhodHZicnd2Zmx1cHFwbnJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDcyODM0MCwiZXhwIjoyMDk2MzA0MzQwfQ.bsJPR22_XK021JLpEg1a3Ry12jiLbBf4IFiNg_VHsaw';

export async function GET() {
  try {
    const adminClient = createClient(supabaseUrl, SERVICE_KEY);
    
    const queries = [
      `CREATE TABLE IF NOT EXISTS public.profiles (
        id UUID PRIMARY KEY, name TEXT, email TEXT UNIQUE,
        phone TEXT, avatar_url TEXT, created_at TIMESTAMPTZ DEFAULT NOW()
      )`,
      `CREATE TABLE IF NOT EXISTS public.orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
        order_number TEXT UNIQUE NOT NULL, items JSONB DEFAULT '[]'::jsonb,
        shipping JSONB DEFAULT '{}'::jsonb, payment_method TEXT,
        subtotal INTEGER DEFAULT 0, discount INTEGER DEFAULT 0,
        shipping_charge INTEGER DEFAULT 0, total INTEGER DEFAULT 0,
        status TEXT DEFAULT 'confirmed', coupon_code TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )`,
      `CREATE TABLE IF NOT EXISTS public.subscribers (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT UNIQUE NOT NULL, name TEXT,
        subscribed_at TIMESTAMPTZ DEFAULT NOW()
      )`,
    ];

    for (const sql of queries) {
      const { error } = await adminClient.from('_sql_exec').insert({ query: sql }).maybeSingle();
      if (error && !error.message?.includes('does not exist')) {
        console.log('Query note:', error.message);
      }
    }

    // Try inserting to check if tables exist
    const { error: checkErr } = await adminClient.from('profiles').select('count').limit(1);
    
    return Response.json({ 
      status: 'ok', 
      tablesReady: !checkErr,
      message: checkErr ? 'Tables need manual setup via Supabase Dashboard' : 'All tables ready!'
    });
  } catch (err) {
    return Response.json({ status: 'error', message: err.message });
  }
}
