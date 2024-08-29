import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/Login'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
