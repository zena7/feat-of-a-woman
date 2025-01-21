import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import cityImg from '../../../public/assets/leningrad.webp';
import Container from '../../components/container/Сontainer';
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
    // navigate('/warning');
  };

  return (
    <>
      <Container>
        <h1 className={clsx(showHeader ? styles.itemShow : styles.itemHidden)}>
          Leningrad <br /> Saint Petersburg
        </h1>
        <img src={cityImg} alt="leningrad" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">In which city is the zoo located?</label>
          <input type="text" />
          <button type="submit">Next</button>
        </form>
      </Container>
    </>
  );
}

export default Welcome;
