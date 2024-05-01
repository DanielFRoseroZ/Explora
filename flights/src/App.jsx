import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/Button/Button'
import useCount from './utils/store'

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className='App'>
        <div>
          <h1 className='text-5xl font-bold m-10'>REMOTE APPLICATION</h1>
        </div>
        <Button />
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
