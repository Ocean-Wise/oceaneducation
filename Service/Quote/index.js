import React from 'react';
import PropTypes from 'prop-types';
import Blockquote from './Blockquote';

function Quote({ q, attr, bridge }) {
  return (
    <Blockquote bridge={bridge}>
      {q}
      <span>{attr}</span>
    </Blockquote>
  );
}

Quote.propTypes = {
  q: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  bridge: PropTypes.bool,
}

export default Quote;
