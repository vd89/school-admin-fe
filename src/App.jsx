import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import Routers from './pages';
import store from './redux';

const theme = createTheme();
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className="main">
          <Routers />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
