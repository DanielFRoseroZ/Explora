export default function SearchTool ({ search, setSearch }) {
    const handleChange = (e) => {
        if(e.target.name !== 'fecha') {
            setSearch({
                ...search,
                [e.target.name]: e.target.value
            });
        } else {
            const dateString = e.target.value + 'T00:00:00';
            const date = new Date(dateString)
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();

            if (date.getDate() == currentDay && date.getMonth() + 1 == currentMonth && date.getFullYear() == currentYear) {
                setSearch({
                    ...search,
                    [e.target.name]: date
                })
            } else if (date < currentDate) {
                alert('La fecha no puede ser menor a la actual');
                setSearch({
                    ...search,
                    [e.target.name]: currentDate
                })
            } else {
                setSearch({
                    ...search,
                    [e.target.name]: date
                });
            }
        }
    }

    return(
        <main className="bg-[#47466D] rounded-full w-[845px] py-5 px-20 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold"> Buscar vuelos </h1>
            </div>
            <div className="w-full h-[2px] bg-white my-3" />
            <form 
                className="flex gap-4"
            >
                <div className="flex flex-col">
                    <label className="text-lg mb-2">Origen</label>
                    <input 
                        type="text" 
                        id="origen" 
                        name="origen" 
                        placeholder="¿Desde donde viajas?"
                        onChange={handleChange}
                        className="py-1 px-2 bg-white rounded-xl text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg mb-2">Destino</label>
                    <input 
                        type="text" 
                        id="destino" 
                        name="destino" 
                        placeholder="¿Hacia donde viajas?"
                        onChange={handleChange}
                        className="py-1 px-2 bg-white rounded-xl text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg mb-2">Fecha</label>
                    <input 
                        type="date" 
                        id="fecha" 
                        name="fecha"
                        onChange={handleChange} 
                        className="py-1 px-2 rounded-xl bg-gray-500 text-white"
                    />
                </div>
                <button type="submit" className="bg-orange-500 text-white font-bold">Buscar</button>
            </form>
        </main>
    )
}