import { useState, useEffect } from 'react';
// import '../CSS/user.css'

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://obtainable-gray-tenor.glitch.me/user')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  function handleDeleteUser(id) {
    fetch(`https://obtainable-gray-tenor.glitch.me/user/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      });
  }

  return (<div className='userdata'>
    <h2>Users</h2>
    <table className="user-table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="user-row">
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default UserTable;
