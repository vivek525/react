import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  const [counter,setCounter] = useState(15)
  const addValue = () => {
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)
    // setCounter(counter => counter+1)

    setCounter(13)
    setCounter(10)
    setCounter(8)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}> Add value {counter}</button>
    <br />
    <button onClick={removeValue}> Remove value {counter}</button>
    <p>Footer {counter}</p>
    </>
   
  )
}

export default App
