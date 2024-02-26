import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlacementsTool from './PlacementsTool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlacementsTool></PlacementsTool>
    </>
  )
}

export default App
