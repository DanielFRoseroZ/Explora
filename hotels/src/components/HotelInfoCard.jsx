export default function HotelInfoCard ({ hotel }) {
    return (
        <div className="bg-white w-[400px] rounded-3xl shadow-gray-400 shadow-lg p-5 h-[190px] hover:scale-105 hover:cursor-pointer">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="w-full text-black font-bold text-xl">{hotel.hotelname}</h1>
                    <p>{hotel.city}</p>
                </div>
                <div className="bg-orange-500 flex items-center justify-center rounded-3xl py-3 px-2 text-white font-bold">
                    <p>{hotel.stars} / 5</p>
                </div>
            </div>
            <div className="flex justify-between font-semibold text-black">
                <p>{hotel.address}</p>
                <p>${hotel.price}</p>
            </div>
            <div className="h-[75px] overflow-y-auto my-2 text-black">
                <p>{hotel.description}</p>
            </div>
        </div>
    )
}