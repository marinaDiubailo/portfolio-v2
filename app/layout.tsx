import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/index.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: "Marina's Portfolio App",
  description: 'Modern Front-End Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
