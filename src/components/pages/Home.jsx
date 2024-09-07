import  { useState } from 'react'

function Home() {

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
      <h1>This is Home Page</h1>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default Home