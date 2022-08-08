import axios from 'axios';

const API_URL = 'http://omdbapi.com?apikey=c253816a'; // move this to a secure backend

export function requestGetMovies(title) {
    return axios.request({
        method: 'GET',
        url: `${API_URL}&s=${title}`
    });
}