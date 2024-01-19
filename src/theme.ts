import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6', // A modern blue
    },
    secondary: {
      main: '#19857b', // A complementary green
    },
    background: {
      default: '#f4f5f7', // A light grey for the background
    },
    text: {
      primary: '#333333', // Darker text for better readability
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#333333',
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Buttons with regular casing
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Flat design for the AppBar
        },
      },
    },
    // Add more component customizations as needed
  },
  shape: {
    borderRadius: 8, // Global border radius
  },
});

export default theme;
