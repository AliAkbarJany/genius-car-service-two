
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')
    const passRef=useRef('')

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        console.log(email,password);

    }
    const navigate=useNavigate();
    const navigateRegister=event=>{
        navigate('/register');
    }
    return (
        <div className='login-container mt-5 w-50 mx-auto'>
            <h2 className='text-center text-primary mt-5'>please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Are You New Here?? <span  onClick={navigateRegister} className='text-danger fw-bolder'>PLEASE REGISTER</span> </p>
                <p>Are You New Here?? <Link to='/register'  className='text-danger fw-bolder'>PLEASE REGISTER</Link> </p>
            </Form>
        </div>
    );
};

export default Login;