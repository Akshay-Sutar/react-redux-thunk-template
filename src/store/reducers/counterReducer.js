import { CounterActions } from "../constants/CounterActionConstants";

const initState = {
  counter: 0,
};

export const CounterReducer = (state = initState, { type, payload }) => {
  let oldCounter = Number(state.counter);
  switch (type) {
    case CounterActions.INCREASE:
      return { ...state, counter: oldCounter + 1 };

    case CounterActions.DECREASE:
      return { ...state, counter: oldCounter - 1 };

    case CounterActions.INCREASEBYVALUE:
      return { ...state, counter: oldCounter + Number(payload) };

    default:
      return state;
  }
};
