export const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

export const getUser = () => ({
    type: GET_USER
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});

const initialState = {
    user: { name: 'Stephen' }
};

const user = (state = initialState, action) => {
    switch (action.type) {
        // don't need get since the saga watcher is doing it automatically
        // case GET_USER:
        //     return { ...state.user };
        case SET_USER:
            const { user } = action;
            return { ...state, user };
        default:
            return state;
    }
}

export default user;