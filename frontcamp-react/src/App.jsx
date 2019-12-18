import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorBoundary from './error/ErrorBoundary';

import Home from './components/pages/Home';
import Film from './components/pages/Film';
import NotFound from './components/pages/NotFound';

const App = () => (
    <ErrorBoundary>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/film/:id" component={Film}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>
);

export default App;
