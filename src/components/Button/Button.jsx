import React from 'react';
import './styles.css';

const Button = ({ children, onClick, inverted }) => (
    <button className={`${inverted ? 'inverted-button' : 'button'}`} type='button' onClick={onClick}>
        {children}
    </button>
)

export default Button;