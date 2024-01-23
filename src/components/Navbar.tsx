import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Navbar: React.FC = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const handleProjectHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Button 
            color="inherit" 
            onMouseOver={handleProjectHover}
          >
            Projects
          </Button>
          <Menu
            id="projects-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem component={Link} to="/project1">Project 1</MenuItem>
            <MenuItem component={Link} to="/project2">Project 2</MenuItem>
            {/* More projects */}
        </Menu>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
