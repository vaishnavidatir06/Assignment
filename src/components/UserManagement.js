import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Editor', status: 'Inactive' },
    { id: 1, name: 'Jhon', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Doe', role: 'Editor', status: 'Inactive' },
    { id: 1, name: 'Shawn', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Alex', role: 'Editor', status: 'Inactive' },
    { id: 1, name: 'Sim', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bobo', role: 'Editor', status: 'Inactive' },
  ]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: `User${users.length + 1}`, role: 'Viewer', status: 'Active' };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={addUser}>Add User</button>
      <table border="1" style={{ marginTop: '10px', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
