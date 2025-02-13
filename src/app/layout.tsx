import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business Consulting | AI Solutions for Small Business',
  description: 'Unlock the power of AI for your small business with our tailored solutions, automations, and custom agents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-grow">
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
