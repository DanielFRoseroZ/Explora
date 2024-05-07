import ImageSlider from "../components/ImageSlider"

const slides = [
    {
        url: "https://picsum.photos/1760/652?random=1",   
    },
    {
        url: "https://picsum.photos/1760/652?random=2", 
    },
    {
        url: "https://picsum.photos/1760/652?random=3", 
    },
    {
        url: "https://picsum.photos/1760/652?random=4", 
    },
    {
        url: "https://picsum.photos/1760/652?random=5", 
    }
];

export default function HomePage() {
    return (
        <main className="m-auto">
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
            <section className="w-full">
                <ImageSlider slides={slides} />
            </section>
        </main>
    )
}