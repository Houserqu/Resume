import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import ModuleTitle from './ModuleTitle';
import SkillRanke from './SkillRank';

@inject('ResumeStore')
@observer
class Skill extends Component {
  render(){
    return (
      <div className='skill'>
        <ModuleTitle index='01' title='技能'/>
        {
          this.props.ResumeStore.data.skill.map(item => {
            return <SkillRanke title={item.name} rank={item.rank} />
          })
        }
        
      </div>
    )
  }
}

export default Skill;