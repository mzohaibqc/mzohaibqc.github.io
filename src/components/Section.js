import React from 'react';
import PropTypes from "prop-types";

export default function Section({ children, id, className }) {
  return (
    <section id={id} className={className} >
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired
};

Section.defaultProps = {
  className: '',
};
