import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
});

export const metadata: Metadata = {
  title: 'mobilecn-ui',
  description:
    'Build beautiful Swift and React Native apps with reusable components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className={poppins.className}>
        <div className="bg-black flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
