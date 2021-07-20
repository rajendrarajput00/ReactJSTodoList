import React, { useState } from 'react';
import Wrapper from './Wrapper'

 function SecondHoc(props) {
    return (
        <div>
            {props.value}
            <button onClick={()=>props.EnterMe()}>on click me</button>
        </div>
    )
}
export default Wrapper(SecondHoc);