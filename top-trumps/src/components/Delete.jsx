import PropTypes from 'prop-types';
import React from 'react';

class Delete extends React.Component {
  render() {
    const { deleteCard, dataKey } = this.props;
    return (
      <div className="button-delete-container">
        <button
          className="button-delete"
          data-key={ dataKey }
          type="submit"
          data-testid="delete-button"
          onClick={ deleteCard }
        >
          Delete
        </button>
      </div>
    );
  }
}

Delete.propTypes = {
  dataKey: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Delete;
