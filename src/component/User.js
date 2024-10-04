import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <h3>{user.login}</h3>
      <Link to={`/user/${user.login}`}>More</Link>
    </div>
  );
};

export default User;
