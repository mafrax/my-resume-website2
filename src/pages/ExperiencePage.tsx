import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import experienceData from '../data/experience.json';

const ExperiencePage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Professional Experience</Typography>
      {experienceData.experiences.map((exp, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="h6">{exp.position} - {exp.company}</Typography>
          <Typography variant="subtitle1">{exp.duration}</Typography>
          <ul>
            {exp.details.map((detail, detailIndex) => (
              <li key={detailIndex}>
                <Typography variant="body2">{detail}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default ExperiencePage;
