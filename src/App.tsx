/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Hunter from './views/Hunter';
import Tailor from './views/Tailor';
import Networker from './views/Networker';
import Nova from './views/Nova';
import Profile from './views/Profile';
import ResumeBuilder from './views/ResumeBuilder';
import Pricing from './views/Pricing';
import Admin from './views/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hunter" element={<Hunter />} />
          <Route path="tailor" element={<Tailor />} />
          <Route path="networker" element={<Networker />} />
          <Route path="nova" element={<Nova />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

