import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Grid from './Grid';

function ImpactGraphics({ graphics, title, width }) {
  return (
    <Container>
      <h1>Annual Impact</h1>
      <Grid>
        {graphics.map((graphic, i) => <img src={graphic} key={`graphic-${i.toString()}`} />)}
      </Grid>
    </Container>
  );
}

ImpactGraphics.propTypes = {
  graphics: PropTypes.array.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default ImpactGraphics;
