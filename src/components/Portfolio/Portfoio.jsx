import React from 'react';
import './portfolio.scss'
const Protfoio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
                <div className="item">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/260/247/original/illustration-graphic-cartoon-character-of-money-saving-of-bank-free-vector.jpg" alt="" />
                    <h4>Banking App</h4>
                </div>
            </div>
        </div>
    );
};

export default Protfoio;