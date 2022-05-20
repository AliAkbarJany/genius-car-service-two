import React from 'react';
import './Footer.css'
const Footer = () => {
    const year=new Date().getFullYear()
    const date=new Date().getDate();
    
    return (
        <div className='footer'>
            
            <p>copyright &copy;Year:{year} Date:{date} all rights reserve</p>
            
        </div>
    );
};

export default Footer;