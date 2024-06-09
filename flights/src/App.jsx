<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/Button/Button'
import useCount from './utils/store'
=======
import SearchTool from "./components/SearchTool";
import FlightInfoCard from "./components/Card/FlightDetailsCard";

const fligth = {
  "id": "FL5678",
  "origen": "Barcelona",
  "destino": "Los Angeles",
  "fecha": "2024-08-01T14:00:00Z",
  "precio": "850.00",
  "numEscalas": "1",
  "listaEscalas": ["Chicago"],
  "aerolinea": "American Airlines"
}
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useCount();

  return (
    <>
<<<<<<< Updated upstream
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
=======
      <FlightInfoCard flight={fligth} />
>>>>>>> Stashed changes
    </>
  )
}

export default App
