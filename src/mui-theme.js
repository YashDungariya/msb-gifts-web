import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark', // Black background for premium feel
    primary: {
      main: '#FF0000', // Red from logo (Accent and buttons)
    },
    secondary: {
      main: '#FFFF00', // Yellow from logo (Highlights and Icons)
    },
    background: {
      default: '#000000', // True black
      paper: '#121212', // Slightly grey black for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFF00', // Yellow as secondary text
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Modern, clean font
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25, // Rounded buttons
          padding: '10px 20px',
        },
      },
    },
  },
});

export default muiTheme;