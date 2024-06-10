import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <div
            className="bg-slate-400 bg-opacity-80 h-[50px] w-[400px] flex justify-center items-center sticky top-5 z-50 rounded-full"
        >
            <nav>
                <ul className="flex gap-10">
                    <li className='hover:cursor-pointer hover:scale-105 transition-all duration-100'>
                        <Link to={"/"} className="text-white">Inicio</Link>
                    </li>
                    <li className='hover:cursor-pointer hover:scale-105 transition-all duration-100'>
                        <Link to={"/flights"} className="text-white">Vuelos</Link>
                    </li>
                    <li className='hover:cursor-pointer hover:scale-105 transition-all duration-100'>
                        <Link to={"/hotels"} className="text-white">Hoteles</Link>
                    </li>
                    <li className='hover:cursor-pointer hover:scale-105 transition-all duration-100'> 
                        <Link to={"/restaurants"} className="text-white">Restaurantes</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}