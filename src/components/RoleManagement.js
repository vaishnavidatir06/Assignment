import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  const addRole = () => {
    const newRole = { id: roles.length + 1, name: `Role${roles.length + 1}`, permissions: ['Read'] };
    setRoles([...roles, newRole]);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={addRole}>Add Role</button>
      <table border="1" style={{ marginTop: '10px', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
