import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useServiceDetail from '../../../hooks/useServiceDetail';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const [service] = useServiceDetail(serviceId)
    // const [service,setService]=useState({});
    // useEffect(()=>{
    //     const url=`https://lit-stream-42408.herokuapp.com/service/${serviceId}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[])

    /*const [user,setUser]=useState({
        name:'akbar',
        email:'akbar@gmail.com',
        address:'taj mojaol road',
        phone:'026666666'
    })

    const handleAddressChange =event=>{
        console.log(event.target.value)
        const {address,...rest}=user;
        const newAddress=event.target.value
        const newUser={address:newAddress,...rest}
        console.log(newUser)
        setUser(newUser)
    }*/
    const [user] = useAuthState(auth);
    if(user){
        console.log('user',user)
    }

    const handleOrderPlace=event=>{
        event.preventDefault();
        const order={
            email:user.email,
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value
        }
        axios.post('https://lit-stream-42408.herokuapp.com/order',order)
        .then(response=>{
            console.log(response);
            const {data}=response;
            if(data.insertedId){
                toast('your order is biiked!!!')
            }
        })
    }
    
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please checkout</h2>
            {/* <p>service id:{serviceId}</p> className='w-100 mb-2'
            <p>SERVICE Name:: {service.name}</p> */}
            <form onSubmit={handleOrderPlace}>
                <input className='w-100 mb-2'  type="text" value={user?.displayName} name='name' placeholder='Name' required /><br />
                <input className='w-100 mb-2'  type="email" value={user.email} name='email ' placeholder='Email' required  /><br />
                <input className='w-100 mb-2'  type="text" value={service.name} name='service' placeholder='Service' /><br />
                <input className='w-100 mb-2'  type="text" value={service.price}  name='price' placeholder='Price'/><br />
                {/* <input className='w-100 mb-2'  type="text" onChange={handleAddressChange} value={user.address} name='address' placeholder='Address' /><br /> */}
                <input className='w-100 mb-2'  type="text" autoComplete='off'  name='address' placeholder='Address'  /><br />
                <input className='w-100 mb-2'  type="number"  name='phone' placeholder='Phone Number' /><br />
                <input type="submit" value="Order Place" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;