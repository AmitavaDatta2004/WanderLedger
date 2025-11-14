
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed from Open_Sans
import './globals.css';
import { AppProviders } from '@/components/providers/app-providers';

const inter = Inter({ // Changed from Open_Sans
  subsets: ['latin'],
  variable: '--font-inter', // Changed variable name
});

export const metadata: Metadata = {
  title: 'WanderLedger - Collaborative Travel Planning',
  description: 'Effortlessly manage trip finances, itineraries, and packing lists with your group.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico', // Basic favicon, can be improved later
    apple: '/icons/apple-touch-icon.png',
  },
  themeColor: '#5F55F6',
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
        </AppProviders>
      </body>
    </html>
  );
}
