import React from 'react';
import './contact.scss'
const Contact = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h1>Contact.</h1>
                <form onSubmit={handleSubmit} action="">
                    
                    <input  type="email" placeholder='Email' />
                    <textarea placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <input className='sendBtn' type="submit" value="Send" />
                </form>
            </div>
            
        </div>
    );
};

export default Contact;