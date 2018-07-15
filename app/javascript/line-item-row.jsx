import React from 'react';
import PropTypes from 'prop-types';

export default class LineItemRow extends React.Component {
  static get propTypes() {
    const { number, string } = PropTypes;

    return {
      id: number.isRequired,
      name: string.isRequired,
      // campaignName: string.isRequired, 
      // bookedAmount: number.isRequired, 
      // actualAmount: number.isRequired, 
      // adjustments: number .isRequired
    };
  }

  render() {
    const { id, name } = this.props;
    return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  }
}