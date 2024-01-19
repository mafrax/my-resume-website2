import React from 'react';
import aboutData from '../data/about.json';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>{aboutData.name}</h1>
      <h2>{aboutData.role}</h2>
      <p>{aboutData.description}</p>
      {/* Display other info from aboutData */}
    </div>
  );
};

export default AboutPage;
