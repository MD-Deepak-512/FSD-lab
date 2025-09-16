import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hooks from './Reactprep-f/Hooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex items-centered">
      <Hooks/>
    </div>
    
    </>
  )
}

export default App
