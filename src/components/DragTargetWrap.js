import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

class DragTargeteWrap extends Component {
  static propTypes = {
  };

  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className='drag-target-wrap'>
        <div>drag box</div>
      </div>
    );
  }
}

//拖动生命周期
const spec = {
  drop(props, monitor, component) {
    console.log('drop');

    // return {
    //   position: props.position
    // };
  },

  hover(props, monitor, component) {
    console.log('hover');

    // const {x, y} = monitor.getSourceClientOffset();
    // console.log(x, y);
    // return {
    //   position: {
    //     x: props.position.x + x,
    //     y: props.position.y + y
    //   }
    // };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

export default DropTarget('DRAGME', spec, collect)(DragTargeteWrap);
