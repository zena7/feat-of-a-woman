import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Button = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      {...props}
      className={clsx(styles.btn, className && className)}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
