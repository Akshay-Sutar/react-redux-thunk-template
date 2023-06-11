import { CounterActions } from "../constants/CounterActionConstants";

export const IncrementCounter = () => {
  return async (dispatch) => {
    dispatch({ type: CounterActions.INCREASE });
  };
};

export const DecrementCounter = () => {
  return async (dispatch) => {
    dispatch({ type: CounterActions.DECREASE });
  };
};

export const IncrementCounterByValue = (value) => {
  return async (dispatch) => {
    dispatch({ type: CounterActions.INCREASEBYVALUE, payload: value });
  };
};
