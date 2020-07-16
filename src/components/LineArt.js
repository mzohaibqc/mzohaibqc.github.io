import React from 'react';
import PropTypes from 'prop-types';


export default function LineArt({ sides }) {
  return sides.map(side => (
    <div key={side} className={`line-art-${side}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ));
}

LineArt.propTypes = {
  sides: PropTypes.array.isRequired,
};