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
            {start_time}
            <br />
            -
            <br />
            {end_time}
          </div>
          <div className="info">
            {school}
          </div>
        </div>
        

      </div>
    );
  }
}

export default Education;