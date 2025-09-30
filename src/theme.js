import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Xanh đậm
      light: '#e3f2fd',
    },
    secondary: {
      main: '#ffca28', // Vàng
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '0.05em', '@media (max-width:600px)': { fontSize: '2rem' } },
    h2: { fontSize: '2rem', fontWeight: 600, '@media (max-width:600px)': { fontSize: '1.5rem' } },
    h3: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.2rem', fontWeight: 400 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9rem', color: '#666666' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
  },
});

export default theme;