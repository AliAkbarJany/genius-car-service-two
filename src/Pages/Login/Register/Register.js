import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const naviagete=useNavigate()

      if(user){
        naviagete('/home')
      }

        
    const handleRegister=event=>{
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
        createUserWithEmailAndPassword(email, password);
        
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
                <input type="submit" value="REGISTER" />
            </form>
            <p>Have An Account??? <Link to='/login' className='fw-bolder text-success'>PLEASE LOGIN</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;