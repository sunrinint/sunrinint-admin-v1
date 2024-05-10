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
import { deleteClub } from '@/app/actions/deleteClub';

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
        <form action={deleteClub} className={styles.form}>
          <Typography.TitleLarge color={90}>동아리 삭제</Typography.TitleLarge>
          <Typography.Label color={90}>
            정말로 동아리를 삭제하시겠습니까? <br />
            <strong>이 행동은 절대로 되돌릴 수 없습니다.</strong>
          </Typography.Label>
          <input type="hidden" name="id" value={id} />
          <div className={styles['button-group']}>
            <button type="button" className={styles.close} onClick={onDismiss}>
              <Typography.Label color={90}>취소</Typography.Label>
            </button>
            <button type="submit" className={styles['red']}>
              <Typography.Label color={10}>삭제</Typography.Label>
            </button>
          </div>
        </form>
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
