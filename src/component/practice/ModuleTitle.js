import React from 'react';

const ModuleTitle = ({ index, title}) => {
  return (
    <div className='moduletitle'>
      <span className='index'>{index}</span>
      <span className='title'>{title}</span>
    </div>
  );
}

export default ModuleTitle;