'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typography } from '@/app/_components/typography';
import { departmentToKorean } from '@/app/constants/department';
import EditIcon from '@/app/_assets/icons/edit.svg';
import RemoveIcon from '@/app/_assets/icons/delete.svg';
import styles from './ClubColumn.module.scss';

export default function ClubCloumn({ club }: { club: any }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const preferScheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setDarkMode(preferScheme);
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setDarkMode(e.matches);
      });
  }, []);

  return (
    <tr key={club.id}>
      <td
        style={{
          width: '100px',
        }}
      >
        <Image
          src={darkMode && club.logo_dark ? club.logo_dark : club.logo}
          alt="club"
          width={50}
          height={50}
          className={styles['club-image']}
        />
      </td>
      <td className={styles['club-info']}>
        <Typography.Label color={80}>{club.displayName}</Typography.Label>
        <Typography.Body color={70}>{club.name}</Typography.Body>
      </td>
      <td className={styles['table-row']}>
        <Typography.Body color={80}>
          {departmentToKorean[club.department]}
        </Typography.Body>
      </td>
      <td className={styles['icons']}>
        <Link href={`/editClub/${club.id}`}>
          <EditIcon />
        </Link>
        <Link href={`/club/delete/${club.id}`}>
          <RemoveIcon />
        </Link>
      </td>
    </tr>
  );
}
