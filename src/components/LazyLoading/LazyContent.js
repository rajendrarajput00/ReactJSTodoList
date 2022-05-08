import React from 'react'
import axios from 'axios';

export default function LazyContent() {

    const uploadFile = (e) =>{ 
        console.log('ff',e.target.files);
        const files = e.target.files;
        const formData = new FormData();
        formData.append('img',files[0])

       /*  axios().post("https://run.mocky.io/v3/c3b351b9-8609-4acf-843a-cb279701afd9",formData).then(res=>{
            console.log('res',res);
        }) */

        console.log('fomrData',formData);
    }
    return (
        <div>
            <input multiple type='file' onChange={(e)=>uploadFile(e)}></input>
        </div>
    )
}
