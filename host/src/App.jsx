import { useState, lazy } from 'react'
import HostHomePage from './pages/HostHomePage'

import HomePage from 'home/HomePage';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <main>
      <HostHomePage />
        <div className='bg-[#47466D] h-full w-full text-white flex flex-col items-center justify-center'>
          <Nav />
          <HomePage />
        </div>
    </main>
  )
}

export default App
