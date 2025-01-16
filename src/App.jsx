/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import clsx from 'clsx';
import './App.css';
import mainPic from './assets/hippo-and-hero.webp';

function Welcome() {
  return (
    <>
      <h1>Feat of a brave woman</h1>
      <img src={mainPic} alt="hippo" className="main-hippo" />
    </>
  );
}

const dic = {
  Kind: 'Добрый',
  Brave: 'Смелый',
  Strong: 'Сильный',
  Caring: 'Заботливый',
  Patient: 'Терпеливый',
  Responsive: 'Отзывчивый',
  Reliable: 'Надежный',
  Courageous: 'Мужественный',
  Persistent: 'Упорный',
  Genuine: 'Настоящий',
};

function List({ items, type = '', className, updateSelect, ...props }) {
  const handleClick = useCallback(
    (event) => {
      let value = event.target;
      value.classList.add('li-active');

      updateSelect({ value: value.textContent, type, href: value });
    },
    [type, updateSelect]
  );

  return (
    <ul
      {...props}
      onClick={handleClick}
      className={clsx('list', className && className)}
    >
      {items.map((i) => (
        <li key={i} className="li-item">
          {i}
        </li>
      ))}
    </ul>
  );
}

function shuffle(ar) {
  for (let i = ar.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [ar[i], ar[j]] = [ar[j], ar[i]];
  }

  return ar;
}

function Game() {
  const [enList, setEnList] = useState(() => shuffle(Object.keys(dic)));
  const [ruList, setRuList] = useState(() => shuffle(Object.values(dic)));
  const [pairValues, setPairValues] = useState([]);

  useEffect(() => {
    console.log('RU', ruList);
  }, [ruList]);

  const handleUpdateSelectValue = useCallback(
    ({ value, type, href }) => {
      if (pairValues.length === 0) {
        return setPairValues((prev) => [...prev, { value, type, href }]);
      }
      if (pairValues[0].type !== type) {
        console.log('type:', pairValues[0].type, type);
        return setPairValues((prev) => [...prev, { value, type, href }]);
      }
    },
    [pairValues]
  );

  useEffect(() => {
    console.log('PAIR', pairValues);
    if (pairValues?.length === 2) {
      let result = isMatch(pairValues);

      setTimeout(() => {
        setPairValues((prev) => {
          prev.length = 0;
          return prev;
        });
      }, 3000);
    }
  }, [pairValues]);

  function isMatch([firstV, secondV]) {
    let isRightCouple = null;
    let firstSelectLang = null;

    if (firstV.type === 'key') {
      isRightCouple = dic[firstV.value] === secondV.value;
      firstSelectLang = 'en';
      // if (isRightCouple) {
      //   console.log('YESSSSSSSSS');
      //   setTimeout(() => {
      //     console.log('УДАЛЯЮ');
      //   }, 2500);
      // }
    }
    if (firstV.type === 'value') {
      isRightCouple = dic[secondV.value] === firstV.value;
      firstSelectLang = 'ru';
    }

    pairValues.forEach(({ value, type, href }) => {
      if (isRightCouple) {
        href.classList.add('li-right-couple');

        if (firstSelectLang === 'ru') {
          setTimeout(() => {
            setRuList((prev) =>
              prev.filter((item) => item !== pairValues[0].value)
            );
            setEnList((prev) =>
              prev.filter((item) => item !== pairValues[1].value)
            );
          }, 2000);
        } else {
          setTimeout(() => {
            setEnList((prev) =>
              prev.filter((item) => item !== pairValues[0].value)
            );
            setRuList((prev) =>
              prev.filter((item) => item !== pairValues[1].value)
            );
          }, 2000);
        }
      } else {
        href.classList.add('li-false-couple');
      }

      setTimeout(() => {
        href.classList.remove('li-active');
        href.classList.remove('li-right-couple');
        href.classList.remove('li-false-couple');
      }, 2000);
    });

    return isRightCouple;
  }

  return (
    <div className="game-board">
      <List
        items={enList}
        type="key"
        className="list-of-values"
        updateSelect={handleUpdateSelectValue}
      />
      <List
        items={ruList}
        type="value"
        updateSelect={handleUpdateSelectValue}
      />
    </div>
  );
}

function App() {
  // return <Game />;
  return (
    <>
      <Welcome />
      <Game />
    </>
  );
}

// function App() {
// const [count, setCount] = useState(0);

// return (
//   <>
//     <div>
//       <Welcome name="Zena" />
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//     <section>
//       <li></li>
//       <li></li>
//       <li></li>
//     </section>
//   </>
// );
// }

export default App;
