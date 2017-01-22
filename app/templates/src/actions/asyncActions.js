export function incrementWaitOneSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      return dispatch({
        type: 'INCREMENT'
      });
    }, 1000);
  }
};
