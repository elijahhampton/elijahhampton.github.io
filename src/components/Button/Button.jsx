import React from 'react';
import './styles.css';

const Button = ({ children, onClick }) => (
    <button className='button' type='button' onClick={onClick}>
        {children}
    </button>
)

export default Button;