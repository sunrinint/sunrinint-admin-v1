import type { Metadata } from 'next';
import '../globals.css';

import localFont from 'next/font/local';

const suit = localFont({
  src: '../fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'SunrinINT Admin',
  description: 'SunrinINT의 관리자 페이지입니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={suit.className}>{children}</body>
    </html>
  );
}
