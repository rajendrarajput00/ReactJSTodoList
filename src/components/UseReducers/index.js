import React, { useReducer } from 'react'



function init() {
    return { count: 0 };
}



function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

export default function Counter() {
    let initialCount = 0;
    const [state, dispatch] = useReducer(reducer, initialCount,init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}
