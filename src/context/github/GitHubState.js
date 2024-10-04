import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import { SEARCH_USERS, GET_USER, SET_LOADING, CLEAR_USERS } from './typess';

const GitHubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User Details
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
