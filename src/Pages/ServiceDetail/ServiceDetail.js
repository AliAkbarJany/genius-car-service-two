import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div className='mt-5'>
            <h2>Here is Our service Detail</h2>
            <p>service id:{serviceId}</p>
        </div>
    );
};

export default ServiceDetail;