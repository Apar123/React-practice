import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter1, incrementCounter2 } from './Redux/MemoFunction/MemoFunctionActions';

export default function MemoFunction() {
  const { counter1, counter2 } = useSelector((state) => {
    const { memoReducer } = state;
    return {
      counter1: memoReducer.counter1,
      counter2: memoReducer.counter2,
    };
  });

  const dispatch = useDispatch();

  const IncrementCounter1 = () => {
    dispatch(incrementCounter1());
  }

  const IncrementCounter2 = () => {
    dispatch(incrementCounter2());
  }

  const isEvenForCounter1 = useMemo(() => {
    console.log('triggering increment counter 1');
    return counter1 % 2 === 0;
  }, [counter1]);

  const isEvenForCounter2 = useMemo(() => {
    console.log('triggering increment counter 2');
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>
          {counter1}
        </h1>
        <button onClick={IncrementCounter1}>
          Increment Counter
        </button>

        <div>
          {
            isEvenForCounter1
              ? 'Value of counter 1 is even'
              : 'Value of counter 1 is odd'
          }
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>
          {counter2}
        </h1>
        <button onClick={IncrementCounter2}>
          Increment Counter
        </button>
        <div>
          {
            isEvenForCounter2
              ? 'Value of counter 1 is even'
              : 'Value of counter 1 is odd'
          }
        </div>
      </div>
    </div>
  )
}
