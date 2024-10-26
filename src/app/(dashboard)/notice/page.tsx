import styles from './page.module.scss';
import { Typography } from '../../_components/typography';
import InputBox from '../../_components/input/InputBox';
import Checkbox from '../../_components/checkbox/Checkbox';
import { cookies } from 'next/headers';
import { Notice } from '@/app/types/notice';
import Link from 'next/link';
import PlusIcon from '@/app/_assets/icons/plus.svg';
import RemoveIcon from '@/app/_assets/icons/delete.svg';
import EditIcon from '@/app/_assets/icons/edit.svg';
import { getNotices } from '@/app/actions/notice/getNotices';

export default async function Page() {
  const notices = await getNotices();
  return (
    <div className={styles.section}>
      <div className={styles.sectionTop}>
        <Typography.TitleLarge color={90}>공지 관리</Typography.TitleLarge>
        <Typography.Label color={60}>
          공지를 작성하거나 관리할 수 있습니다
        </Typography.Label>
      </div>
      <form>
        <InputBox type="text" placeholder="제목을 입력하세요" />
      </form>
      <div className={styles.content}>
        <div className={styles.tableTop}>
          <Typography.Label bold color={80}>
            전체 공지 {notices?.length ?? 0}개
          </Typography.Label>
          <div className={styles['button-group']}>
            <Link className={styles['create-club']} href={`/notice/create`}>
              <Typography.Body bold color={10}>
                공지 추가
              </Typography.Body>
              <PlusIcon />
            </Link>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles['table-head']}>
            <tr>
              <th className={styles['table-checkbox']}>
                <Checkbox checked={false} />
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
            {notices?.length > 0 &&
              notices.map((notice: Notice) => (
                <tr key={notice.uuid}>
                  <td className={styles['table-checkbox']}>
                    <Checkbox checked={true} />
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>{notice.title}</Typography.Body>
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>admin</Typography.Body>
                  </td>
                  <td className={styles['table-row']}>
                    <Typography.Body color={80}>
                      {notice.createdAt}
                    </Typography.Body>
                  </td>
                  <td className={styles['icons']}>
                    <Link href={`/notice/edit/${notice.uuid}`}>
                      <EditIcon />
                    </Link>
                    <Link href={`/notice/delete/${notice.uuid}`}>
                      <RemoveIcon />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
