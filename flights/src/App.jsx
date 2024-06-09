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

function App() {
  return (
    <>
      <FlightInfoCard flight={fligth} />
    </>
  )
}

export default App
