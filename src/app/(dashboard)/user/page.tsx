import Sidebar from '../../_components/sidebar/Sidebar';
import styles from './page.module.scss';
import { Typography } from '../../_components/typography';
import InputBox from '../../_components/input/InputBox';
import Checkbox from '../../_components/checkbox/Checkbox';
import { cookies } from 'next/headers';
import { User } from '@/app/types/user';

async function getUsers() {
  'use server';
  try {
    console.log(cookies().get('Access')?.value);
    const response = await fetch(`${process.env.API_URL}/user`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
    });
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const users = await getUsers();
  return (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <Typography.TitleLarge color={90}>유저 관리</Typography.TitleLarge>
        <Typography.Label color={60}>
          서비스에 가입된 사용자들의 목록을 보고 관리할 수 있습니다.
        </Typography.Label>
      </div>
      <form>
        <InputBox type="text" placeholder="제목을 입력하세요" />
      </form>
      <table className={styles.table}>
        <thead className={styles['table-head']}>
          <tr>
            <th className={styles['table-checkbox']}>
              <Checkbox checked={true} />
            </th>

            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                이메일
              </Typography.Body>
            </th>
            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                이름
              </Typography.Body>
            </th>
            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                학번
              </Typography.Body>
            </th>
            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                학과
              </Typography.Body>
            </th>
            <th className={styles['table-row']}>
              <Typography.Body bold color={60}>
                가입 일시
              </Typography.Body>
            </th>
            <th className={styles['table-row']}></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: User) => (
            <tr key={user.id}>
              <td className={styles['table-checkbox']}>
                <Checkbox checked={true} />
              </td>
              <td className={styles['table-row']}>
                <Typography.Body color={80}>{user.email}</Typography.Body>
              </td>
              <td className={styles['table-row']}>
                <Typography.Body color={80}>{user.username}</Typography.Body>
              </td>
              <td className={styles['table-row']}>
                <Typography.Body color={80}>{user.class}</Typography.Body>
              </td>
              <td className={styles['table-row']}>
                <Typography.Body color={80}>{user.department}</Typography.Body>
              </td>
              <td className={styles['table-row']}>
                <Typography.Body color={80}>{user.createdAt}</Typography.Body>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
