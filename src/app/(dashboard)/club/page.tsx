import { cookies } from 'next/headers';
import React from 'react';
import styles from './page.module.scss';
import { Typography } from '@/app/_components/typography';
import Checkbox from '@/app/_components/checkbox/Checkbox';
import Link from 'next/link';
import Image from 'next/image';

async function getClub() {
  'use server';
  try {
    const response = await fetch('http://localhost:3000/club', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
      next: {
        tags: ['club'],
      },
    });
    const notices = await response.json();
    return notices;
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  const clubs = await getClub();
  return (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <Typography.TitleLarge color={90}>동아리 관리</Typography.TitleLarge>
        <Typography.Label color={60}>
          동아리를 추가하거나 관리할 수 있습니다
        </Typography.Label>
      </div>
      <div className={styles.content}>
        <div className={styles.tableTop}>
          <Typography.Label bold color={80}>
            전체 공지 {clubs!!.length}개
          </Typography.Label>
          <div className={styles['button-group']}>
            <Link className="card" href={`createClub`}>
              hidfsfds
            </Link>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles['table-head']}>
            <tr>
              <th className={styles['table-row']}>
                <Typography.Body bold color={60}>
                  동아리 이미지
                </Typography.Body>
              </th>
              <th className={styles['table-row']}>
                <Typography.Body bold color={60}>
                  작성자
                </Typography.Body>
              </th>
              <th className={styles['table-row']}>
                <Typography.Body bold color={60}>
                  작성일
                </Typography.Body>
              </th>
              <th className={styles['table-row']}></th>
            </tr>
          </thead>
          <tbody>
            {clubs.length > 0 &&
              clubs.map((club: any) => (
                <tr key={club.id}>
                  <td>
                    <Image
                      src={club.logo}
                      alt="club"
                      width={50}
                      height={50}
                      className={styles['club-image']}
                    />
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>
                      {club.displayName}
                    </Typography.Body>
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>{club.name}</Typography.Body>
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>
                      {club.createdAt}
                    </Typography.Body>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
