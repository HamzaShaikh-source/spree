import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const { email, name } = await req.json();
    if (!email) return Response.json({ success: false, error: 'Email required' }, { status: 400 });

    const { error } = await supabase.from('subscribers').insert({ email, name: name || '' });
    if (error) {
      if (error.message?.includes('duplicate')) {
        return Response.json({ success: true, message: 'Already subscribed!' });
      }
      throw error;
    }
    return Response.json({ success: true, message: 'Subscribed!' });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
