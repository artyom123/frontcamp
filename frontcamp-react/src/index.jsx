import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { MuiThemeProvider } from '@material-ui/core';

import ErrorBoundary from './error/ErrorBoundary';
import THEME from './constants/Theme';

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <MuiThemeProvider theme={THEME}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
);
