import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
// import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
