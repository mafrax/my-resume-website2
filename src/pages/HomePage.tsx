import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import homeData from '../data/home.json';
import aboutData from '../data/about.json';
import educationData from '../data/education.json';
import experienceData from '../data/experience.json';


const HomePage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* Introduction Section */}
        <Grid item xs={12}>
          <Typography variant="h2">{homeData.intro.greeting}</Typography>
          <Typography variant="h5" color="textSecondary">
            {homeData.intro.tagline}
          </Typography>
          <Typography variant="body1" paragraph>
            {homeData.intro.description}
          </Typography>
        </Grid>

        {/* About Section */}
        <Grid item xs={12}>
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body1">{aboutData.description}</Typography>
        </Grid>

        {/* Education Section */}
        <Grid item xs={12}>
          <Typography variant="h4">Education</Typography>
          {educationData.education.map((edu, index) => (
            <Box key={index}>
              <Typography variant="h6">{edu.degree}</Typography>
              <Typography variant="body2">{edu.institution} - {edu.year}</Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12}>
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
        </Grid>
        {/* Add more sections as needed */}
      </Grid>
    </Box>
  );
};

export default HomePage;
