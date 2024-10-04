// UserItem.js
import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} width="60" />
      <div>
        <h3>{user.login}</h3>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default UserItem;
