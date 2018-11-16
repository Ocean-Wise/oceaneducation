import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

function ItemGrid({ items, width }) {
  if (width > 1125) {
    return (
      <Container>
        {items}
      </Container>
    );
  } else {
    const row1 = [];
    const row2 = [];
    items.map((item, i) => {
      if (i % 2) {
        row2.push(item);
      } else {
        row1.push(item);
      }
    });
    return (
      <Container>
        <div>
          {row1}
        </div>
        <div>
          {row2}
        </div>
      </Container>
    );
  }

}

ItemGrid.propTypes = {
  items: PropTypes.array,
  width: PropTypes.number,
};

export default ItemGrid
