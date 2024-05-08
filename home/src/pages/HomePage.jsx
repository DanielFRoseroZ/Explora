import ImageSlider from "../components/ImageSlider"
import InfoCard from "../components/InfoCard";

const slides = [
    {
        url: "https://picsum.photos/1760/652?random=1",
        title: "Slide 1",
        description: "This is the first slide of the carousel"   
    },
    {
        url: "https://picsum.photos/1760/652?random=2",
        title: "Slide 2",
        description: "This is the second slide of the carousel"
    },
    {
        url: "https://picsum.photos/1760/652?random=3",
        title: "Slide 3",
        description: "This is the third slide of the carousel"
    },
    {
        url: "https://picsum.photos/1760/652?random=4",
        title: "Slide 4",
        description: "This is the fourth slide of the carousel"
    },
    {
        url: "https://picsum.photos/1760/652?random=5",
        title: "Slide 5",
        description: "This is the fifth slide of the carousel"
    }
];

export default function HomePage() {
    return (
        <main className="m-auto px-10">
            <div className="w-full flex flex-col items-center text-center gap-2 my-4">
                <h1 className="font-anton text-9xl w-full">EXPLORA</h1>
                <p className="text-3xl">Tu brújula viajera</p>
            </div>
            <section className="w-full items-center text-center my-4">
                <h2 className="text-3xl text-center font-bold">
                    PLANEA TUS VIAJES A TU RITMO, DONDE Y CUANDO QUIERAS
                </h2>
                <p className="text-2xl">
                    Encuentra toda la información que necesites para planear tu viaje, desde vuelos a los mejores lugares para visitar, los mejores hoteles y restaurantes, todo en la palma de tu mano.
                </p>
            </section>
            <section className="w-full flex">
                <div className="w-1/2 flex items-center justify-center">
                    <ImageSlider slides={slides} />
                </div>
                <div className="w-1/2 m-auto">
                    <p className="text-2xl text-center p-10">
                        {/* Descripcion de la seccion de Información sobre vuelos */}
                        Informate sobre los vuelos más baratos, las mejores aerolíneas, promociones y descuentos, y todo lo que necesitas saber para planear tu viaje a los mejores destinos al rededor del mundo.
                    </p>
                </div>
            </section>
            <section className="my-4">
                <h2 className="text-3xl text-center font-bold">
                    HOSPEDATE EN LOS MEJORES HOTELES DE LA ZONA
                </h2>
                <p className="text-2xl text-center">
                    Encuentra los mejores hoteles y hospedajes en los destinos más populares, con las mejores vistas y comodidades para que disfrutes de tu estancia al máximo.
                </p>
                <div className="flex">
                    <InfoCard card={slides[0]} />
                    <InfoCard card={slides[1]} />
                    <InfoCard card={slides[2]} />
                    <InfoCard card={slides[3]} />
                </div>
            </section>
            <section className="py-4">
                <h2 className="text-3xl text-center font-bold">
                    DISFRUTA DE LA MEJOR COMIDA LOCAL E INTERNACIONAL
                </h2>
                <p className="text-2xl text-center">
                    Conoce los mejores restaurantes y lugares para disfrutar de la mejor comida local e internacional, con los mejores chefs y los platillos más deliciosos que puedas imaginar.
                </p>
            </section>
        </main>
    )
}