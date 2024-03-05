import { useState, useEffect } from "react";

function Counter({ name }) {

  const [counter, setCounter] = useState(0);

  const handleClickButton = () => {
    setCounter(counter + 1);
  };

  const reset = () => setCounter(0)


  return (
    <div>
      <button onClick={handleClickButton}>{counter} - {name}</button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}

export default Counter;
