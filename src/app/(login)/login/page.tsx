import React from 'react';
import styles from './page.module.scss';
import { Typography } from '@/app/_components/typography';
import InputBox from '@/app/_components/input/InputBox';
import { login } from '@/app/actions/auth/login';
import LogoLarge from '@/app/_assets/LogoLarge';

export default async function page() {
  return (
    <div className={styles.layout}>
      <LogoLarge />
      <Typography.Label color={70}>
        어드민 페이지에 접근하려면 먼저 로그인을 진행해주세요
      </Typography.Label>

      <form action={login} className={styles.form}>
        <div className={styles['input-group']}>
          <InputBox name="id" type="text" placeholder="어드민 계정 아이디" />
          <InputBox
            name="password"
            type="password"
            placeholder="어드민 계정 비밀번호"
          />
        </div>
        <button className={styles.button} type="submit">
          <Typography.Label bold color={10}>
            로그인
          </Typography.Label>
        </button>
      </form>
    </div>
  );
}
