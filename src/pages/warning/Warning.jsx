import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import aggressiveHippoVideo from '../../../src/assets/aggressive-hippo.mp4';
import styles from './Warning.module.css';

function Warning() {
  const [showRu, setShowRu] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/game');
  }, [navigate]);

  const handleClickShowRuText = useCallback(() => {
    setShowRu((prev) => !prev);
    console.log('Width', window.innerWidth, window.innerHeight);

    //добавила для отладки ширины экрана в хроме. не совпадает с шириной, заданной в хроме
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className={styles['background-video']}
      >
        <source src={aggressiveHippoVideo} type="video/mp4" />
      </video>
      <section className={styles.content}>
        <div className="enContent">
          <h1 className={styles.header}>Dangerous Hippo</h1>
          <p className={clsx(styles.firstP, styles.warningParagraph)}>
            According to the World Health Organization, hippos kill hundreds of
            people every year in Africa. This makes them one of the most
            dangerous big animals there.
          </p>
          <p className={styles.warningParagraph}>
            Hippos can exhibit aggression if they are scared. They might
            accidentally hurt someone if they move suddenly.
          </p>
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={handleClickShowRuText} className={styles.btn}>
            {!showRu ? 'Ru' : 'Hide'}
          </button>
          <button
            type="button"
            className={clsx(styles.btn, styles.btnDangerNext)}
            onClick={handleClick}
          >
            Next
          </button>
        </div>

        {showRu && (
          <div className={styles.ruContent}>
            <p
              className={clsx(
                styles.firstP,
                styles.warningParagraph,
                styles.warningParagraphRu
              )}
            >
              По данным Всемирной организации здравоохранения, бегемоты ежегодно
              убивают несколько сотен человек в Африке. Это делает их одними из
              наиболее смертоносных крупных животных на континенте.
            </p>
            <p
              className={clsx(
                styles.warningParagraph,
                styles.warningParagraphRu
              )}
            >
              Бегемоты могут проявлять агрессию, если они напугаются. Бегемот
              может случайно задавить человека, переместившись в сторону.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Warning;
