import React from 'react';
import Button from '../Button/Button';
import './styles.css';

const PortfolioItem = ({ imgSource, mockupType, numItems }) => (
    <div className='portfolio-item w-50 d-flex align-items-center text-center flex-column my-5'>
    <div className='section-heading-text-container w-75 d-flex flex-column align-items-center text-center'>
        <h3 className='section-header'>
            Social Networking App
        </h3>

        <h6 className='section-sub-header py-3'>
          This is a social networking and content management app for personal trainers and people looking to find personal trainers.
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

   

    <Button>
        VIEW CODE
    </Button>
</div>
)

export default PortfolioItem;