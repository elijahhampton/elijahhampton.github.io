import React from 'react';
import './styles.css';

const Button = ({ children, onClick, inverted, outlined, text }) => (
    <button className={`${inverted ? 'inverted-button' : 'button'} ${outlined ? 'outlined-button' : ''} ${text ? 'text-button' : ''} ` } type='button' onClick={onClick}>
        {children}
    </button>
)

export default Button;