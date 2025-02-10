import { useState } from 'react'
import './App.css'
import Full from './full'

function App() {
  const [count, setCount] = useState(true)
 
  return (
    <div className={`position-relative overflow-hidden`}>
      <Full/>
      

    </div>
  )
}

export default App
