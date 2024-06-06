'use client';
import { useSearchParams } from 'next/navigation';
import { createPortal } from 'react-dom';
import styles from './CreateModal.module.scss';
import Link from 'next/link';
import { Typography } from '../typography';
import InputBox from '../input/InputBox';
import Label from '../label/Label';
import { postNotice } from '@/app/actions/notice/postNotice';

function CreateModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('create');

  if (modal) {
    return (
      <div className={styles['modal-backdrop']}>
        <form action={postNotice} className={styles.modal}>
          <Typography.TitleLarge color={90}>공지 작성</Typography.TitleLarge>
          <InputBox
            type="text"
            placeholder="제목을 입력하세요"
            label="공지 제목"
            required
            name="title"
          />
          <div className={styles['textarea-group']}>
            <Label label="공지 내용" required />
            <textarea
              className={styles['input-textarea']}
              placeholder="내용을 입력하세요"
              name="content"
            />
          </div>

          <div className={styles['button-group']}>
            <Link href={'notice'} className={styles.close}>
              <Typography.Label color={90}>취소</Typography.Label>
            </Link>
            <button type="submit" className={styles['apply']}>
              <Typography.Label color={10}>작성</Typography.Label>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateModal;
