import Nav from "../components/Nav/Nav";
import RestaurantInfoCard from "../components/Restaurants/RestaurantInfoCard";
import Coment from "../components/Restaurants/Comment";

const restaurant = {
    id: "R1234",
    name: "McDonald's",
    description: "McDonald's es una cadena de restaurantes de comida rápida que ofrece una amplia variedad de opciones de comida rápida, como hamburguesas, papas fritas, refrescos y postres.",
    address: "Cra. 13 #93a-66, Bogotá, Colombia",
    phone: "+57 1 2180000",
}

const coments = [
    {
        id: "C1234",
        name: "Juan Perez",
        comment: "Excelente servicio y comida deliciosa",
        points: 5
    },
    {
        id: "C1235",
        name: "Maria Rodriguez",
        comment: "La comida estaba fría y el servicio fue lento",
        points: 2
    },
    {
        id: "C1236",
        name: "Carlos Gomez",
        comment: "Buena comida, pero el servicio fue regular",
        points: 4
    },
    {
        id: "C1237",
        name: "Ana Sanchez",
        comment: "La comida estaba deliciosa y el servicio fue excelente",
        points: 5
    }
]

export default function Restaurants() {
    return(
        <main>
            <section
                style={{backgroundImage: `url(/images/Restaurants/RestaurantBG.jpg)`}}
                className="w-screen h-[500px] bg-cover bg-center flex flex-col items-center justify-center"
            >
                <Nav />
                <div className="m-36 border-white border-4 p-10 bg-slate-400 bg-opacity-40">
                    <h1 className="text-white font-anton text-5xl font-bold">Restaurantes</h1>
                </div>
            </section>
            <section className="bg-[#47466D] p-20">
                <h2 className="text-white text-5xl font-anton font-bold">¡No puedes viajar sin probar las mejores comidas!</h2>
                <h3 className="text-white text-xl">Deleitaa tu paladar con los mejores restaurantes de los principales puntos turisticos</h3>
                <div className="mt-5">
                    <a href="https://www.opentable.com" target="_blank" className="bg-orange-500 text-white font-bold py-2 px-5 rounded-xl hover:bg-orange-400 text-2xl">Reserva aquí</a>
                </div>
            </section>
            <section className="bg-white p-20">
                <RestaurantInfoCard restaurant={restaurant} />
                <div className="mt-10">
                    <p className="text-black font-semibold text-3xl">Algunos comentarios de cliente recientes:</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 mt-5 w-full">
                    {coments.map((coment, index) => (
                        <Coment key={index} coment={coment} />
                    ))}
                </div>
            </section>
        </main>
    )
}