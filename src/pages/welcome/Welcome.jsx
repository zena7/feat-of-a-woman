import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import cityImg from '../../../public/assets/welcomeLeningrad.webp';
import styles from './Welcome.module.css';

function Welcome() {
  const [showHeader, setShowHeader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowHeader((prev) => !prev);

    setTimeout(() => {
      navigate('/warning');
    }, 5000);
  };

  return (
    <>
      <h1
        className={clsx(
          styles.cityHeader,
          showHeader ? styles.itemShow : styles.itemHidden
        )}
      >
        Leningrad <br /> Saint Petersburg
      </h1>
      <img src={cityImg} alt="leningrad" className={styles.welcomeImg} />
      <form onSubmit={handleSubmit} className={styles.welcomeForm}>
        <label htmlFor="city" className={styles.formLabel}>
          In which city is the zoo located?
        </label>
        <input type="text" id="city" className={styles.inputCity} />
        <button type="submit" className={styles.btnCity}>
          Next
        </button>
      </form>
    </>
  );
}

export default Welcome;
