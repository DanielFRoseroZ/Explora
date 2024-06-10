export default function RestaurantInfoCard({ restaurant }) {
    return (
        <div className='bg-white rounded-xl flex shadow-xl shadow-gray-400 hover:scale-105 transition-all duration-100'>
            <div
                style={{ backgroundImage: `url(/images/Restaurants/FastFood.jpg)` }}
                className="w-full h-[210px] bg-cover bg-center rounded-l-xl"
            />
            <div className="text-black p-5">
                <h2 className='font-bold text-2xl'>{restaurant.name}</h2>
                <div className='wfull h-[2px] my-2 bg-black' />
                <p>{restaurant.description}</p>
                <br />
                <p className="italic font-semibold">{restaurant.address}</p>
                <p className="italic font-semibold">{restaurant.phone}</p>
            </div>
        </div>
    )
}