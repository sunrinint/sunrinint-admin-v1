import React from 'react';
import styles from './Logo.module.scss';

export default function LogoLarge() {
  return (
    <>
      <svg
        width="150"
        height="56"
        viewBox="0 0 150 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9999 0H0.333252V19.6933H18.9999V0Z"
          className={styles.logo}
        />
        <path
          d="M18.9999 36.2133H0.333252V55.9999H18.9999V36.2133Z"
          className={styles.logo3}
        />
        <path
          d="M18.9999 18.6666H0.333252V37.3333H18.9999V18.6666Z"
          className={styles.logo2}
        />
        <path
          d="M46.9999 0H28.3333V19.6933H46.9999V0Z"
          className={styles.logo}
        />
        <path
          d="M28.3333 37.3334V36.0734H46.9999V37.3334V56"
          className={styles.logo3}
        />
        <path
          d="M65.6665 37.3333H46.9998H45.9731V18.6666H46.9998"
          className={styles.logo3}
        />
        <path
          d="M46.9999 18.6666H28.3333V37.3333H46.9999V18.6666Z"
          className={styles.logo2}
        />
        <path
          d="M84.3332 18.6667V19.6467H65.6665V18.6667V0"
          className={styles.logo3}
        />
        <path
          d="M84.3332 36.2133H65.6665V55.9999H84.3332V36.2133Z"
          className={styles.logo}
        />
        <path
          d="M84.3332 18.6666H65.6665V37.3333H84.3332V18.6666Z"
          className={styles.logo2}
        />
        <path
          d="M149.667 0H93.6665V18.6667H112.333V20.0667H131V18.6667H149.667V0Z"
          className={styles.logo}
        />
        <path d="M131 36.12H112.333V56H131V36.12Z" className={styles.logo3} />
        <path
          d="M131 18.6666H112.333V37.3333H131V18.6666Z"
          className={styles.logo2}
        />
      </svg>
    </>
  );
}
