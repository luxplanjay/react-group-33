import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Example1 } from 'components/Example1';
import { Example2 } from 'components/Example2';
import { ThemeProvider } from './context/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Example2 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
