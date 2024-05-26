import { useState, lazy } from 'react'

import Button from 'flights/Button';
import useCount from 'flights/store';
import HomePage from 'home/HomePage';

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div className='text-black'>
        <div className="w-full flex flex-col items-center text-center gap-2 my-4">
          <h1 className="font-anton text-9xl w-full">EXPLORA</h1>
          <p className="text-3xl">Tu brújula viajera</p>
        </div>
        <HomePage />
      </div>
    </>
  )
}

export default App
