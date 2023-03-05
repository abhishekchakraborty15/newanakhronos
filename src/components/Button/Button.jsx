import React from 'react';

import './Button.scss';

const Button = ({ className, type, onClick, text, iconPos, icon }) => {
  return (
    <button className={`btn btn--${type} ${className}`} onClick={onClick}>
      {iconPos === 'left' && <span className="btn__icon">{icon}</span>}
      {text && <span className="btn__text">{text}</span>}
      {iconPos === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
