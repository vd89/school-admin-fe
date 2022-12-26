import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routers from './pages';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="main">
        <Routers />
      </main>
    </ThemeProvider>
  );
}

export default App;
