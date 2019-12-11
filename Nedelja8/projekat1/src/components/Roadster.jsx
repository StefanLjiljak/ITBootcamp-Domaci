import React, { useState, useEffect } from 'react';
import {getRoadster} from '../utility/space-x-service'


export function Roadster(props){
    const [data, setData]=useState([])
    const [displayData,setDisplayData]= useState(data)

    useEffect(()=>{
        getRoadster().then(data=>{
            setData(data);
            setDisplayData(data);
        })
    }, [])

    
    return (
        <footer>
            {data.name}{data.norad_id}{data.orbit_type}
        </footer>
    );
}
