import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago',
      articles: 12,
      comments: 45,
      banned: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-10',
      lastActive: '5 minutes ago',
      articles: 28,
      comments: 89,
      banned: false,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-08',
      lastActive: '1 day ago',
      articles: 5,
      comments: 12,
      banned: false,
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'user',
      status: 'inactive',
      joinDate: '2024-01-05',
      lastActive: '2 weeks ago',
      articles: 3,
      comments: 8,
      banned: false,
    },
    {
      id: 5,
      name: 'Tom Brown',
      email: 'spam.user@example.com',
      role: 'user',
      status: 'banned',
      joinDate: '2024-01-03',
      lastActive: '3 days ago',
      articles: 0,
      comments: 156,
      banned: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const roles = ['all', 'user', 'admin'];
  const statuses = ['all', 'active', 'inactive', 'banned'];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleRoleChange = (userId, newRole) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const handleBanToggle = (userId) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { 
        ...user, 
        banned: !user.banned,
        status: !user.banned ? 'banned' : 'active'
      } : user
    ));
  };

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    banned: users.filter(u => u.banned).length,
    admins: users.filter(u => u.role === 'admin').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          </div>
          <nav className="p-4">
            <Link
              to="/admin/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              📊 Dashboard
            </Link>
            <Link
              to="/admin/articles"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              📝 Articles
            </Link>
            <Link
              to="/admin/users"
              className="block px-4 py-2 bg-gray-100 text-gray-700 rounded-md transition-colors mb-1"
            >
              👥 Users
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              🏠 User Dashboard
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
                <p className="text-gray-600 mt-2">Manage all users on the platform</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                ➕ Invite User
              </button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
                  <span className="text-2xl">👥</span>
                </div>
                <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
                <p className="text-sm text-green-600 mt-1">+5 this week</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-3xl font-bold text-green-600">{stats.active}</p>
                <p className="text-sm text-gray-500 mt-1">{Math.round((stats.active / stats.total) * 100)}% of total</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Banned Users</h3>
                  <span className="text-2xl">🚫</span>
                </div>
                <p className="text-3xl font-bold text-red-600">{stats.banned}</p>
                <p className="text-sm text-gray-500 mt-1">Need attention</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Admins</h3>
                  <span className="text-2xl">👑</span>
                </div>
                <p className="text-3xl font-bold text-purple-600">{stats.admins}</p>
                <p className="text-sm text-gray-500 mt-1">System administrators</p>
              </div>
            </div>
            
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>
                        {role === 'all' ? 'All Roles' : role.charAt(0).toUpperCase() + role.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filteredUsers.length} users
                  </span>
                </div>
              </div>
            </div>
            
            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Activity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stats
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                              alt={user.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                              <p className="text-xs text-gray-400">Joined {user.joinDate}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={user.role}
                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 cursor-pointer ${
                              user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' :
                            user.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div>Last active: {user.lastActive}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div>📝 {user.articles} articles</div>
                            <div>💬 {user.comments} comments</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="View Profile">
                              👁️
                            </button>
                            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded" title="Send Message">
                              ✉️
                            </button>
                            <button
                              onClick={() => handleBanToggle(user.id)}
                              className={`p-1 rounded ${
                                user.banned ? 'text-green-600 hover:bg-green-50' : 'text-red-600 hover:bg-red-50'
                              }`}
                              title={user.banned ? 'Unban User' : 'Ban User'}
                            >
                              {user.banned ? '✅' : '🚫'}
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                              title="Delete User"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Empty State */}
            {filteredUsers.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">👥</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm || filterRole !== 'all' || filterStatus !== 'all'
                    ? 'Try adjusting your filters'
                    : 'No users have registered yet'}
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  ➕ Invite User
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
