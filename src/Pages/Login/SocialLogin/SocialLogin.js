import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();


    let errorElement;
    if (error || error1) {   
        errorElement =  <div>
                    <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
                </div>
        
      }     
     
    if(user || user1){
        navigate('/home')
    }  
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'2px'}} className='bg-success w-50'></div>
                <p className='px-2'>OR</p>
                <div style={{height:'2px'}} className='bg-success w-50'></div>
            </div>

            {/* showing Error message */}
            {errorElement}

            <div className='border rounded border-danger border-2'>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 mx-auto d-block fw-bolder'>Goole Sign In</button>
            </div>
            <div className='my-2'>
                <button className='btn btn-danger w-50 mx-auto d-block fw-bolder'>Facebook Sign In</button>
            </div>
            <div className='border rounded border-danger border-2'>
                <button onClick={()=>signInWithGithub()} className='btn btn-success w-50 mx-auto d-block fw-bolder'>Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;