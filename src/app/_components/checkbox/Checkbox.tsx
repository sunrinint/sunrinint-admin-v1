import Check from '@/app/_assets/icons/check.svg';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  onChange?: () => void;
}

export default function Checkbox({ onChange, checked }: CheckboxProps) {
  return (
    <div
      className={[styles.container, checked ? styles.active : ''].join(' ')}
      onClick={onChange}
    >
      <Check fill={'currentColor'} />
    </div>
  );
}
