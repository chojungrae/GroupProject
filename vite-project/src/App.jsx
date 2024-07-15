import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1>출석부</h1>
      <div>총 학생 수 : ?</div>
      <input></input>
    </>
  )
}

export default App
