import { useState, lazy } from 'react'
import './App.css'

import Button from 'flights/Button'
import useCount from 'flights/store';
import HomePage from 'home/HomePage'

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className='App'>
        <div>
          <h1 className='text-5xl font-bold m-10'>
            HOST APPLICATION
          </h1>
          <Button />
        </div>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <HomePage />
      </div>
    </>
  )
}

export default App
