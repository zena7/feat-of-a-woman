import { Link } from 'react-router';
import aggressiveHippoVideo from '../../../public/assets/aggressive-hippo.mp4';
import styles from './Warning.module.css';

function Warning() {
  const handleClick = () => {
    console.log('CLICK');
  };

  return (
    <>
      <video autoPlay muted loop className={styles['background-video']}>
        <source src={aggressiveHippoVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Dangerous Hippo</h1>
        <p>
          По данным Всемирной организации здравоохранения (ВОЗ) и других
          источников, бегемоты ежегодно убивают несколько сотен человек в
          Африке. Это делает их одними из наиболее смертоносных крупных животных
          на континенте.
        </p>
        <p>
          Бегемоты могут проявлять агрессию, если напугаются. Бегемот может
          случайно задавить человека, если неожиданно переместится в сторону.
        </p>
        <button onClick={handleClick}>Start</button>
        <Link to="/game">Next</Link> {/*сделать через кнопку and useNavigate*/}
      </div>
    </>
  );
}

export default Warning;
