'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import styles from '@/app/styles/modal.module.scss';
import { Typography } from '@/app/_components/typography';
import InputBox from '@/app/_components/input/InputBox';
import Label from '@/app/_components/label/Label';
import { postNotice } from '@/app/actions/notice/postNotice';

export function Modal() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className={styles['modal-backdrop']}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        <form action={postNotice} className={styles.form}>
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
            <button type="button" className={styles.close} onClick={onDismiss}>
              <Typography.Label color={90}>취소</Typography.Label>
            </button>
            <button type="submit" className={styles['apply']}>
              <Typography.Label color={10}>작성</Typography.Label>
            </button>
          </div>
        </form>
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
