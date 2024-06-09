export default function FlightInfoCard({ flight }) {
    return(
        <div className="bg-[url('/images/Flights/Barranquilla.jpg')] bg-cover w-[380px] rounded-xl flex-flex-col items-end justify-end hover:scale-105 transition-all duration-100 hover:cursor-pointer">
            <div className="h-[150px]">
                <h1 className="text-black text-4xl font-bold font-anton p-5">{flight.destino}</h1>
            </div>
            <div className="bg-gray-400 bg-opacity-50 h-[100px] backdrop-blur items-center flex flex-col justify-center rounded-b-xl px-5">
                <div className="bg-white rounded-xl w-full text-black flex justify-between items-center gap-5 px-5">
                    <p className="text-start">Origen: <p className="font-bold text-xl">{flight.origen}</p></p>
                    <p className="text-start">Desde: <p className="font-bold text-xl">{flight.precio} USD</p></p>
                </div>
            </div>
        </div>
    )
}