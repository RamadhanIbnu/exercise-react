import React, { useState} from 'react';

const Answer1 = () =>{
    
    const [counter, setCounter] = useState(0)

    const decrement = () => {
        if(counter <= 0){
            setCounter(counter)
        }
            else{
                setCounter(counter-1)
            }
    }

    const increament = () =>{
        setCounter(counter+1)
    }

    return (
        <div>
        <h1 style={{ color: "red" }}>Counter Function</h1>
        <button onClick={decrement}>-</button>
        <h1 style={{ display: "inline" }}>{counter}</h1>
        <button onClick={increament}>+</button>
        <hr/>
        </div>
    );
}

export default Answer1;