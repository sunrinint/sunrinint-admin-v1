'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import styles from '@/app/styles/modal.module.scss';
import { Typography } from '@/app/_components/typography';
import InputBox from '@/app/_components/input/InputBox';
import Label from '@/app/_components/label/Label';
import { postNotice } from '@/app/actions/postNotice';
import { deleteNotice } from '@/app/actions/deleteNotice';

export function Modal({ id }: { id: string }) {
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
        <form action={deleteNotice} className={styles.form}>
          <Typography.TitleLarge color={90}>공지 작성</Typography.TitleLarge>
          <Typography.Label color={90}>
            공지를 삭제하시게 되면, <br />
            SunrinINT 앱에서 위 공지를 더 이상 볼 수 없게 됩니다
          </Typography.Label>
          <input type="hidden" name="id" value={id} />
          <div className={styles['button-group']}>
            <button type="button" className={styles.close} onClick={onDismiss}>
              <Typography.Label color={90}>취소</Typography.Label>
            </button>
            <button type="submit" className={styles['red']}>
              <Typography.Label color={10}>작성</Typography.Label>
            </button>
          </div>
        </form>
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
