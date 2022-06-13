import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate'

const Order = () => {
    const [user]=useAuthState(auth)
    const [orders,setOrders]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        const getOrders=async()=>{
            const email=user.email;
            const url=`https://lit-stream-42408.herokuapp.com/order?email=${email}`
            console.log(url)
    
            try{
                /*
                const{data}=await axios.get(url,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
                }) 
                */

                const {data}=await axiosPrivate.get(url);
                // const response = await axios.get(url)
                // console.log(response)
                setOrders(data);
            }
            catch(error){
                console.log(error.message)
                if(error.response.status===401|| error.response.status===403){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
    },[user])

   /* useEffect(()=>{
        fetch('https://lit-stream-42408.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))

    },[])*/

    return (
        <div className='mt-5'>
            <h2> Your orders::{orders.length}</h2>
        </div>
    );
};

export default Order;