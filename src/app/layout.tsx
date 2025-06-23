
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed from Open_Sans
import './globals.css';
import { AppProviders } from '@/components/providers/app-providers';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ // Changed from Open_Sans
  subsets: ['latin'],
  variable: '--font-inter', // Changed variable name
});

export const metadata: Metadata = {
  title: '💸✨ WanderLedger: The Ultimate Multi-User Travel Expense Tracker 🌍🧳',
  description: 'WanderLedger is a modern, secure, and intuitive web app for managing group travel expenses. No more messy spreadsheets or awkward money talk — just seamless, transparent, and fair expense sharing! 💚',
  icons: {
    icon: '/favicon.ico', // Basic favicon, can be improved later
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans"> {/* Added font-sans */}
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
}
