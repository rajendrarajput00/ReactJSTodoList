import React from 'react'
import { useState } from 'react';
import Wrapper from './Wrapper'
 function FirstHoc(props) {
    return (
        <div>
            {props.value}
            <button onMouseEnter={()=>props.EnterMe()}>on enter me</button>
        </div>
    )
}

export default Wrapper(FirstHoc);
