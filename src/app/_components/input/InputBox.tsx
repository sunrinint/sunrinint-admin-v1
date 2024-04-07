import { ForwardedRef, forwardRef } from 'react';
import styles from './InputBox.module.scss';

interface InputBoxProps {
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
}

const InputBox = forwardRef(function InputBox(
  props: InputBoxProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={styles.container}>
      {props.label && (
        <label className={props.required ? styles.required : ''}>
          {props.label}
        </label>
      )}
      <input ref={ref} className="input-box" {...props} />
    </div>
  );
});

export default InputBox;
