import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle';
import {inject, observer} from 'mobx-react';
import AwardItem from './AwardItem';

@inject('ResumeStore')
@observer
class Award extends Component {
  render() {
    return (
      <div className='experience'>
        <ModuleTitle index='04' title='获奖情况'/>
        <div className='experience__list'>
          {
            this.props.ResumeStore.data.award.map((item, index) => 
            <AwardItem data={item} key={index}/>)
          }
        </div>
      </div>
    );
  }
}

export default Award;