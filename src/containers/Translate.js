import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import {asyncIncreasement, decreasement, increasement} from '../actions/counter.js';
import i18next from '../local/i18n.js';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

@translate()
@connect(mapStateToProps, {
  asyncIncreasement,
  decreasement,
  increasement
})
class Translate extends Component {

  changeLanguage = (ln) => {
    i18next.changeLanguage(ln);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div>{t('hello')}</div>
        <div>
          <button className='btn' onClick={() => {
            this.changeLanguage('zh');
          }}> zh </button>
          <button className='btn' onClick={() => {
            this.changeLanguage('en');
          }}> en </button>
        </div>
      </div>
    );
  }
}

export default Translate;
