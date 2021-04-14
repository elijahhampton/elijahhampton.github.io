import { Paper } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import './styles.css';

const PortfolioItem = ({ title, description, imgSource, mockupType, numItems, link }) => (
    <div className='w-100 w-md-50 my-5 my-md-1 portfolio-item d-flex align-items-center justify-content-evenly text-center flex-column'>
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
        <img src={imgSource[0]} alt='portfolio-item' className='w-50' style={{height: 300}} />
    }


</div>
)

export default PortfolioItem;