import React from 'react';
import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Topbar = ({ menuitems, setMenuitems }) => {
    return (
        <div className={'topbar ' + (menuitems && 'active')}>
            <div className='wrapper'>

                <div className="left">
                    <a href="#intro" className='logo'>codeVerse.</a>
                    <div className='email-phone'>
                        <div className='items'>
                            <EmailIcon className='icon' /><span>m.i.toaha14@gmail.com</span>
                        </div>
                        <div className='items'>
                            <PhoneIcon className='icon' /><span>+8801745703347</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div onClick={() => { setMenuitems(!menuitems) }} className="hambarger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Topbar;