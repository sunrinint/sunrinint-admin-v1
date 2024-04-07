import React from 'react';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="24"
        viewBox="0 0 64 24"
        fill="none"
      >
        <path
          className={styles.logo}
          d="M8 2.28882e-05H0V8.44003H8V2.28882e-05Z"
        />
        <path d="M8 15.52H0V24H8V15.52Z" className={styles.logo3} />
        <path d="M8 8.00001H0V16H8V8.00001Z" className={styles.logo2} />
        <path d="M20 0H12V8.44H20V0Z" className={styles.logo} />
        <path d="M12 16V15.46H20V16V24" className={styles.logo3} />
        <path d="M28 16H20H19.56V8.00001H20" className={styles.logo3} />
        <path d="M20 8.00001H12V16H20V8.00001Z" className={styles.logo2} />
        <path d="M36 8V8.42H28V8V0" className={styles.logo3} />
        <path d="M36 15.52H28V24H36V15.52Z" className={styles.logo} />
        <path d="M36 8.00001H28V16H36V8.00001Z" className={styles.logo2} />
        <path d="M64 0H40V8H48V8.6H56V8H64V0Z" className={styles.logo} />
        <path d="M56 15.48H48V24H56V15.48Z" className={styles.logo3} />
        <path d="M56 8.00001H48V16H56V8.00001Z" className={styles.logo2} />
      </svg>
    </>
  );
}
