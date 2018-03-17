import React, { Component } from 'react';
import ModuleTitle from './ModuleTitle';
import {inject, observer} from 'mobx-react';
import ProductionItem from './ProductionItem';

@inject('ResumeStore')
@observer
class Production extends Component {
  render() {
    return (
      <div className='experience'>
        <ModuleTitle index='05' title='作品'/>
        <div className='experience__list'>
          {
            this.props.ResumeStore.data.production.map((item, index) => 
            <ProductionItem key={index} data={item}/>)
          }
          
        </div>
      </div>
    );
  }
}

export default Production;