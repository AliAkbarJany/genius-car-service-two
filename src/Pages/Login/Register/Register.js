import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const[agree,setAgree]=useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const naviagete=useNavigate()

    //   if(user){
    //     naviagete('/home')
    //   }

      

        
    const handleRegister= async(event)=>{
        event.preventDefault();
        // console.log(event.target) 
        // console.log(event.target.name)
        // console.log(event.target.name.value)
        // console.log(event.target.email.value)
        // console.log(event.target.password.value)

        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // console.log(name,email,password)

        // const agree=event.target.terms.checked;
         await createUserWithEmailAndPassword(email, password);
        // if(agree){
        //     createUserWithEmailAndPassword(email, password);
        // }    
        await updateProfile({ displayName:name });
          console.log('Updated profile');
          naviagete('/home')
    
    }
    let errorElement;
        if(error){
            errorElement= <p className='text-danger mt-2'>Error:: {error.message}</p>
        }
    
    return (
        <div className='register-form mt-5 '>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input  type="text" name="name" id="" placeholder='Name' required/>
                <br />
                <input  type="email" name="email" id="" placeholder='Enter Your Email' required/>
                <br />
                <input  type="password" name="password" id="" placeholder='Password' required/>
                <br />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" className='me- 2'/>
                <label htmlFor="terms">Accept Terms & Conditaions</label>
                
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto my-4' type="submit" value="REGISTER" />
            </form>
            {errorElement}
            <p>Have An Account??? <Link to='/login' className='fw-bolder text-success'>PLEASE LOGIN</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;