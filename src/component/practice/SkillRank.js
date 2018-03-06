import React from 'react';

const SkillRanke = ({ title, rank}) => {
  return (
    <div className='skillrank'>
      <h6>{title}</h6>
      <div className='rank'>
        <div className='inline' style={{ width: rank}} />
      </div>
    </div>
  );
}

export default SkillRanke;