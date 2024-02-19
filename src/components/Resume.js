
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="experience">
          <h3>Work Experience</h3>
          <ul style={{color: 'darkblue'}}>
          <li>Served as Computer Operator at Cyberworld Cafe in my local town for 8 years.Handling different types of customers, doing multitasking, assisting customers in accessing to internet etc., were the roles and responsibilities at the internet cafe</li>
          <li>Employed as Data Entry Operator at Parikar Solutions Pvt Ltd, Tirupati for one year. Entering data from Home loan applications into the computer systems. Finding and resolving typos were also part of the roles and responsibilties.</li>
          <li>Worked as Food Delivery Rider in Zomato India for two years. Food pick up from restaurants, delivering to the customers, handling the cash from customers, navigating the city using Google Maps were the roles and responsibilities</li>
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p style={{color: 'darkblue'}}>Bachelor of Arts in History, Economics and Political Science from Dr. BR Ambedkar Open University, Hyderabad.</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul style={{color:'darkblue'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            </ul>
        </div>

      </div>
    </section>
  )
};

export default Resume;
