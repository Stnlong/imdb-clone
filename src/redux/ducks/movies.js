export const GET_MOVIES = 'GET_MOVIES';
const SET_MOVIES = 'SET_MOVIES';

export const getMovies = (title) => ({
    type: GET_MOVIES,
    title
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

const initialState = {
    movies: []
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            const { movies } = action;
            return { ...state, movies };
        default: 
        return state;
    }
}

export default movies;