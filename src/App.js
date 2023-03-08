import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users/');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {!data && <div className="wait">Loading...</div>}
      {data && <UserList data={data} />}
    </div>
  );
};

function UserList(props) {
  const { data } = props;

  return (
    <div>
      <h2 className="title">Kişi Listesi</h2>
      <ul>
        {data.map(user => (
          <li key={user.id} className="user-box">
            <img src={`https://avatars.dicebear.com/api/avataaars/${user.id}.svg`} alt={user.name} className="avatar" />
            <h3>{user.username}:{user.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
