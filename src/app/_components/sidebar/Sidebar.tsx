'use client';
import React from 'react';
import styles from './Sidebar.module.scss';
import { Typography } from '../typography';
import Link from 'next/link';
import Logo from '@/app/_assets/Logo';
import Alert from '@/app/_assets/icons/alert.svg';
import Club from '@/app/_assets/icons/club.svg';
import User from '@/app/_assets/icons/user.svg';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logo />
        <Typography.Title color={90}>관리자</Typography.Title>
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link className={pathName === '/' ? styles.active : ''} href="/">
            <Alert fill={'currentColor'} />
            <Typography.Label bold color={pathName === '/' ? 100 : 50}>
              공지 관리
            </Typography.Label>
          </Link>
        </li>
        <li>
          <Link
            className={pathName === '/club' ? styles.active : ''}
            href="/club"
          >
            <Club fill={'currentColor'} />
            <Typography.Label color={pathName === '/club' ? 100 : 50}>
              동아리 관리
            </Typography.Label>
          </Link>
        </li>
        <li>
          <Link
            className={pathName === '/user' ? styles.active : ''}
            href="/user"
          >
            <User fill={'currentColor'} />
            <Typography.Label color={pathName === '/user' ? 100 : 50}>
              유저 관리
            </Typography.Label>
          </Link>
        </li>
        <li>
          <Link
            className={pathName === '/notification' ? styles.active : ''}
            href="/notification"
          >
            <User fill={'currentColor'} />
            <Typography.Label color={pathName === '/notification' ? 100 : 50}>
              알림 발송
            </Typography.Label>
          </Link>
        </li>
      </ul>
      <div className={styles.bottom}>
        <div className={styles.profile} />
        <div className={styles.info}>
          <Typography.Title color={90}>주현명</Typography.Title>
          <Typography.Body color={50}>로그아웃</Typography.Body>
        </div>
      </div>
    </div>
  );
}
