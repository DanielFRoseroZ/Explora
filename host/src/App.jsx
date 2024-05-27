import { useState, lazy } from 'react'
import HostHomePage from './pages/HostHomePage'

import HomePage from 'home/HomePage';

function App() {
  return (
    <main>
      <HostHomePage />
        <div className='bg-[#47466D] h-full w-full text-white'>
          <HomePage />
        </div>
    </main>
  )
}

export default App
