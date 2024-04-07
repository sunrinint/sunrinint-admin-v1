'use client';
import Sidebar from '../_components/sidebar/Sidebar';
import styles from './page.module.scss';
import { Typography } from '../_components/typography';
import InputBox from '../_components/input/InputBox';
import { useRef, useState } from 'react';
import Checkbox from '../_components/checkbox/Checkbox';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <Typography.TitleLarge color={90}>공지 관리</Typography.TitleLarge>
        <Typography.Label color={60}>
          공지를 작성하거나 관리할 수 있습니다
        </Typography.Label>
      </div>
      <form>
        <InputBox type="text" placeholder="제목을 입력하세요" ref={inputRef} />
      </form>
      <table className={styles.table}>
        <thead className={styles['table-head']}>
          <tr>
            <th className={styles['table-checkbox']}>
              <Checkbox
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            </th>

            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                제목
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
          <tr>
            <td className={styles['table-checkbox']}>
              <Checkbox
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            </td>
            <td className={styles['table-row']}>
              <Typography.Body color={80}>공지사항입니다.</Typography.Body>
            </td>
            <td className={styles['table-row']}>
              <Typography.Body color={80}>공지사항입니다.</Typography.Body>
            </td>
            <td className={styles['table-row']}>
              <Typography.Body color={80}>공지사항입니다.</Typography.Body>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
