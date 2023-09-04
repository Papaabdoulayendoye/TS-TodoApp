import { useState, useRef, ReactElement, useEffect, ReactNode } from 'react'

type CounterProps = {
    setCount : React.Dispatch<React.SetStateAction<number>>,
    children : ReactNode,
}

// const Counter : FC<CounterProps> = ({setCount, children }) => 
const Counter = ({setCount, children } : CounterProps) => {
    // const [count, setCount] = useState<number>(0)
    const myBtn = useRef<HTMLButtonElement>(null)
    const myInput = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        console.log('====================================');
        console.log("Increment Button has been clicked! ✔");
        console.log('====================================');
    },[children])
    
    
    return (
        <div>
            <h1>Counter App</h1>
            <h3>{ children }</h3>
            <input type="text"  ref={myInput} />
            <button ref={myBtn}  onClick={() => setCount(prev => prev + 1)}>Increment + </button>
            <button  onClick={() => setCount(prev => prev - 1)}>Decrement - </button>
        </div>
    )
}

export default Counter
