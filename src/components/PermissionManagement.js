import React, { useState } from 'react';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    'Read',
    'Write',
    'Delete',
  ]);

  const addPermission = () => {
    const newPermission = `Permission${permissions.length + 1}`;
    setPermissions([...permissions, newPermission]);
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <button onClick={addPermission}>Add Permission</button>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
