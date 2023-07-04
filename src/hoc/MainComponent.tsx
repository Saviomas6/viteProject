import { useState } from "react";

import GridComponent from "./GridComponent";




const MainComponent = () => {

const [value, setValue] = useState(0)



  return (
    <div style={{ backgroundColor: "red" }}>
    <h1>Savio {value}</h1>
    <button onClick={()=>setValue((pre)=>pre+2)}>Increment</button>
    <GridComponent/>
    </div>
  );
};

export default MainComponent;
