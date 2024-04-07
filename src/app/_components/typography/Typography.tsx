import styles from './Typography.module.scss';

interface TypographyProps {
  children?: React.ReactNode;
  color: number;
  bold?: boolean;
}

const Typography = (
  props: TypographyProps & {
    option: string;
  },
) => {
  const option = [props.option, props.bold ? styles.bold : ''].join(' ').trim();
  return (
    <div
      className={option}
      style={{
        color: `var(--grayscale-${props.color})`,
      }}
    >
      {props.children}
    </div>
  );
};

export const Name = (props: TypographyProps) => {
  return <Typography {...props} option={styles.name} />;
};

export const Title = (props: TypographyProps) => {
  return <Typography {...props} option={styles.title} />;
};

export const TitleLarge = (props: TypographyProps) => {
  return <Typography {...props} option={styles.titleLarge} />;
};

export const Label = (props: TypographyProps) => {
  return <Typography {...props} option={styles.label} />;
};

export const Body = (props: TypographyProps) => {
  return <Typography {...props} option={styles.body} />;
};

export const Caption = (props: TypographyProps) => {
  return <Typography {...props} option={styles.caption} />;
};
