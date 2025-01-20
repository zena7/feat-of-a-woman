import { Link } from 'react-router';

function Warning() {
  const handleClick = () => {
    console.log('CLICK');
  };

  return (
    <>
      <h1>Dangerous Hippo</h1>
      <button onClick={handleClick}>Start</button>
      <Link to="/game">Next</Link>
    </>
  );
}

export default Warning;
