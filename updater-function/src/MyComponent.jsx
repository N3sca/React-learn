import React, {useState} from 'react'

function MyComponent(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevcount => prevcount + 1);
    }

    const decrement = () => {
        setCount(prevcount => prevcount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Incremnet</button>
        </div>
    );
}
export default MyComponent