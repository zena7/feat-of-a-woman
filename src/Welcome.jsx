import { Link } from 'react-router';

function Welcome() {
  const handleClick = () => {
    console.log('CLICK');
  };

  return (
    <>
      <h1>HELLO kid</h1>
      <button onClick={handleClick}>Start</button>
      <Link to="/warning">Start</Link>
    </>
  );
}

export default Welcome;
