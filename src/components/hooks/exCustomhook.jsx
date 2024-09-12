import React from "react";
// import { useCounter } from "./customhooks";

import { useLocalStorage } from "./customhooks";

// export default function Counter() {
//   const [ count, incrementHandler, decrementHandler, resetHandler ] = useCounter(0); 
//   console.log(count,"counting")

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Counter: {count}</h2>
//       <button onClick={incrementHandler} style={{ margin: "5px", padding: "10px" }}>
//         Increment
//       </button>
//       <button onClick={decrementHandler} style={{ margin: "5px", padding: "10px" }}>
//         Decrement
//       </button>
//       <button onClick={resetHandler} style={{ margin: "5px", padding: "10px" }}>
//         Reset
//       </button>
//     </div>
//   );
// }





export const CounterWithLocalStorage = () => {
  const [count, setCount, removeCount] = useLocalStorage("counter", 0); // Initialize hook with "counter" key and 0 as initial value






  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
      <button onClick={removeCount} style={{ margin: "5px", padding: "10px" }}>
        Remove from LocalStorage
      </button>
    </div>
  );
};


