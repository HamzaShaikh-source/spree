import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
const FROM = 'onboarding@resend.dev';
const ADMIN_EMAIL = 'hamzashaikh0259@gmail.com';

export async function sendOrderConfirmation(order) {
  if (!process.env.RESEND_API_KEY) return;
  
  const itemsHtml = order.items?.map(item => 
    `<tr><td style="padding:8px;border-bottom:1px solid #eee">${item.name}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:center">×${item.qty}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:right">₹${(item.price * item.qty).toLocaleString('en-IN')}</td></tr>`
  ).join('');

  try {
    await resend.emails.send({
      from: FROM,
      to: order.email || ADMIN_EMAIL,
      subject: `✅ Order Confirmed - ${order.order_number}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto">
          <h2 style="color:#4f46e5">✨ Order Confirmed!</h2>
          <p style="color:#666">Thank you for shopping with Spree.</p>
          <p style="font-size:12px;color:#999">Order: <strong>${order.order_number}</strong></p>
          <table style="width:100%;border-collapse:collapse;margin:15px 0">
            ${itemsHtml}
          </table>
          <hr style="border:none;border-top:1px solid #eee">
          <p style="text-align:right;font-size:16px;font-weight:bold">Total: ₹${(order.total || 0).toLocaleString('en-IN')}</p>
          <p style="font-size:12px;color:#999;margin-top:20px">📦 Estimated delivery: 5-7 business days</p>
        </div>
      `
    });
  } catch(e) { console.log('Email error:', e.message); }
}

export async function sendWelcomeEmail(email, name) {
  if (!process.env.RESEND_API_KEY) return;
  
  try {
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: '🎉 Welcome to Spree!',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto">
          <h2 style="color:#4f46e5">Welcome${name ? ', ' + name : ''}!</h2>
          <p style="color:#666">You're now subscribed to Spree. Get ready for exclusive deals, new arrivals, and personalized recommendations.</p>
          <p style="margin-top:20px"><a href="https://spree-henna.vercel.app/products" style="background:#4f46e5;color:white;padding:10px 20px;border-radius:8px;text-decoration:none">Browse Products →</a></p>
        </div>
      `
    });
  } catch(e) { console.log('Email error:', e.message); }
}
