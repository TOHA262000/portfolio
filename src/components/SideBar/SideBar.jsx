import React from 'react';
import "./sideBar.scss";
const SideBar = ({menuitems,setMenuitems}) => {
    return (
        <div className={'sidebar ' + (menuitems && 'active')}>
            <ul>
                <li onClick={()=>setMenuitems(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuitems(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuitems(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuitems(false)}>
                    <a href="#testimonial">Testimonials</a>
                </li>
                <li onClick={()=>setMenuitems(false)}>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>

        </div>
    );
};

export default SideBar;