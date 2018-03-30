import React, { Component } from 'react';

const ProductionItem = ({data}) => {
  const {title, start_time, end_time, describe} = data;
  return (
    <div className='award__item'>
      <div className="awarditem__main">
        <div className="title">
          {title}  <span className="time">{start_time} - {end_time}</span>
        </div>
        <p className="describe">
            {describe}
        </p>
      </div>
    </div>
  );
}

export default ProductionItem;