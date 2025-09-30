import { Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Sidebar />
      <Container component="main" sx={{ flexGrow: 1, p: { xs: 2, lg: 5 }, py: 4 }}>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </Container>

    </Box>
  );
}

export default App;