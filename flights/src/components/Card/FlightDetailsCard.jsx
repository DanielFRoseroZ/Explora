import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FlightInfoCard({ flight }) {
    // const { id } = useParams();
    // const [flight, setFlight] = useState({});

    // useEffect(() => {

    // },[])

    const date = new Date(flight.fecha);
    const day = date.getDate();
    const month = date.getMonth();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return(
        <div className="w-[600px] rounded-3xl bg-white flex flex-col text-black">
            <div className="text-center flex justify-between">
                <h1 className="font-bold text-3xl px-3 pt-2">{flight.destino}</h1>
                <div className="bg-orange-500 p-3 text-white font-bold rounded-bl-3xl rounded-tr-3xl">
                    {flight.aerolinea}
                </div>
            </div>
            <div className="flex">
                <div className="bg-orange-500 flex flex-col text-white font-bold items-center p-2 rounded-bl-3xl">
                    <div className="text-xl">
                        {day}
                    </div>
                    <div>
                        {monthNames[month]}
                    </div>
                </div>
                <div className="flex items w-full justify-between py-3 px-5">
                    <h2>Desde <p className="font-bold text-xl">{flight.origen}</p></h2>
                    <div className="flex flex-col">
                        <p>A tan solo</p>
                        <p className="font-bold text-xl">{flight.precio} USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}