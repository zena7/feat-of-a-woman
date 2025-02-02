/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';
import FinalWindow from '../../components/finalWindow/FinalWindow';
import List from '../../shared/list/List';
import styles from './Game.module.css';
import { DIC as dic } from '../../data.js';
import { addClass, removeClass } from '../../utils/domUtils.js';

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

  const handleUpdateSelectValue = useCallback(
    ({ value, type, href }) => {
      if (pairValues.length === 0 || pairValues[0]?.type !== type) {
        addClass(href, styles['li-active']);

        return setPairValues((prev) => [...prev, { value, type, href }]);
      }
    },
    [pairValues]
  );

  useEffect(() => {
    if (pairValues?.length === 2) {
      handlePairCheck(pairValues);

      setPairValues((prev) => {
        prev.length = 0;
        return prev;
      });
    }
  }, [pairValues]);

  function isMatch([firstV, secondV]) {
    let isRightCouple = null;
    let firstSelectLang = null;

    if (firstV.type === 'key') {
      isRightCouple = dic[firstV.value] === secondV.value;
      firstSelectLang = 'en';
    }
    if (firstV.type === 'value') {
      isRightCouple = dic[secondV.value] === firstV.value;
      firstSelectLang = 'ru';
    }

    return { isRightCouple, firstSelectLang };
  }

  function handlePairCheck([firstV, secondV]) {
    const { isRightCouple, firstSelectLang } = isMatch([firstV, secondV]);

    pairValues.forEach(({ value, type, href }) => {
      if (isRightCouple) {
        addClass(href, styles['li-right-couple']);

        const [copyV1, copyV2] = pairValues;
        const removeFromList = (array, value) => {
          array((prev) => prev.filter((item) => item !== value));
        };

        if (firstSelectLang === 'ru') {
          setTimeout(() => {
            removeFromList(setRuList, copyV1.value);
            removeFromList(setEnList, copyV2.value);
          }, 1500);
        } else {
          setTimeout(() => {
            removeFromList(setEnList, copyV1.value);
            removeFromList(setRuList, copyV2.value);
          }, 1500);
        }
      } else {
        addClass(href, styles['li-false-couple']);
      }

      setTimeout(() => {
        removeClass(href, styles['li-active']);
        removeClass(href, styles['li-right-couple']);
        removeClass(href, styles['li-false-couple']);
      }, 2000);
    });
  }

  return (
    <>
      {enList.length === 0 && <FinalWindow />}
      {enList.length > 0 && (
        <section className={styles.game}>
          <div className={styles.background}></div>
          <h1 className={styles.headerGame}>Match the words</h1>
          <div className={styles['game-board']}>
            <List
              items={enList}
              type="key"
              className={styles.listOfValues}
              updateSelect={handleUpdateSelectValue}
            />
            <List
              items={ruList}
              type="value"
              className={styles.listOfValues}
              updateSelect={handleUpdateSelectValue}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Game;
