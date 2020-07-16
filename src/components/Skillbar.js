import PropTypes from "prop-types";
import React from 'react';

export default function SkillBar({ name, percentage }) {
  return (
    <div className="skillbar clearfix" data-percent={`${percentage}%`}>
      <div className="skillbar-title">
        <span>{name}</span>
      </div>
      <div className="skillbar-bg"></div>
      <div className="skillbar-bar to-animate"></div>
      <div className="skill-bar-percent">{percentage}%</div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}
