import React from 'react';

import './styles.css';

const Input = ({ label, type, name }) => {
  return (
    <div className='wrapper'>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      <input className='input' type={type} id={name} name={name} />
      <p className='error'>Error</p>
    </div>
  );
};

export default Input;
