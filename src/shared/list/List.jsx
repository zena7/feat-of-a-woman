import { useCallback } from 'react';
import clsx from 'clsx';
import styles from './List.module.css';

function List({ items, type = '', className, updateSelect, ...props }) {
  const handleClick = useCallback(
    (event) => {
      let value = event.target;

      if (value.tagName === 'LI') {
        updateSelect({ value: value.textContent, type, href: value });
      }
    },
    [type, updateSelect]
  );

  return (
    <ul
      {...props}
      onClick={handleClick}
      className={clsx(styles.list, className && className)}
    >
      {items.map((i) => (
        <li key={i} className="li-item">
          {i}
        </li>
      ))}
    </ul>
  );
}

export default List;
