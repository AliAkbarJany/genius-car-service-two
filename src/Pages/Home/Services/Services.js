import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
// import car1 from '../../../images/car1.png'

// const services=[
//     {id:1, name:'first model car', price:100, img: car1}
// ]

const Services = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="services" className='services-header'>
            <div>
                {/* <h2>Services: <img src={car1} alt="" /></h2> */}
                <h2 className='services-title'> Our Services</h2>

                <div className="services-container">
                    {
                        services.map(service=><Service key={service.id} 
                            service={service}
                        >
                        </Service>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Services;