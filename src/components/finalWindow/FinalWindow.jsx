import styles from './FinalWindow.module.css';
import hippoAndHeroImg from '../../assets/shadow.png';

function FinalWindow() {
  return (
    <section className={styles.endOfGame}>
      <img
        src={hippoAndHeroImg}
        alt="Photo-with-hippo-and-Evdokia"
        className={styles.finalImg}
      />
      <p>
        This is the hippopotamus Krasavitsa and her angel Evdokia Ivanovna
        Dashina
      </p>
    </section>
  );
}

export default FinalWindow;
