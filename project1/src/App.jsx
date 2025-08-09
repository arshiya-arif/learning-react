import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0) 
 const increment = () => {
  if(count>=20){
    alert("Counter cannot be greater than 20")
    return
  }
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
 }
 const decrement = () => {
  if(count <= 0) {
    alert("Counter cannot be less than 0")
    return
  }
  setCount(count - 1)
 }

  return (
    <>
    <h1>Learning React</h1>
    <h2>Counter Value: {count} </h2>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement}> Decrement</button>


      
    </>
  )
}

export default App
