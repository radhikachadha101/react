import { useState } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);

const addValue = () => {
  if(counter===20){
    alert("Counter value reached max limit of 20");
  }
  else{
    setCounter(counter+1);
  }
}
const decreaseValue = () => {
  if(counter===0){
    alert("Counter value reached min value limit of 0");
  }
  else{
    setCounter(counter-1);
  }
}
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={decreaseValue}>Decrease value</button>
    </div>
  );
}

export default App;
