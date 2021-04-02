import React from 'react';
import Button from '../Button/Button';
import './styles.css';

const PortfolioItem = ({ title, description, imgSource, mockupType, numItems, link }) => (
    <div className='portfolio-item w-50 d-flex align-items-center text-center flex-column my-5 p-4'>
    <div className='section-heading-text-container w-75 d-flex flex-column align-items-center text-center'>
        <h3 className='section-header'>
            {title}
        </h3>

        <h6 className='section-sub-header py-3'>
          {description}
        </h6>
    </div>

    {
        numItems == 1 ?
        <div style={{width: '100%', height: '100%'}}>
        <img src={imgSource[0]} alt='portfolio-item' className={`${mockupType == 'phone' ? 'w-50 h-25' : 'w-100 h-25'} `} />
    </div>
    :
    <div style={{width: '100%', height: '100%'}}>
    <img src={imgSource[0]} alt='portfolio-item' className={`${mockupType == 'phone' ? 'w-50 h-25' : 'w-100 h-25'} `} />
</div>
    }

   

    <Button onClick={() => window.location.replace(link)}>
        VIEW CODE
    </Button>
</div>
)

export default PortfolioItem;