import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle';
import { inject, observer} from 'mobx-react'

@inject('ResumeStore')
@observer
class Education extends Component {
  render() {
    const { start_time, end_time, school, profession} = this.props.ResumeStore.data.education;
    return (
      <div className='education'>
        <ModuleTitle index='03' title='教育' />
        <div className='main'>
          <div className='time'>
            <span className="start">{start_time}</span>
            <span className="connect">-</span>
            <span className="end">{end_time}</span>
          </div>
          <div className="info">
            <span className="school">{school}</span>
            <span className="profession">{profession}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;