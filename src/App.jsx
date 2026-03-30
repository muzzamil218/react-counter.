import Count from "./components/Count";
import CountButtons from "./components/CountButtons";
import Reset from "./components/Reset";
import Title from "./components/Title";
import { useState } from "react";

const MIN = 0;
const MAX = 5;

export default function App(){
  const [count, setCount] = useState(0);
  
  return(
    <>
    <main>
      <div className="card">
     <Title />
     <Count count={count} />
     <Reset setCount={setCount} />
    <CountButtons count={count} setCount={setCount} min={MIN} max={MAX} />
      </div>
    </main>
    </>
  );
}