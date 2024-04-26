import { cookies } from 'next/headers';
import React from 'react';
import styles from './page.module.scss';
import { Typography } from '@/app/_components/typography';
import Checkbox from '@/app/_components/checkbox/Checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { departmentToKorean } from '@/app/constants/department';
import PlusIcon from '@/app/_assets/icons/plus.svg';

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
            전체 동아리 {clubs!!.length}개
          </Typography.Label>
          <div className={styles['button-group']}>
            <Link className={styles['create-club']} href={`createClub`}>
              <Typography.Body bold color={10}>
                동아리 추가
              </Typography.Body>
              <PlusIcon />
            </Link>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles['table-head']}>
            <tr>
              <th
                style={{
                  width: '100px',
                }}
              >
                <Typography.Body bold color={60}>
                  프로필
                </Typography.Body>
              </th>
              <th className={styles['table-row']}>
                <Typography.Body bold color={60}>
                  동아리 정보
                </Typography.Body>
              </th>
              <th className={styles['table-row']}>
                <Typography.Body bold color={60}>
                  동아리 분류
                </Typography.Body>
              </th>
              <th className={styles['table-row']}></th>
            </tr>
          </thead>
          <tbody>
            {clubs.length > 0 &&
              clubs.map((club: any) => (
                <tr key={club.id}>
                  <td
                    style={{
                      width: '100px',
                    }}
                  >
                    <Image
                      src={club.logo}
                      alt="club"
                      width={50}
                      height={50}
                      className={styles['club-image']}
                    />
                  </td>
                  <td className={styles['club-info']}>
                    <Typography.Label color={80}>
                      {club.displayName}
                    </Typography.Label>
                    <Typography.Body color={70}>{club.name}</Typography.Body>
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>
                      {departmentToKorean[club.department]}
                    </Typography.Body>
                  </td>
                  <td className={styles['table-row']}></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
