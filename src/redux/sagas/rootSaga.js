import { takeLatest } from 'redux-saga/effects'; // we want to only get the response of the latest request fired (e.g. to always display the latest version of data) we can use the takeLatest helper
import { handleGetUser } from "./handlers/user";
import { handleGetMovies } from "./handlers/movies";
import { GET_USER } from "../ducks/user";
import { GET_MOVIES } from "../ducks/movies";

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(GET_MOVIES, handleGetMovies);
}