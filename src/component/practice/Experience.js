import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle';
import {inject, observer} from 'mobx-react';
import ExperienceItem from './ExperienceItem';

@inject('ResumeStore')
@observer
class Experience extends Component {
  state = {  }
  render() {
    return (
      <div className='experience'>
        <ModuleTitle index='02' title='实习经历'/>
        <div className='experience__list'>
          {
            this.props.ResumeStore.data.experience.map((item, index) => 
            <ExperienceItem data={item} key={index}/>)
          }
          
        </div>
      </div>
    );
  }
}

export default Experience;