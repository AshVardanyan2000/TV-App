import React, { FC } from 'react';
import styles from './loader.module.scss';

type LoaderProps = {
  size?: number;
  color?: string;
  borderWidth?: number;
};

const Loader: FC<LoaderProps> = ({ size = 40, color = ' #2727F5', borderWidth = 3 }: LoaderProps) => (
  <div className={styles.loader_wrapper}>
    <span
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderWidth,
      }}
    />
  </div>
);

export default Loader;
