import { call, put } from 'redux-saga/effects';

import { setMovies } from '../../ducks/movies';

import { requestGetMovies } from '../requests/movies';

export function* handleGetMovies(action) {
    try { 
        console.log(action);
        const response = yield call(requestGetMovies, action.title);
        const { data } = response;
        console.log(response);
        yield put(setMovies(data.Search));
    } catch (err) {
        console.log(err);
    }
}