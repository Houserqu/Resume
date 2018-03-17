import React from 'react';

const Connect = ({data}) => {
  return (
    <div className='connect'>
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <span className='connect__label'>{item.label}</span>
              {
                item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default Connect;