export default function InfoCard({ card }) {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 shadow-md shadow-gray-400">
                <a href="#">
                    <img
                        src={card.url}
                        className="rounded-t-lg"
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">{card.title}</h5>
                    <p className="mb-4 text-base">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    )
}