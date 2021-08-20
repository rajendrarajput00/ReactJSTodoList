import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Weather() {

    const [data, setData] = useState({
        main: '',
        name: '',
        location: '',
        message: ''
    })

    const getData = async (e) => {

        if (e.key === "Enter") {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.location}&appid=61fde809da8aefed902a114a554aa4d8`).then((response) => {
                setData(preState => (console.log('response', response), {
                    ...preState,
                    main: response.data.main,
                    name: response.data.name,
                    message: response.message

                }))
            }).catch((error) => {
                setData(preState => ({
                    ...preState,
                    message: 'City Not Found'

                }))
                console.log('error', error);
            })
        }



    }


    const updateLocation = (e) => {
        setData(preData => ({
            ...preData,
            location: e.target.value
        }))
    }



    console.log('data', data);

    return (
        <div style={{ textAlign: 'center' }}>
            <h4>Enter City Name To Check Weather</h4>
            {data.message &&

                <h5 style={{color:'red'}}>{data.message}</h5>
            }
            <input
                type='text'
                onChange={(e) => updateLocation(e)}
                value={data.location}
                placeholder='Search'
                onKeyPress={(e) => getData(e)}
            ></input>


            {data.name &&
                <div>Name:{data.name}</div>
            }
            {data.main && (
                <div>
                    <div>Humidity:{data.main.humidity}</div>
                    <div>temp:{data.main.temp}</div>
                    <div>temp_max:{data.main.temp_max}</div>
                    <div>temp_min:{data.main.temp_min}</div>
                </div>
            )

            }

        </div>
    )
}
