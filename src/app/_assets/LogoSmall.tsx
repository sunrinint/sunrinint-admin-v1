import React from 'react';
import styles from './Logo.module.scss';

export default function LogoSmall() {
  return (
    <>
      <svg
        width="54"
        height="20"
        viewBox="0 0 54 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.66667 0H0V7.03333H6.66667V0Z" className={styles.logo} />
        <path
          d="M6.66667 12.9333H0V20H6.66667V12.9333Z"
          className={styles.logo3}
        />
        <path
          d="M6.66667 6.66675H0V13.3334H6.66667V6.66675Z"
          className={styles.logo2}
        />
        <path d="M16.6667 0H10V7.03333H16.6667V0Z" className={styles.logo} />
        <path
          d="M10 13.3333V12.8833H16.6667V13.3333V20"
          className={styles.logo3}
        />
        <path
          d="M23.3331 13.3334H16.6665H16.2998V6.66675H16.6665"
          className={styles.logo3}
        />
        <path
          d="M16.6667 6.66675H10V13.3334H16.6667V6.66675Z"
          className={styles.logo2}
        />
        <path
          d="M30.0002 6.66667V7.01667H23.3335V6.66667V0"
          className={styles.logo3}
        />
        <path
          d="M30.0002 12.9333H23.3335V20H30.0002V12.9333Z"
          className={styles.logo}
        />
        <path
          d="M30.0002 6.66675H23.3335V13.3334H30.0002V6.66675Z"
          className={styles.logo2}
        />
        <path
          d="M53.3335 0H33.3335V6.66667H40.0002V7.16667H46.6668V6.66667H53.3335V0Z"
          className={styles.logo}
        />
        <path
          d="M46.6667 12.8999H40V19.9999H46.6667V12.8999Z"
          className={styles.logo3}
        />
        <path
          d="M46.6667 6.66675H40V13.3334H46.6667V6.66675Z"
          className={styles.logo2}
        />
      </svg>
    </>
  );
}
