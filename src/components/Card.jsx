import { useEffect, useState } from "react";
import * as data from '../database/data';
import classNames from 'classnames';
import { useMemo } from "react";

export const Card = (props) => {

  const emptyObj = {};

  const { fuck1, ok10, easy1d } = data;

  const { words } = props;

  const learningWords = useMemo(() => [...words], [words]);

  const [id, setCounter] = useState(0);
  useEffect(() => {
    setVisibleWord(learningWords[id].eng)
  }, [id, learningWords]);

  const [visibleWord, setVisibleWord] = useState(learningWords[0].eng);
  const [isTurned, setTurn] = useState(false);

  if (id < 0) {
    setCounter(0);
  }

  if (id > learningWords.length - 1) {
    setCounter(0);
  }

  return (
    <div className="carda-1">
      <div className="carda-with-nav">
        <div className="carda-wrapper">
          <button
            onClick={() => {
              setCounter(current => current - 1);
              setTurn(!isTurned)
            }}
          >
            p
          </button>
          <div
            className={classNames('carda', { 'carda-turned': isTurned })}
          >
            <span className="the-word">
              {visibleWord}
            </span>
          </div >
          <button
            onClick={() => {
              setCounter(current => current + 1);
              setTurn(current => !isTurned)
            }}

          >
            n
          </button>
        </div>

        <button
          className="turn-btn"
          onClick={() => {
            setVisibleWord((current) => {
              if (current === learningWords[id].eng) {
                return learningWords[id].rus
              } else if (current === words[id].rus) {
                return learningWords[id].eng;
              }
            });
            setTurn(current => !isTurned)
          }}
        >
          TURN
        </button>
      </div>

      <div className="timer-btns">
        <button
          className="timer-on-1 button is-danger is-large"
          onClick={() => {
            setCounter(current => current + 1)
            setTurn(current => !isTurned)

            fuck1.push({...learningWords[id]});
            learningWords.forEach((word, index) => {
              if (word.id === learningWords[id].id) {
                learningWords.splice(index , 1, emptyObj);
              }
            });

            setTimeout(() => {
              learningWords[id] = fuck1[0];
              fuck1.shift();
            }, 10000);
          }}
        >
          FUCK
        </button>

        <button
          className="timer-on-10 button is-primary is-large"
          onClick={() => {
            setCounter(current => current + 1)
            setTurn(current => !isTurned)

            ok10.push({...learningWords[id]});
            learningWords.forEach((word, index) => {
              if (word.id === learningWords[id].id) {
                learningWords.splice(index , 1, emptyObj);
              }
            });

            setTimeout(() => {
              learningWords[id] = ok10[0];
              ok10.shift();
            }, 10000);
          }}
        >
          OK
        </button>

        <button
          className="timer-on-1d button is-success is-large"
          onClick={() => {
            setCounter(current => current + 1)
            setTurn(current => !isTurned)

            easy1d.push({...learningWords[id]});
            learningWords.forEach((word, index) => {
              if (word.id === learningWords[id].id) {
                learningWords.splice(index , 1, emptyObj);
              }
            });

            setTimeout(() => {
              learningWords[id] = easy1d[0];
              easy1d.shift();
            }, 200000);
          }}
        >
          EASY
        </button>

      </div>

      {console.log(fuck1)}
    </div>
  );
}