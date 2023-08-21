import React, { useEffect, useRef } from 'react';
import { init } from 'ityped'
import './intro.scss';
const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ['Designer','Developer','Content Creator']
        })

    }, []);
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src='assets/me.png' alt="" />
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Md. Toha</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>

        </div>
    );
};

export default Intro;