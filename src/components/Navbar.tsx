import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          My Resume
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/education">Education</Button>
          <Button color="inherit" component={Link} to="/experience">Experience</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
