import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url=`https://lit-stream-42408.herokuapp.com/service`;
        fetch(url,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };
    return (
        <div className='mt-5 w-50 mx-auto'>
            <h2>please Add A Service</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo URL' type="text" {...register("picture")} />
                <input className='mb-2' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;