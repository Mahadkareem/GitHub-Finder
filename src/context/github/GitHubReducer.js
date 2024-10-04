const SEARCH_USERS = 'SEARCH_USERS';
const GET_USER = 'GET_USER';
const SET_LOADING = 'SET_LOADING';
const CLEAR_USERS = 'CLEAR_USERS';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
