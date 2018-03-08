import React, {Component} from 'react';
import Title from '../component/practice/Title';
import AboutMe from '../component/practice/AboutMe';
import Connect from '../component/practice/Connect';
import {inject, observer} from 'mobx-react';
import Skill from '../component/practice/Skill';
import Education from '../component/practice/Education';

@inject('ResumeStore')
@observer
class Index extends Component {
  state = {}

  componentDidMount(){
    console.log(this.props.ResumeStore.data);
  }

  render(){
    return (
      <div className='container'>
        <header className='header'>
          <div className='header__top'>
            <Title />
          </div>
          <div className="header__info">
            <AboutMe data={this.props.ResumeStore.data.about} />
            <Connect data={this.props.ResumeStore.data.connect} />
          </div>
        </header>
        <article className='main'>
          <div className='main__left'>
            <Skill />
            <Education />
          </div>
        </article>
      </div>
    )
  }
}

export default Index;
