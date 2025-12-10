import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter-card">
            <h3>Simple Counter</h3>
            <p>Current count: <strong>{count}</strong></p>

            <button onClick={increment}>Increment ➕</button>
            <button onClick={decrement}>Decrement ➖</button>
        </div>
    );
};

export default Counter;