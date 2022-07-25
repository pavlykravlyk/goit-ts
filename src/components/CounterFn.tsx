import { useState } from "react"

interface CounterProps {
    initialValue?: number
    counterStep?: number
}

const Counter = ( {initialValue = 0, counterStep = 5}: CounterProps) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount(count + counterStep)
    }

    const handleDecrement = () => {
        setCount(count - counterStep)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}


export default Counter