import { useState } from 'react'
import useCount from '../../utils/store'

export default function Button() {
    const [count, setCount] = useCount();

    return(
        <div>
            <button onClick={() => setCount((s) => s + 1)} className="bg-purple-400 hover:bg-purple-700 text-white text-2xl font-bold py-2 px-4 rounded">
                Click me: {count}
            </button>
        </div>
    )
}