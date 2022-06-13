import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices]=useServices()

    const handleDelete=id=>{
        const  proceed=window.confirm('Are You sure To Delete the service')
        if(proceed){
            const url=`https://lit-stream-42408.herokuapp.com/service/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=services.filter(service=>service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div className='mt-5'>
            <h2>Manage your Services</h2>
            {
                services.map(service=><div key={service._id}>
                    {service.name}
                    <button onClick={()=>handleDelete(service._id)}>X</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;