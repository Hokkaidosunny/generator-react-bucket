import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

class Dragme extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, connectDragSource, text } = this.props;

    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className='drag-me'>drag {text}</div>
      </div>
    );
  }
}

//拖动生命周期
const DragmeSource = {
  beginDrag(props) {
    console.log('beginDrag');
    return {
      text: props.text
    };
  },
  endDrag() {
    console.log('endDrag');
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource('DRAGME', DragmeSource, collect)(Dragme);
