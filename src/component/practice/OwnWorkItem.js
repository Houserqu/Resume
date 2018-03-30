import React, { Component } from 'react';

const ProductionItem = ({data}) => {
  const {title, time, describe, link} = data;
  return (
    <div className='list__item'>
      <div className="item__main">
        <div className="title">
          {title}
          {
            time ? <span className="time">{time}</span> : null
          }
          {
            link ? <i className="iconfont icon-ai-link"></i> : null
          }
        </div>
        <p className="describe">
            {describe}
        </p>
      </div>
    </div>
  );
}

export default ProductionItem;