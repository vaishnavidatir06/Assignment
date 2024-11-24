import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/permissions">Permissions</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
