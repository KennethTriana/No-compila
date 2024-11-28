import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from '../src/pages/Home/Home';
import Cursos from '../src/pages/Cursos/Cursos';
import Usuarios from '../src/pages/usuarios/usuarios';
import masinformacion from './pages/masinformacion/masinformacion';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palatte: {
    primary: {
      main: '#39A900',
    },
    secondary: {
      main: '#007832',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cursos' element={<Cursos />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/masinformacion' element={<masinformacion />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}