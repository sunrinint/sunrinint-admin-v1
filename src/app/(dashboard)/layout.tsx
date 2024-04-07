import type { Metadata } from 'next';
import '../globals.css';
import Sidebar from '../_components/sidebar/Sidebar';
import styles from './layout.module.scss';

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
      <body className={styles.container}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
