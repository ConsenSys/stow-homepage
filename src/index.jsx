import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Favicon from '@stowprotocol/brand/Favicon';
import ThemeProvider from '@stowprotocol/brand/ThemeProvider';
import App from './App';

ReactDOM.render(<React.Fragment>
  <CssBaseline />
  <Favicon />
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
</React.Fragment>, document.getElementById('root'));
