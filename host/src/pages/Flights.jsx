import { useState } from 'react';
import SearchTool from 'flights/SearchTool';
import Nav from '../components/Nav/Nav';
import { flights } from '../utils/flightsTestData';
import FlightInfoCard from '../components/Flights/FlightInfoCard';

export default function FlightsPage() {
    const [search, setSearch] = useState({
        origen: '',
        destino: '',
        fecha: ''
    });
    const [showFlights, setShowFlights] = useState(false);

    const handleToggleFlights = () => {
        setShowFlights(!showFlights);
    }

    return(
        <main className='w-full flex flex-col items-center justify-center bg-white'>
            <Nav /> 
            <section className='w-screen bg-white items-center flex flex-col justify-center pb-40 pt-20'>
                <SearchTool search={search} setSearch={setSearch} />
            </section>
            <section className='bg-[#47466D] w-full py-20 items-center flex flex-col justify-center'>
                <h1 className='font-anton text-5xl font-bold text-white text-center'>Destinos Populares</h1>
                <div className='flex flex-wrap w-full p-10 gap-7'>
                    {flights.slice(0,6).map((flight, index) => (
                        <FlightInfoCard key={index} flight={flight} />
                    ))}
                </div>
                {showFlights && (
                    <div className='flex flex-wrap w-full p-10 gap-7'>
                        {flights.slice(6).map((flight, index) => (
                            <FlightInfoCard key={index} flight={flight} />
                        ))}
                    </div>
                )}
                <div>
                    <button onClick={handleToggleFlights} className='bg-orange-500 text-white font-bold py-2 px-5 rounded-xl hover:bg-orange-400'>{showFlights ? 'Ver menos' : 'Ver más'}</button>
                </div>
            </section>
            <section className='bg-[#47466D] w-full'>
                <h1 className='font-anton text-5xl font-bold text-white text-center'>Consejos para tu viaje</h1>
                <div className='flex gap-5 p-10 text-black'>
                    <div className='bg-white rounded-xl p-5'>
                        <h2 className='font-bold text-2xl'>Llega Temprano al Aeoropuerto</h2>
                        <div className='wfull h-[2px] my-2 bg-black'/>
                        <p>
                            Para evitar cualquier contratiempo, asegúrate de llegar al aeropuerto al menos dos horas antes de un vuelo nacional y tres horas antes de un vuelo internacional. Esto te dará tiempo suficiente para pasar por los controles de seguridad, registrar tu equipaje y encontrar tu puerta de embarque sin prisas.
                        </p>
                    </div>
                    <div className='bg-white rounded-xl p-5'>
                        <h2 className='font-bold text-2xl'>Empaca Inteligentemente</h2>
                        <div className='wfull h-[2px] my-2 bg-black'/>
                        <p>Lleva contigo solo lo esencial en tu equipaje de mano: documentos importantes, artículos de valor, una muda de ropa y cualquier medicación necesaria. Además, asegúrate de que tu equipaje facturado cumpla con las restricciones de peso y tamaño de la aerolínea para evitar cargos adicionales.</p>
                    </div>
                    <div className='bg-white rounded-xl p-5'>
                        <h2 className='font-bold text-2xl'>Manténte Hidratado</h2>
                        <div className='wfull h-[2px] my-2 bg-black'/>
                        <p>El aire en la cabina de un avión puede ser muy seco, lo que puede causar deshidratación. Lleva una botella de agua reutilizable y llénala después de pasar el control de seguridad. También, evita el consumo excesivo de alcohol y cafeína antes y durante el vuelo.</p>
                    </div>
                </div>
                
            </section>
        </main>
    )
}