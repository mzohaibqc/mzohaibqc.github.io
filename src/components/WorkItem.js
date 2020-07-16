import PropTypes from "prop-types";
import React from 'react';

export default function WorkItem({
  duration,
  institute,
  title,
  description,
  active
}) {
  return (
    <div className="col-sm-12">
      <div className="time-item">
        <div className="time-year">{duration}</div>
        <div className="icon-holder-time wow fadeIn">
          {active ? <i className="ion-ios7-circle-filled"></i> : <i className="ion-ios7-circle-outline"></i>}
        </div>
        <h4 className="time-title">
          {institute}
        </h4>
        <h5 className="time-semitag">{title}</h5>
        <p>
          {description}
        </p>
      </div>
      <div className="work-item-icon"></div>
    </div>
  );
}

WorkItem.propTypes = {
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

WorkItem.defaultProps = {
  active: false,
};
