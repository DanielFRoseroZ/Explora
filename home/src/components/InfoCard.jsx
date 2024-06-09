export default function InfoCard({ card }) {
    return (
        <div className="flex flex-col w-full h-full hover:cursor-pointer hover:scale-105 transition-all duration-200">
            <div className="mx-3 mt-6 flex flex-col self-start  rounded-lg bg-white text-surface shadow-secondary-1 shadow-md hover:shadow-xl shadow-gray-300">
                <a href="">
                    <img
                        src={card.url}
                        className="rounded-t-lg h-[120px] w-full object-cover"
                    />
                </a>
                <div className="p-6 text-black h-[150px] overflow-y-auto">
                    <h5 className="mb-2 text-xl 2xl:text-2xl font-medium leading-tight">{card.title}</h5>
                    <p className="text-base 2xl:text-xl">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    )
}