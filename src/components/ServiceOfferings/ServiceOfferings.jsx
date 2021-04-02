import React from 'react';
import './styles.css';

import Button from '../Button/Button';

const ServiceOfferings = () => (
    <div className='service-offerings container d-flex flex-row align-items-center justify-content-evenly'>
        <div className='h-100 offering d-flex flex-column align-items-center justify-content-evenly w-25 text-center'>
            I am only looking for a developer or design for my next project.

            <Button onClick={() => window.location.replace('https://calendly.com/hamptonelijahj/developmentanduiuxprojectdiscussion')}>
            Schedule a chat with Calendly
            </Button>
        </div>

        <div className='h-100 offering d-flex flex-column align-items-center justify-content-evenly w-25 text-center'>
            Creating a website for your next business?  Changing the world with your software?  I will design and write code that leaves a lasting impression for your project.
        
            <Button onClick={() => window.location.replace('https://calendly.com/hamptonelijahj/develop-project-discussion')}>
                Schedule a chat with Calendly
            </Button>
        </div>

        <div className='h-100 offering d-flex flex-column align-items-center justify-content-evenly w-25 text-center'>
           I am only looking for consulting in regards to my next project.

            <Button onClick={() => window.location.replace('https://calendly.com/hamptonelijahj/1hour-consultation-project-discussion')}>
            Schedule a chat with Calendly
            </Button>
        </div>
        
    </div>
)

export default ServiceOfferings;