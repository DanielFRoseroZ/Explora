import { useState, useEffect } from "react";

export default function SearchTool({ search, setSearch }) {

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="rounded-xl bg-transparent text-black w-[400px]">
            <form className="flex rounded-l-xl justify-between mt-5">
                <div className="w-full">
                    <input 
                        type="text" 
                        placeholder="¿A dónde planeas ir?" 
                        name="search"
                        onChange={handleChange}
                        className="w-full p-4 rounded-l-xl" 
                    />
                </div>
                <div className="rounded-r-xl">
                    <button className="p-4 bg-orange-500 text-white font-bold">Buscar</button>
                </div>
            </form>
        </div>
    );
}