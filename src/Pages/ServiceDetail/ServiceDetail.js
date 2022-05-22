import { Button } from 'bootstrap';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div className='mt-5'>
            <h2>Here is Our service Detail</h2>
            <p>service id:{serviceId}</p>
           <div className='text-center'>
                <Link to='/checkout' > 
                    <button className='btn btn-primary '>Procced Checkout</button>
                </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;