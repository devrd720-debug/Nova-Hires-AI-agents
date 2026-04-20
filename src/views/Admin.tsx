import React, { useState } from 'react';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleCreateUser = async () => {
    // In production, call backend /api/admin/create-user
    console.log(`Creating user: ${email} with role: ${role}`);
    alert(`User ${email} created. Credential email simulated.`);
  };

  return (
    <div className="max-w-xl mx-auto py-12 p-8 bg-white border border-slate-200 rounded-3xl">
      <h1 className="text-2xl font-bold mb-6">Admin Panel: Issue Credentials</h1>
      <div className="space-y-4">
        <input 
          placeholder="User Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl" 
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-3 border rounded-xl">
          <option value="user">User</option>
          <option value="pro">Pro</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleCreateUser} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold">Issue Credentials</button>
      </div>
    </div>
  );
}
