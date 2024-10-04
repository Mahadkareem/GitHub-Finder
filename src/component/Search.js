// // Search.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({ searchUsers, clearUsers, showClear }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText('');
  };

  return (
    <div className="search-section">
      <form onSubmit={onSubmit} className="form">
        <TextField
          label="Search GitHub User"
          variant="outlined"
          color="success"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ marginRight: '10px', width: '600px' }}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {showClear && (
          <Button onClick={clearUsers} variant="contained">
            Clear
          </Button>
        )}
      </form>
    </div>
  );
};

export default Search;
