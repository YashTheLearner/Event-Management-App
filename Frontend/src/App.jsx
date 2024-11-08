import { useState } from 'react'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup />
    <Login/>
    
    </>
  )
}

export default App
