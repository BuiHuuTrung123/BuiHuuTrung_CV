import { Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import About from './components/About';


function App() {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Sidebar />
      <Container component="main" sx={{ flexGrow: 1, p: { xs: 2, lg: 5 }, py: 4 }}>
        <About />
      </Container>
    </Box>
  );
}

export default App;