
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef=useRef('')
    const passRef=useRef('')
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";

    // sign in with(email & password)..('react-firebase-hooks/auth')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    //   FORGET/RESET (email & poassword)..('react-firebase-hooks/auth')
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        //   navigate(from, { replace: true })
      }

      let errorElement;
      if(error){
          errorElement= <p className='text-danger mt-2'>Error:: {error.message}</p>
      }
      

    const handleSubmit=async event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        console.log(email,password);
        await signInWithEmailAndPassword(email, password);
        const {data}=await axios.post('https://lit-stream-42408.herokuapp.com/getToken',{email})
        console.log(data)
        localStorage.setItem('accessToken',data.accessToken)

    }


    // forget/REset password...1
    const resetPassword= async()=>{
        const email=emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address')
        }
        
    }

    // forgrt/reset password...2 er jonno aikahne globaly (email) declare kora hoise
    const email=emailRef.current.value;
    
    const navigateRegister=event=>{
        navigate('/register');
    }
    
    return (
        <div className='login-container mt-5 w-50 mx-auto'>
            
            <h2 className='text-center text-primary mt-5'>please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                {errorElement}
                <p>Are You New Here?? <span  onClick={navigateRegister} className='text-danger fw-bolder'>PLEASE REGISTER</span> </p>
                <p>Are You New Here?? <Link to='/register'  className='text-danger fw-bolder'>PLEASE REGISTER</Link> </p>

                /* reset password...1 */
                <p className='fw-bolder'>FORGET PASSWORD???? <button onClick={resetPassword}   className='text-danger btn btn-link'>RESET PASSWORD</button> </p>
                // reset password...2
                <p className='fw-bolder'>FORGET PASSWORD???? 
                    {/* <Link to='/register'> */}
                        <button className='btn btn-primary' onClick={async () => {
                            // await sendPasswordResetEmail(email);
                            // alert('Sent email');
                            if(email){
                                await sendPasswordResetEmail(email);
                                toast('Sent email');
                            }
                            else{
                                toast('please enter your email address')
                            }
                        }}>reset password
                        </button> 
                    {/* </Link> */}
                </p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;