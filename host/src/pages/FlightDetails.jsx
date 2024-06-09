import FlightDetailsCard from 'flights/FlightDetailsCard';
import { flights } from '../utils/flightsTestData';
import Nav from '../components/Nav/Nav';
import { Link } from 'react-router-dom';

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

export default function FlightDetails() {
    return (
        <main className='bg-[#47466D] w-screen h-full items-center flex flex-col justify-center'>
            <Nav />
            <section className='h-full p-20 flex flex-col gap-10'>
                <h2 className='text-5xl font-anton text-white font-bold text-center'>¿Encontraste tu vuelo ideal?</h2>
                <FlightDetailsCard flight={fligth} />
            </section>
            <section className='bg-white text-black w-full p-10'>
                <h2 className='text-5xl font-anton font-bold text-center'>Puedes Agendar tu vuelo en:</h2>
                <div className='flex justify-between mt-20'>
                    <div className='w-[200px] 2xl:w-[300px] h-[100px] hover:cursor-pointer hover:scale-105 transition-all duration-200'>
                        <a href='https://www.avianca.com/es/ofertas-destinos/ofertas-de-vuelos' target='_blank' rel='noreferrer'>
                            <img src='/images/Flights/Avianca.png' alt='Avianca' />
                        </a>
                    </div>
                    <div className='w-[200px] 2xl:w-[300px] h-[100px] hover:cursor-pointer hover:scale-105 transition-all duration-200'>
                        <a href='https://www.latamairlines.com/co/es' target='_blank' rel='noreferrer'>
                            <img src='/images/Flights/Latam.png' alt='Latam' />
                        </a>
                    </div>
                    <div className='w-[200px] 2xl:w-[300px] h-[100px] hover:cursor-pointer hover:scale-105 transition-all duration-200'>
                        <a href='https://www.lifemiles.com/fly/find' target='_blank' rel='noreferrer'>
                            <img src='/images/Flights/LifeMiles.png' alt='Latam' />
                        </a>
                    </div>
                    <div className='w-[200px] 2xl:w-[300px] h-[100px] hover:cursor-pointer hover:scale-105 transition-all duration-200'>
                        <a href='https://www.despegar.com.co/home/vuelos' target='_blank' rel='noreferrer'>
                            <img src='/images/Flights/Despegar.png' alt='Latam' />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-anton font-bold text-center'>No te olvides de informarte sobre Hoteles o Restaurantes antes de tu viaje:</h2>
                    <div className='flex items-center gap-10 justify-center'>
                        <Link to='/hotels'>
                            <button className='bg-orange-500 text-white font-anton font-bold text-xl p-2 rounded-lg mt-5'>Hoteles</button>
                        </Link>
                        <Link to='/restaurants'>
                            <button className='bg-orange-500 text-white font-anton font-bold text-xl p-2 rounded-lg mt-5'>Restaurantes</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='bg-[#47466D] py-20'>
                <h2 className='text-5xl font-anton font-bold text-center text-white'>
                    ¿Quieres seguir buscando vuelos?
                </h2>
                <div className='flex flex-wrap w-full p-10 gap-7 items-center justify-center'>
                    {flights.map((flight, index) => (
                        <Link to={`/flights/${flight.id}`} className='hover:scale-105 transition-all duration-100'>
                            <FlightDetailsCard key={index} flight={flight} />
                        </Link>

                    ))}
                </div>
            </section>
        </main>
    )
}