import { useState } from 'react';
import { Link } from 'react-router-dom';
import HotelsPage from 'hotels/HotelsPage'
import HotelInfoCard from 'hotels/HotelInfoCard'
import { hotels } from '../utils/hotelsTestData' 
import Nav from '../components/Nav/Nav';

export default function Hotels() {
    const [search, setSearch] = useState({
        city: '',
    })

    return (
        <main className='bg-[#47466D] flex flex-col items-center justify-center'>
            <Nav />
            <section>
                <HotelsPage search={search} setSearch={setSearch} />
            </section>
            <section className="bg-white py-20 px-40">
                <div>
                    <h1 className="text-4xl text-black font-bold">
                        Hoteles en las ciudades más populares del mundo
                    </h1>
                </div>
                <div className="flex flex-wrap gap-10 mt-10">
                    {hotels.map((hotel) => (
                        <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
                            <HotelInfoCard hotel={hotel} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}