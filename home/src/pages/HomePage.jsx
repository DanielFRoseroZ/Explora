import ImageSlider from "../components/ImageSlider"
import InfoCard from "../components/InfoCard";
import ResCommentCard from "../components/ResCommnentCard";

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
        <main className="py-[5rem] flex flex-col gap-10">
            <section className="w-full flex flex-col gap-5 items-center text-center mb-4 px-32">
                <h2 className="text-3xl text-center font-bold 2xl:text-4xl">
                    PLANEA TUS VIAJES A TU RITMO, DONDE Y CUANDO QUIERAS
                </h2>
                <p className="text-2xl 2xl:text-3xl">
                    Encuentra toda la información que necesites para planear tu viaje, desde vuelos a los mejores lugares para visitar, los mejores hoteles y restaurantes, todo en la palma de tu mano.
                </p>
            </section>
            <section className="w-full flex my-10 px-32">
                <div className="w-2/3 flex items-center justify-center">
                    <ImageSlider slides={slides} />
                </div>
                <div className="w-1/2 m-auto">
                    <p className="text-2xl text-center p-10 2xl:text-3xl">
                        {/* Descripcion de la seccion de Información sobre vuelos */}
                        Informate sobre los vuelos más baratos, las mejores aerolíneas, promociones y descuentos, y todo lo que necesitas saber para planear tu viaje a los mejores destinos al rededor del mundo.
                    </p>
                </div>
            </section>
            <section className="my-10 flex flex-col gap-10 bg-white px-32 py-16 text-black">
                <h2 className="text-3xl text-center font-bold 2xl:text-4xl">
                    HOSPEDATE EN LOS MEJORES HOTELES DE LA ZONA
                </h2>
                <p className="text-2xl text-center 2xl:text-3xl">
                    Encuentra los mejores hoteles y hospedajes en los destinos más populares, con las mejores vistas y comodidades para que disfrutes de tu estancia al máximo.
                </p>
                <div className="flex">
                    <InfoCard card={slides[0]} />
                    <InfoCard card={slides[1]} />
                    <InfoCard card={slides[2]} />
                    <InfoCard card={slides[3]} />
                </div>
            </section>
            <section className="py-4 px-32 flex flex-col gap-10 w-full">
                <h2 className="text-3xl text-center font-bold 2xl:text-4xl">
                    DISFRUTA DE LA MEJOR COMIDA LOCAL E INTERNACIONAL
                </h2>
                <p className="text-2xl text-center 2xl:text-3xl">
                    Conoce los mejores restaurantes y lugares para disfrutar de la mejor comida local e internacional, con los mejores chefs y los platillos más deliciosos que puedas imaginar.
                </p>
                <div className="mx-28 2xl:mx-56">
                    <ResCommentCard comment={slides[0]} direction="right"/>
                    <ResCommentCard comment={slides[1]} direction="left"/>
                    <ResCommentCard comment={slides[2]} direction="right"/>
                    <ResCommentCard comment={slides[3]} direction="left"/>
                </div>
            </section>
        </main>
    )
}