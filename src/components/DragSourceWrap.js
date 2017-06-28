import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

class DragSourceWrap extends Component {
  static propTypes = {
    position: PropTypes.object.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, connectDragSource, position } = this.props;

    return connectDragSource(
      <div className='drag-source-wrap' style={{
        opacity: isDragging ? 0.5 : 1,
        left: position.x,
        top: position.y
      }}>
        <div>drag me</div>
      </div>
    );
  }
}

//拖动生命周期
const spec = {
  beginDrag(props, monitor, component) {
    console.log('beginDrag');

    return {
      position: props.position
    };
  },

  endDrag(props, monitor, component) {
    console.log('endDrag');

    const {x, y} = monitor.getSourceClientOffset();
    console.log(x, y);
    // return {
    //   position: {
    //     x: props.position.x + x,
    //     y: props.position.y + y
    //   }
    // };
  },
  // canDrag() {
  //   console.log('canDrag');
  // },
  // isDragging() {
  //   console.log('isDragging');
  // }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(), //将dom连接到html5拖放api
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging() //是否正在拖动
  };
}

export default DragSource('DRAGME', spec, collect)(DragSourceWrap);
