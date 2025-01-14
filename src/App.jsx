import React, { useCallback, useEffect, useState } from 'react';
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

const List = React.memo(function List({
  items,
  type = '',
  className,
  updateSelect,
  ...props
}) {
  console.log('render again again again');

  const handleClick = useCallback(
    (event) => {
      let value = event.target;
      value.classList.add('li-active');

      updateSelect({ value: value.textContent, type });
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
});

const shuffle = (ar) => {
  for (let i = ar.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [ar[i], ar[j]] = [ar[j], ar[i]];
  }

  return ar;
};

function Game() {
  const [ruList, setRuList] = useState(shuffle(Object.keys(dic))); // eslint-disable-line no-unused-vars
  const [enList, setEnList] = useState(shuffle(Object.values(dic))); // eslint-disable-line no-unused-vars
  const [pairValues, setPairValues] = useState([]);

  const handleUpdateSelectValue = useCallback(
    ({ value, type }) => {
      if (pairValues.length === 0) {
        return setPairValues((prev) => [...prev, { value, type }]);
      }
      if (pairValues[0].type !== type) {
        console.log('type:', pairValues[0].type, type);
        return setPairValues((prev) => [...prev, { value, type }]);
      }
    },
    [pairValues]
  );

  useEffect(() => {
    console.log('UPDATE', pairValues);
    if (pairValues?.length === 2) {
      let result = isMatch(pairValues);

      console.log('RESULT', result);
      setPairValues((prev) => {
        prev.length = 0;
        return prev;
      });
    }
  }, [pairValues]);

  function isMatch([firstV, secondV]) {
    console.log('HERE');

    if (firstV.type === 'key') {
      return dic[firstV.value] === secondV.value;
    }
    if (firstV.type === 'value') {
      return dic[secondV.value] === firstV.value;
    }
  }

  return (
    <div className="game-board">
      <List
        items={enList}
        type="value"
        className="list-of-values"
        updateSelect={handleUpdateSelectValue}
      />
      <List items={ruList} type="key" updateSelect={handleUpdateSelectValue} />
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

// import { useState, useEffect } from 'react';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from '/vite.svg';
// import clsx from 'clsx';
// import './App.css';
// import mainPic from './assets/hippo-and-hero.webp';

// function Welcome({ name }) {
//   return (
//     <>
//       <h1>Привет от {name}</h1>
//       <img src={mainPic} alt="hippo" className="main-hippo" />
//     </>
//   );
// }

// const dic = {
//   Kind: 'Добрый',
//   Brave: 'Смелый',
//   Strong: 'Сильный',
//   Caring: 'Заботливый',
//   Patient: 'Терпеливый',
//   Responsive: 'Отзывчивый',
//   Reliable: 'Надежный',
//   Courageous: 'Мужественный',
//   Persistent: 'Упорный',
//   Genuine: 'Настоящий',
// };

// const example = {
//   hi: 'привет',
//   dear: 'дорогая',
//   maggy: 'мэгги',
// };

// function List({ items, type = '', className, ...props }) {
//   const [firstSelect, setFirstSelect] = useState(null);

//   useEffect(() => {
//     console.log('InEFFECT', firstSelect);
//   }, [firstSelect]);

//   function handleClick(event) {
//     event.target.classList.add('li-active');

//     let currValue = event.target.textContent;
//     let res = checkSelection(currValue);

//     res !== undefined && console.log('RESULT:', res);
//   }

//   function checkSelection(value) {
//     let result = null;
//     console.log('checkSelection', value);

//     if (firstSelect === null || firstSelect?.type === type) {
//       setFirstSelect((prev) => ({ value, type }));
//       console.log('IN IF', firstSelect);
//       return;
//     } else {
//       console.log('ELSE');
//       result = isMatch(value);
//       setFirstSelect((prev) => null);
//     }
//     return result;
//   }

//   function isMatch(value) {
//     console.log('HERE');

//     if (type === 'key') {
//       return example[value] === firstSelect.value;
//     }
//     if (type === 'value') {
//       return example[firstSelect.value] === value;
//     }
//   }

//   return (
//     <ul
//       {...props}
//       onClick={handleClick}
//       className={clsx('list', className && className)}
//     >
//       {items.map((i) => (
//         <li key={i} className="li-item">
//           {i}
//         </li>
//       ))}
//     </ul>
//   );
// }

// const shuffle = (ar) => {
//   for (let i = ar.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));

//     [ar[i], ar[j]] = [ar[j], ar[i]];
//   }

//   return ar;
// };

// function Game() {
//   return (
//     <div className="game-board">
//       <List
//         items={shuffle(Object.values(example))}
//         type="value"
//         className="list-of-values"
//       />
//       <List items={shuffle(Object.keys(example))} type="key" />
//     </div>
//   );
// }

// function App() {
//   // return <Game />;
//   return (
//     <>
//       <Welcome name="Nata" />
//       <Game />
//     </>
//   );
// }
