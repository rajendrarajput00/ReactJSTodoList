import React from 'react'
import { useState, useRef, useEffect, useCallback,useMemo } from 'react';

export default function CallBacks() {

    const [text, updateText] = useState('');
    const textRef = useRef();
  /*   useEffect(() => {
        console.log('vvvv');
        textRef.current = text; // Write it to the ref
    }); */

  /*   const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // Read it from the ref
        alert(currentText);
    }, [textRef]); */

    const handleSubmit = () =>{
        console.log('SS',textRef.current.value);
        const currentText = textRef.current; // Read it from the ref
        textRef.current.focus();
       alert(textRef.current.value); 
    }
    const fn = () => 42 // assuming expensive calculation here
    const memoFn = useCallback(fn, [1]) // (1)
    const memoFnReturn = useMemo(fn, [1])

    console.log('qqq',memoFn);
    console.log('22222',memoFnReturn);

    return (
        <div>
            <input ref={textRef} /*  value={text} onChange={e => updateText(e.target.value)} */ />
          <button onClick={handleSubmit}>dddddd</button>
        </div>
    )
}
