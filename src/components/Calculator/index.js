import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './Calculator.css'
export default function Calculator() {
    const [result, setResult] = useState("")

    const handalClick = (e) => {
        console.log('eee', e);
        setResult(result.concat(e.target.value))
    }

    const onClear = () => {
        setResult("");
    }
    const onBackSpace = () => {
        setResult(result.slice(0, -1));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error")
        }

    }

    console.log('result', result);
    return (
        <div>
            <div className='container'>
                <Form>
                    <input style={{textAlign:'right'}} type='text' value={result}></input>
                </Form>
                <div className='keypad'>
                    <button onClick={(event) => onClear(event)} id='clear'>Clear</button>
                    <button onClick={(e) => onBackSpace(e)} id='backspace'>C</button>
                    <button value='/' onClick={(e) => handalClick(e)}>&divide;</button>
                    <button value='7' onClick={(e) => handalClick(e)}>7</button>
                    <button value='8' onClick={(e) => handalClick(e)}>8</button>
                    <button value='9' onClick={(e) => handalClick(e)}>9</button>
                    <button value='*' onClick={(e) => handalClick(e)}>&times;</button>
                    <button value='4' onClick={(e) => handalClick(e)}>4</button>
                    <button value='5' onClick={(e) => handalClick(e)}>5</button>
                    <button value='6' onClick={(e) => handalClick(e)}>6</button>
                    <button value='-' onClick={(e) => handalClick(e)}>&ndash;</button>
                    <button value='1' onClick={(e) => handalClick(e)}>1</button>
                    <button value='2' onClick={(e) => handalClick(e)}>2</button>
                    <button value='3' onClick={(e) => handalClick(e)}>3</button>
                    <button value='+' onClick={(e) => handalClick(e)}>+</button>
                    <button value='0' onClick={(e) => handalClick(e)}>0</button>
                    <button value='.' onClick={(e) => handalClick(e)}>.</button>
                    <button onClick={() => calculate()} id='result'>=</button>


                </div>

            </div>
        </div>
    )
}
