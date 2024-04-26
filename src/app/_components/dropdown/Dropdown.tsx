'use client';
import React from 'react';
import InputBox from '../input/InputBox';
import Label from '../label/Label';
import styles from './Dropdown.module.scss';
import { Typography } from '../typography';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
}

export default function Dropdown({
  label,
  options,
  value,
  setValue,
}: DropdownProps) {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <div className={styles.container}>
      <Label label={label} />
      <div className={styles.selected} onClick={() => setDropdown(!dropdown)}>
        {value}
        <div className={styles.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </div>
      </div>
      {dropdown && (
        <ul className={styles.option}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setValue(option);
                setDropdown(false);
              }}
            >
              <Typography.Label color={90}>{option}</Typography.Label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
