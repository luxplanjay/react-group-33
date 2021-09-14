import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { Example1 } from 'components/Example1';
// import { Example2 } from 'components/Example2';
import { theme } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Example1 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
