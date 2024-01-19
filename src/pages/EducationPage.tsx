import React from 'react';
import educationData from '../data/education.json';

const EducationPage: React.FC = () => {
  return (
    <div>
      {educationData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution} - {edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationPage;
