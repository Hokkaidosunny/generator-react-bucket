import React from 'react';
import { RouteTransition } from 'react-router-transition';

const pushStateStyles = {
  atEnter: {translateX: 100 },
  atLeave: {translateX: -100 },
  atActive: {translateX: 0 },
  mapStyles: styles => ({ transform: `translate3d(${styles.translateX}%, 0, 0)` })
};

const popStateStyles = {
  atEnter: {translateX: -100 },
  atLeave: {translateX: 100 },
  atActive: {translateX: 0 },
  mapStyles: styles => ({ transform: `translate3d(${styles.translateX}%, 0, 0)` })
};

export default (props) => {
  const {pathname, action, children} = props;
  const styles = action === 'POP'
    ? popStateStyles
    : pushStateStyles;

  return (
    <RouteTransition
      className='transition-wrapper'
      pathname={pathname}
      {...styles}
      >
      {children}
    </RouteTransition>
  );
};
