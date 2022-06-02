import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    const [service]=useServiceDetail(serviceId)

    // const [service,setService]=useState({});
    // useEffect(()=>{
    //     const url=`http://localhost:5000/service/${serviceId}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])
    return (
        <div className='mt-5'>
            <h2>Here is Our service Detail</h2>
            <p>service id:{serviceId}</p>
            <p>SERVICE Name:: {service.name}</p>
           <div className='text-center'>
                <Link to={`/checkout/${serviceId}`} > 
                    <button className='btn btn-primary '>Procced Checkout</button>
                </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;