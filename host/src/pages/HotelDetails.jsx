import Nav from '../components/Nav/Nav'
import { Link } from 'react-router-dom'

const hotel = {
    id: "2",
    city: "Cali",
    hotelname: "Hotel Dann Carlton Cali",
    address: "Av. Colombia No. 2-72",
    price: "408000",
    stars: 5,
    description: "El Hotel Dann Carlton Cali ofrece habitaciones con aire acondicionado y TV por cable en el distrito de Granada de Cali. Este hotel de 5 estrellas cuenta con piscina al aire libre, centro de fitness y WiFi gratuita."
}

export default function HotelDetails() {
    return(
        <main>
            <section 
                style={{backgroundImage: `url(/images/Hoteles.jpg)`}}
                className="w-screen h-[510px] flex flex-col items-center bg-cover bg-center bg-no-repeat"
            >
                <Nav />
                <div className="w-full h-full flex justify-between p-20 items-end">
                    <div className='flex flex-col'>
                        <h1 className="text-black font-anton font-bold text-6xl">{hotel.hotelname}</h1>
                        <p className='text-black text-3xl font-semibold'>{hotel.city}</p>
                    </div>
                    <div className='text-white bg-orange-500 px-3 py-6 rounded-full items-center flex justify-center'>
                        <p className='font-bold text-3xl'>{hotel.stars} / 5</p>
                    </div>
                </div>
            </section>
            <section className='bg-[#47466D] p-20'>
                <div className='flex'>
                    <p className='text-2xl font-bold'>{hotel.description}</p>
                    <div className='bg-white text-black rounded-xl mx-10 p-10 w-full'>
                        <p className='font-bold text-2xl'>{hotel.address}</p>
                        <div className='w-full h-[2px] bg-black my-5'/>
                        <p className='font-semibold text-xl'>Precios desde: {hotel.price} COP</p>
                    </div>
                </div>
            </section>
            <section className='bg-white flex flex-col justify-center items-center gap-10 py-20'>
                <h2 className='text-center text-5xl text-black font-anton'>Reserva este Hotel en:</h2>
                <div className='hover:scale-105 transition-all duration-100'>
                    <a href='https://www.booking.com/index.es.html' target='_blank' rel='noreferrer'>
                        <img src='/images/Booking.png' alt='Booking.com' className='w-[300px]'/>
                    </a>
                </div>
            </section>
            <section className='bg-[#47466D] p-20 flex justify-center items-center'>
                <Link to={"/hotels"}>
                    <div className='bg-orange-500 rounded-full p-4 hover:scale-105 transition-all duration-100 hover:cursor-pointer'>
                        <h2 className='text-white font-bold text-xl'>Seguir buscando</h2>
                    </div>
                </Link>
            </section>
        </main>
    )
}