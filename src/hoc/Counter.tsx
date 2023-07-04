import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>Counters</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 10)}>Increment</button>
    </div>
  );
};

export default Counter;
