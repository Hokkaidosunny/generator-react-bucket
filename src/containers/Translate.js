import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import {asyncIncreasement, decreasement, increasement} from '../actions/counter.js';
import i18next from '../local/i18next.js';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapActionToProps = {
  asyncIncreasement,
  decreasement,
  increasement
};

@translate()
@connect(mapStateToProps, mapActionToProps)
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
