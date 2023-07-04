import { useState } from "react";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Hello Counter changed");
  const name = "Savio";
  return (
    <div>
      {count}
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <Count name={name} />
    </div>
  );
};

export default Counter;
