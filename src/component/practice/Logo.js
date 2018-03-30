import React, { Component } from 'react';

const Logo = ({src}) => {
  return (
    <div className='header__logo'>
      <img src={src} alt=""/>
    </div>
  );
}

export default Logo;