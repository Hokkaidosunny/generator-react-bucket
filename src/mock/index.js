console.warn('mock is open!');
import fetchMock from 'fetch-mock';

fetchMock.get('end:numbers', () => {
  return {
    retCode: 0,
    retData: [1, 2, 3],
    retMsg: ''
  };
});
  
fetchMock.spy();
