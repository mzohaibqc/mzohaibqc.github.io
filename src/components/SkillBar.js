import PropTypes from "prop-types";
import React from 'react';

export default function SkillBar({ name, percentage }) {
  return (
    <div className="skillbar clearfix" data-percent="80%">
      <div className="skillbar-title">
        <span>Javascript</span>
      </div>
      <div className="skillbar-bg"></div>
      <div className="skillbar-bar to-animate"></div>
      <div className="skill-bar-percent">80%</div>
    </div>
  );
}

SkillBar.propTypes = {
  name: PropTypes.any,
  percentage: PropTypes.any
}
