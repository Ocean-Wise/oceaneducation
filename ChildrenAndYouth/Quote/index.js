import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from './Blockquote';

function Quote({ q, attr }) {
  return (
    <Blockquote>
      {q}
      <span>{attr}</span>
    </Blockquote>
  );
}

Quote.propTypes = {
  q: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
}

export default Quote;
