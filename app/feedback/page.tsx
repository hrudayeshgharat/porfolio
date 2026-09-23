import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Signal — Customer Feedback Intelligence' };
export default function SignalHandoff() {
  const configured = process.env.SIGNAL_APP_URL;
  redirect(configured && /^https?:\/\//.test(configured) ? configured : 'https://signal-feedback-ochre.vercel.app/');
}
