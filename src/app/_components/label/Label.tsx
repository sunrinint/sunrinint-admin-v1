import React from 'react';
import styles from './Label.module.scss';

export default function Label(props: { label: string; required?: boolean }) {
  return (
    <label
      className={[styles.label, props.required ? styles.required : ''].join(
        ' ',
      )}
    >
      {props.label}
    </label>
  );
}
