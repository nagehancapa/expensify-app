import { createStore } from "redux";

// const add = ({data}) => {
//   return data.a + data.b;
// };
// const add = ({a, b}) => {
//   return a + b;
// };
// console.log(add({ a: 1, b: 12 }));

// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1;
// })

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count = 101 } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount());
