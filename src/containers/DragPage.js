import React, { Component } from 'react';
import DragSourceWrap from '../components/DragSourceWrap.js';
import DragTargetWrap from '../components/DragTargetWrap.js';
import '../style/drag-page.scss';

class DragPage extends Component {

  render() {
    return (
      <div className='drag-page'>
        <DragSourceWrap text={'me'} position={{x: 0, y: 0}}/>
        <DragTargetWrap />
      </div>
    );
  }
}

export default DragPage;
