import React from 'react';

const Experienceitem = ({data}) => {
  const {title, start_time, end_time, post, department, logo} = data;
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
          {post}
        </div>
        <div className="responsibility">
          {department}
        </div>
      </div>
    </div>
  );
}

export default Experienceitem;