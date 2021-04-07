import React from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './styles.css';

const SocialStick = () => (
    <div className='w-auto social-stick d-flex flex-column align-items-center justify-content-center'>
         <AiOutlineGithub size={22} color='white' className='my-1' />
         <AiOutlineTwitter size={22} color='white' className='my-1' />
         <div className='divider' />
    </div>
)

export default SocialStick;