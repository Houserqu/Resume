import React from 'react';

const Experienceitem = ({data}) => {
  return (
    <div className='experience__item'>
      {data.title}
    </div>
  );
}

export default Experienceitem;