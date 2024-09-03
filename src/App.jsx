import { useState } from "react";
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  
  const reset = () => {
    setCount(0);
  }
  
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <AppHeader />

      <div className="main">
        <div>
          <h1>Count : {count}</h1>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>

      <AppFooter />
    </>
  )
}

export default App
