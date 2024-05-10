import type { Metadata } from 'next';
import '../globals.css';
import Sidebar from '../_components/sidebar/Sidebar';
import styles from './layout.module.scss';
import localFont from 'next/font/local';
import { Typography } from '../_components/typography';
import CreateModal from '../_components/modal/CreateModal';

const SUITVariable = localFont({
  src: '../fonts/SUIT-Variable.woff2',
});

export const metadata: Metadata = {
  title: 'SunrinINT Admin',
  description: 'SunrinINT의 관리자 페이지입니다',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={[SUITVariable.className, styles.container].join(' ')}>
        <Sidebar />
        {modal}
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
