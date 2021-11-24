import React, { useState } from 'react';
import { getService } from '../services/userService';
const GetUser = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const response = await getService().getUserData(2);
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
