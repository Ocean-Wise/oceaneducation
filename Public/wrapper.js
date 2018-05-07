import PublicEl from './PublicEl';
import ReactDOM from 'react-dom';
import React from 'react';

const Public = (element) => {
  ReactDOM.render(<PublicEl />,
    element);
};

module.exports = Public;
