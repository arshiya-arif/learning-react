import {useState} from 'react'
import './App.css'
import Card from './components/Card.jsx'
function App() {
 const [Bgcolor, setBgColor] = useState('')

  return (
    
<div className={`p-4 ${Bgcolor} h-screen w-full`}>
<h1 className='text-2xl font-bold bg-blue-500'>Vite + React</h1>
<Card title = "Spark Technology"/>
<button className='p-2 rounded text-red-600' onClick={() => setBgColor('bg-red-500')}>Red</button>
<button className='p-2 rounded text-red-600' onClick={() => setBgColor('bg-white')}>White</button>
    </div>
    
  )
}

export default App
