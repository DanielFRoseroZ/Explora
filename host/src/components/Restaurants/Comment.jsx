export default function Coment ({ coment }) {
    return (
        <div className="bg-[#47466D] text-white w-[300px] rounded-xl p-5">
            <div className="flex justify-center gap-4 items-center">
                <div className="rounded-full border-4 border-white">
                    <img src="/images/Restaurants/PhUser.png" className="w-10"/>
                </div>
                <h1 className="text-2xl font-bold">{coment.name}</h1>
            </div>
            <div className="w-full h-[2px] bg-white my-3"/>
            <div className="flex flex-col gap-3">
                <p className="font-semibold">
                    {coment.comment}
                </p>
                <p className="font-semibold bg-orange-400 p-2 rounded-xl text-center">{coment.points} / 5</p>
            </div>

        </div>
    )
}