import React from 'react';
import './styles.css';

import Button from '../Button/Button';

import { Paper } from '@material-ui/core';

const ServiceOfferings = () => (
    <div className='service-offerings h-100 container d-flex flex-column align-items-center justify-content-evenly'>


        <div className='w-75 offering d-flex flex-column align-items-start justify-content-evenly w-25 text-start'>
           <p>
           Creating a website for your next business? I will design and write code that leaves a lasting impression for your project.
           </p>
        
            <Button outlined onClick={() => window.location.replace('https://calendly.com/hamptonelijahj/develop-project-discussion')}>
                Schedule a chat with Calendly
            </Button>
        </div>

        
    </div>
)

export default ServiceOfferings;