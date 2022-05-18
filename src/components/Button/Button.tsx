import React from 'react';
import './Button.scss';

const Button = ({color, children}:any) => {
  return (
  <button className={color}>
    {children}
  </button>
    )
}

export default Button