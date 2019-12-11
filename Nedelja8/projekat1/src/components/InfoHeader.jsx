import React, { useState, useEffect } from 'react';
import {getInfo} from '../utility/space-x-service'



export const InfoHeader= (props)=>{

    const [data, setData]=useState([])
    const [displayData,setDisplayData]= useState(data)

    useEffect(()=>{
        getInfo().then(data=>{
            setData(data);
            setDisplayData(data);
        })
    }, [])

    
    return (
    <header>{data.name}{data.founder}{data.founded}</header>
    );
}

