import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
const [length, setLength] = useState(8)
const [numbersAllowed, setNumbersAllowed] = useState(false)
const [charactersAllowed, setcharactersAllowed] = useState(false)
const [password, setPassword] = useState('')
const passwordRef = useRef(null)
const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersAllowed) str += "0123456789"
  if(charactersAllowed) str += "!@#$%^&*()_+[]{}"
  for(let i=1; i<=length;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)
},[length, numbersAllowed, charactersAllowed,setPassword])
const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 1000) // For mobile devices
 window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{passwordGenerator()}, [length, numbersAllowed, charactersAllowed, passwordGenerator])  

return (
   
      <div className='w-full min-h-screen bg-gray-700 py-10'>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 px-4 text-orange-500 py-5'>
            <h1 className='text-white text-2xl font-bold text-center py-4'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-white'
      placeholder='Password will appear here'
      readOnly
      ref={passwordRef}

      />
      <button 
      onClick={copyPasswordToClipboard}
      className='bg-blue-600 text-white px-4 py-2'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numbersAllowed}
        id="numbersInput"
        onChange={()=>{setNumbersAllowed((prev)=> !prev)}}
        />
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charactersAllowed}
        onChange={()=>{setcharactersAllowed((prev)=> !prev)}}
        />
        <label>Special Characters</label>
      </div>
    </div>
     </div>
      </div>
  
  )
}

export default App
