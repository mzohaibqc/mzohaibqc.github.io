import PropTypes from "prop-types";
import React from 'react';
import SkillBar from './SkillBar';

export default function SkillSet({ title, skills }) {
  return (
    <div className="skill-area">
      <h4 className="skill-title"> {title} </h4>
      {skills.map(skill => <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />)}
    </div>
  );
}

SkillSet.propTypes = {
  skills: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
