import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Hrudayesh Gharat | Data Analyst', description: 'Data analytics and business intelligence by Hrudayesh Gharat. Explore the Superstore Power BI dashboard.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
