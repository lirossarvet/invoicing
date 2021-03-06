import React from 'react';
import PropTypes from 'prop-types';

import 'babel-polyfill';

import currencyFormat from './currency-format';
import _ from 'underscore';

export default class TitleBar extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.delayedOnFilterChange = _.debounce(this.props.onFilterChange, 750);
  }

  handleFilterChange = (event) => {
    const { value } = event.target;

    this.setState({ value });

    this.delayedOnFilterChange(value);
  }

  render() {
    const { grandTotal } = this.props;
    const { value } = this.state;

    return (
      <div id="title-bar">
        <h1>
          Invoicing
          <span className="badge badge-info">{currencyFormat(grandTotal)}</span>
        </h1>
        <span id="campaign-filter">
          Filter: <input type="search" onChange={this.handleFilterChange} value={value}/>
        </span>
      </div>
    );
  }
}