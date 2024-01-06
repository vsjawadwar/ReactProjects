import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice1 from './components/Practice1'
import Practice2Card from './components/Practice2Card'
import Practice3Card from './components/Practice3Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Practice1 /> */}
      {/* <Practice2Card /> */}
      <Practice3Card />
    </>
  )
}

export default App
