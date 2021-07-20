import React from 'react'
import FirstHoc from './FirstHoc'
import SecondHoc from './SecondHoc'
export default function index() {
    return (
        <div>
            <FirstHoc firstHoc='1sthoc'></FirstHoc>
            <SecondHoc  second='2ndhoc'></SecondHoc>
        </div>
    )
}
