import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Search from './component/Search';
import UserList from './component/UserList';
import Footer from './component/Footer';
import './App.css';
const App = () => {
  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    // GitHub API call (mocked for simplicity)
    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const data = await res.json();
    setUsers(data.items);
  };

  const clearUsers = () => setUsers([]);

  return (
    <>
      <Navbar />
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0}
      />
      <UserList users={users} />
      <Footer />
    </>
  );
};

export default App;
