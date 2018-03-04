import React, {Component} from 'react';
import Title from '../component/practice/Title';

class Index extends Component {
  state = {}

  render(){
    return (
      <div>
        <header>
          <div className='header__top'>
            <Title />
          </div>
          <div className="header__info">
          </div>
        </header>
        <article>

        </article>
      </div>
    )
  }
}

export default Index;
