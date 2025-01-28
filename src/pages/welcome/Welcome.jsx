import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import cityImg from '../../../src/assets/welcomeLeningrad.webp';
import videoForWarning from '../../assets/aggressive-hippo.mp4';
import styles from './Welcome.module.css';

function Welcome() {
  const [showHeader, setShowHeader] = useState(false);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setShowHeader((prev) => !prev);

      setTimeout(() => {
        navigate('/warning');
      }, 5000);
    },
    [navigate]
  );

  const handleChange = useCallback((event) => {
    setInput(event.target.value);
  }, []);

  useEffect(preloadResources, []);

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
        <input
          type="text"
          id="city"
          className={styles.inputCity}
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className={styles.btnCity}>
          Next
        </button>
      </form>
    </>
  );
}

function preloadResources() {
  const video = document.createElement('video');
  video.src = videoForWarning;
  video.preload = 'auto';
  video.addEventListener('loadeddata', () => {
    console.log('Видео уже загружено!');
  });

  console.log('in useEffect');

  const img = new Image();
  img.src = './assets/gameBg.webp';
}

export default Welcome;
