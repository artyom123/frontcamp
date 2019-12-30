import {
    call,
    put,
    takeEvery,
    takeLatest,
    select
} from 'redux-saga/effects';

import * as Api from '../api';

function* fetchMovies() {
    const searchInfo = yield select((state) => state.movies);
    const movies = yield call(Api.getFilms, searchInfo);

    yield put({type: 'MOVIES_FETCH_SUCCEEDED', items: movies});
}

function* fetchMovie({id}) {
    const movie = yield call(Api.getFilm, id);

    yield put({type: 'SET_MOVIE', item: movie});
    yield put({type: 'RELATED_MOVIES_FETCH', relatesTo: movie});
}

function* fetchRelatedMovies({relatesTo}) {
    const {criteria} = yield select((state) => state.movie.relatedMovies);
    const movies = yield call(Api.getRelated, criteria, relatesTo);

    yield put({type: 'SET_RELATED_MOVIES', items: movies});
}

function* saga() {
    yield takeLatest('MOVIES_FETCH', fetchMovies);
    yield takeEvery('MOVIE_FETCH', fetchMovie);
    yield takeEvery('RELATED_MOVIES_FETCH', fetchRelatedMovies);
}

export default saga;
