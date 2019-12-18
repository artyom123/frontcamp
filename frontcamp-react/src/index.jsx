import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from '@material-ui/core';

import App from './App';

import reducer from './reducer/index';
import saga from './sagas/index';

import THEME from './constants/Theme';

const initialState = {
    movies: {
        searchBy: {
            values: [
                { title: 'title' },
                { genre: 'genre' },
            ],
            active: 'title',
        },
        searchValue: '',
        items: [],
        sortBy: {
            values: [
                {'release_date': 'release date'},
                {'vote_average': 'raiting'},
            ],
            active: 'release_date',
        },
    },
    movie: {
        item: null,
        relatedMovies: {
            criteria: 'genres',
            items: [],
        },
    },
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga, store.dispatch, store.getState);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={THEME}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
