import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    {e.target.name === 'increase' ? setCount(count + 1) : setCount(count - 1)}
  }
  
  return (
    <div className="App">
      <h1>Current Count: {count}</h1>
      <button name='increase' onClick={handleClick}>Increase Count</button>
      <button name='decrease' onClick={handleClick}>Decrease Count</button>
    </div>
  );
}

export default App;
