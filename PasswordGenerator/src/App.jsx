import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_{}[]~`''";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator]);


  return (
    <div className='container'>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 200 }}>
        <input style={{ height: 40, width: 300, marginRight: 20 }} 
        type="text" 
        value={password} 
        placeholder='password' 
        readOnly 
        ref={passRef}
        />
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={copyToClipboard}>Copy Password</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <input 
          type="range" 
          min={6} 
          max={100} 
          value={length} 
          onChange={(e) => { setLength(e.target.value) }} 
        />
        <label>Length: {length}</label>
        
        <input 
          className='mx-1'
          type="checkbox"   
          defaultChecked={numberAllowed} 
          id='numberInput' 
          onChange={()=>{
          setNumberAllowed((prev)=> !prev);
          }} 
          />
          <label className='mx-1'>Numbers</label>

          <input 
          className='mx-1'
          type="checkbox"   
          defaultChecked={characterAllowed} 
          id='characterInput' 
          onChange={()=>{
          setCharAllowed((prev)=> !prev);
          }} 
          />
          <label className='mx-1'>Special Characters</label>
      </div>
    </div>
  )
}

export default App
