'use client';
import { ForwardedRef, forwardRef, useState } from 'react';
import styles from './InputBox.module.scss';
import Label from '../label/Label';

interface InputBoxProps {
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
}

const InputBox = forwardRef(function InputBox(
  props: InputBoxProps & React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [error, setError] = useState(false);
  return (
    <div className={styles.container}>
      {props.label && <Label label={props.label} required={props.required} />}
      <input
        onBlur={() => {
          if (props.required && !props.value) {
            setError(true);
          } else {
            setError(false);
          }
        }}
        ref={ref}
        className={[styles.input, error && styles.inputError].join(' ')}
        {...props}
      />
      {error && (
        <span className={styles.error}>{props.label}을(를) 입력해주세요.</span>
      )}
    </div>
  );
});

export default InputBox;
