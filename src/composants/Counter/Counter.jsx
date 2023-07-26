import React from 'react';
import './Counter.scss';

export const Counter = ({name,value, onIncrement }) => {

  return (
    <div className="Counter" onClick={onIncrement}>      
      <h2 className="Counter__title">{name}</h2>
      <p className="Counter__value">{value}</p>
    </div>
  );
};
