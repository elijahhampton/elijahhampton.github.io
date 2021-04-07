import React from 'react';
import { AiFillCalendar, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import './styles.css';

const ICON_SIZE = 35;

const Footer = () => (
    <div className='footer d-flex align-items-center justify-content-center p-5'>
        <div className='d-flex align-items-center justify-content-between w-100'>
            <div className='contact-information'>
                <h4 id='email' className='py-4'>
                    ejh0017@gmail.com
                </h4>

                <div className='social-icons'>
                <AiFillGithub className='social-icon' size={ICON_SIZE} />
                <AiFillTwitterCircle className='social-icon' size={ICON_SIZE} />
                <AiFillLinkedin className='social-icon' size={ICON_SIZE}/>
                <AiFillCalendar className='social-icon' size={ICON_SIZE} />
                </div>
         
            </div>

            <div>
            <a href='https://ko-fi.com/I2I547JXE' target='_blank'><img height={36} style={{border: 0, height: 36}} src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
            </div>
        </div>
    </div>
)

export default Footer;