import styles from './Сontainer.module.css';
import clsx from 'clsx';

function Container({ children, className }) {
  return (
    <div className={clsx(styles.container, className && className)}>
      {children}
    </div>
  );
}

export default Container;
