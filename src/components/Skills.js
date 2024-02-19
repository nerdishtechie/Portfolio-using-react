// components/Skills.js
import React from 'react';

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul style={{color: 'coral'}} className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
};

export default Skills;
