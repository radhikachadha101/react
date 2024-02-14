import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState('Blue');
  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap  justify-end bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded px-2 py-3 '>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}} onClick={()=> setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'olive'}} onClick={()=> setColor("olive")}>Olive</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}} onClick={()=> setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}} onClick={()=> setColor("orange")}>Orange</button>
      </div>
     </div>
    </div>
  );
}

export default App;
