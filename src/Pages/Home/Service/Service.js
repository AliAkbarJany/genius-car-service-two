import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,picture,price,description}=service
    const navigate=useNavigate()
    const navigateToSeviceDetail=id=>{
        navigate(`/service/${id}`) 
        // navigate("/service/" + id)
    }
    return (
        <div>
            
            <div className="service-container">

                <img className='w-100' src={picture} alt="" />
                <h2>{name}</h2>
                <h3>Price: <small>{price}</small></h3>
                <p>{description}</p>
                <button onClick={()=>navigateToSeviceDetail(id)} className='btn btn-primary'>Book:{name}</button>

            </div>
            
            
        </div>
    );
};

export default Service;