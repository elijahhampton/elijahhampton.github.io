import { Paper } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import './styles.css';

const PortfolioItem = ({ title, description, imgSource, mockupType, numItems, link }) => (
    <div className='portfolio-item d-flex align-items-center justify-content-evenly text-center flex-column my-5 p-4'>
    <div className='d-flex flex-column justify-content-between align-items-center'>
    <div className='section-heading-text-container w-75 d-flex flex-column align-items-center text-center'>
        <h3 className='section-header'>
            {title}
        </h3>

        <h6 className='section-sub-header py-3'>
          {description}
        </h6>
    </div>

        <Button outlined onClick={() => window.location.replace(link)}>
        VIEW CODE
    </Button>

    </div>


    {
        mockupType == 'phone' ?
        <img src={imgSource[0]} alt='portfolio-item' style={{width: 300, height: 550}} />
        :
        <Paper style={{width: 550, height: 400}}>
        <img src={imgSource[0]} alt='portfolio-item' style={{width: '100%', height: '100%'}} />
        </Paper>
    }


</div>
)

export default PortfolioItem;