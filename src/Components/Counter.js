import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementCounter,
  IncrementCounter,
  IncrementCounterByValue,
} from "../store/actions/CounterActions";

export const Counter = () => {
  const counterRef = useRef();

  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increaseByOne = () => {
    dispatch(IncrementCounter());
  };
  const decreaseByOne = () => {
    dispatch(DecrementCounter());
  };

  const increaseByValue = () => {
    dispatch(IncrementCounterByValue(counterRef.current.value));
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span>{counter}</span>
      </div>
      <div>
        <button onClick={increaseByOne}>Increase by 1</button>
        <button onClick={decreaseByOne}>Decrease by 1</button>
      </div>
      <div>
        <input type="text" ref={counterRef} />
        <button onClick={increaseByValue}>Increase by this much</button>
      </div>
    </div>
  );
};
