import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [Bgcolor, setBgColor] = useState("olive")

  return (
   
    <div className='w-full h-screen duration-200' style={{ backgroundColor: Bgcolor }}>
<div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-4 shadow-lg p-2 rounded-full bg-white'> 
    <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}} 
    onClick={() => setBgColor("red")}>Red</button>
    <button className='outline-none px-4 py-1 rounded-full text-gray-500' style={{backgroundColor:"yellow"}} 
    onClick={() => setBgColor("yellow")}>Yellow</button>
    <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}} 
    onClick={() => setBgColor("blue")}>Blue</button>
      
</div>
</div>

    </div>
    
  )
}

export default App
