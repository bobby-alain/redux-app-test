import React, { useState } from 'react';
import { fetchUser } from '../helper/fetchUser';

const GetUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');

  const getUser = async () => {
    setLoading(true);
    const response = await fetchUser(2);
    setUser(response.name);
    setLoading(false);
  };

  return (
    <div>
      {loading ? 'Loading...' : <h1>{user}</h1>}
      <button onClick={getUser}>Get User</button>
    </div>
  );
};

export default GetUser;
