export default function ResCommentCard({ comment, direction }) {
    if (direction === "right") {
        return (
            <div className="flex w-full h-full">
                <div className="mx-3 mt-6 flex rounded-lg">
                    <img
                        src={comment.url}
                        className="rounded-full h-[120px] w-[120px] object-cover"
                    />
                    <div className="p-6 text-white w-full">
                        <h3 className="mb-2 text-3xl 2xl:text-4xl font-medium leading-tight">{comment.title}</h3>
                        <p className="text-xl 2xl:text-xl italic">
                            {comment.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    } else if(direction === "left") {
        return (
            <div className="flex w-full h-full items-end justify-end">
                <div className="mx-3 mt-6 flex rounded-lg">
                    <div className="p-6 text-white text-end">
                        <h3 className="mb-2 text-3xl 2xl:text-4xl font-medium leading-tight">{comment.title}</h3>
                        <p className="text-xl 2xl:text-xl italic">
                            {comment.description}
                        </p>
                    </div>
                    <img
                        src={comment.url}
                        className="rounded-full h-[120px] w-[120px] object-cover"
                    />
                </div>
            </div>
        )
    }
}