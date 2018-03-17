import React from 'react';

const Experienceitem = ({data}) => {
  const {title, start_time, end_time, responsibility, logo} = data;
  return (
    <div className='experience__item'>
      <div className="logo">
        <img src={logo} alt={title}/>
      </div>
      <div className="experienceitem__main">
        <div className="title">
          {title}  <span className="time">{start_time} - {end_time}</span>
        </div>
        <div className="responsibility">
          {responsibility}
        </div>
      </div>
    </div>
  );
}

export default Experienceitem;