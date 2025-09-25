import { useActionState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Incre</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decre</button>
    </div>
  );
}

export default Counter;
