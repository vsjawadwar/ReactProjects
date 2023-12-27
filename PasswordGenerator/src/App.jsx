import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(characterAllowed) str+="!@#$%^&*()_{}[]~`''";

    for(let i=0; i<=length; i++){
      let char= Math.floor(Math.random()*length + 1);
      pass+=str.charAt[char];
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword]);

  return (
    <>
     <div style={{display:'flex',justifyContent:'center', marginTop:200}}>
     <input style={{height:40,width:300,marginRight:20}} type="text" value={password} placeholder='password' readOnly/>
     <button type="button" class="btn btn-primary">Copy Password</button>
     </div>
    </>
  )
}

export default App
