import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle';
import { inject, observer} from 'mobx-react'
import OwnWorkItem from './OwnWorkItem';
@inject('ResumeStore')
@observer
class OwnWork extends Component {
  render() {
    const {title, time, describe} = this.props.ResumeStore.data.ownwork;
    return (
      <div className='ownwork'>
        <ModuleTitle index='03' title='个人作品' />
        <div className='ownwork__list'>
          {
            this.props.ResumeStore.data.ownwork.map((item, index) => 
            <OwnWorkItem data={item} key={index}/>)
          }
          
        </div>
        
      </div>
    );
  }
}

export default OwnWork;