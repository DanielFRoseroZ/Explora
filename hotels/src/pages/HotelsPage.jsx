import HotelInfoCard from "../components/HotelInfoCard";
import SearchTool from "../components/SearchTool";

export default function HotelsPage({ search, setSearch }) {
    return (
        <main className="bg-[#47466D]">
            <section className="py-40 px-80 flex flex-col gap-2">
                <h1 className="text-white font-bold text-5xl">Encuentra la mejor instancia para tu viaje</h1>
                <p className="text-white text-2xl ">Busca los mejores hoteles en las ciudad que quieres visitar</p>
                <div>
                    <SearchTool search={search} setSearch={setSearch}/>
                </div>
            </section>
        </main>
    );
}