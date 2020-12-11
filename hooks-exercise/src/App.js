import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        // Add code here to fetch some users with axios and the URL variable
        // then update the 'users' piece of state
        const fetchUsers = async() => {
          const { data } = await axios.get(URL);
          setUsers(data);
        };
        fetchUsers();      
    }, [users]);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <div>
          <h1>Hello</h1>
          <ul>
              {renderedUsers}
        </ul>
        </div>
    );
}

export default App;
