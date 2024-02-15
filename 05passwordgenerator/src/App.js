import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);  
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass =""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`!@#$%^&*(){}[]"


    for(let i=1;i<=length;i++){
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  return (
    <>
    <div className='"w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='my-3 text-center text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type='text' value={password} ref={passwordRef} placeholder="password" className='outline-none w-full py-1 px-3' readOnly />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  style={{backgroundColor: "blue"}} onClick={copyPassword}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={e=> setLength(e.target.value)} />
      <label>length: {length}</label>
      </div>
    </div>
       <div className='flex items-center gap-1'>
       <input type="checkbox" id='numberInput' defaultChecked={numberAllowed} onChange={()=>setNumberAllowed(prev => !prev)}/>
       <label htmlFor='numberInput'>Numbers</label>
       </div>
      
       <div className='flex items-center gap-1'>
       <input type="checkbox" id='charInput' defaultChecked={charAllowed} onChange={() => setCharAllowed(prev=> !prev)} />
       <label htmlFor='charInput'>Characters</label>
       </div>     
    </div>
    </>    
  );
}

export default App;
