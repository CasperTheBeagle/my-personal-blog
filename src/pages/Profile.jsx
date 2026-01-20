import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate writer and tech enthusiast. Love sharing knowledge about web development, design, and technology trends.',
    location: 'San Francisco, CA',
    website: 'https://example.com',
    twitter: '@johndoe',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock update - in real app would call API
    setIsEditing(false);
    // Would update user context here
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-brown-600">Profile</h1>
          <div className="flex gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/settings"
                  className="px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-50 transition-colors"
                >
                  Settings
                </Link>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6">
              <div className="text-center">
                <img
                  src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                  alt={user?.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-brown-600 mb-2">{user?.name}</h2>
                <p className="text-brown-400 mb-4">{user?.email}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-brown-400 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user?.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {user?.role === 'admin' ? 'Admin' : 'User'}
                  </span>
                  <span>•</span>
                  <span>Member since {new Date(user?.createdAt).toLocaleDateString()}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6 mt-6">
              <h3 className="font-bold text-brown-600 mb-4">Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-brown-400">Articles</span>
                  <span className="font-medium text-brown-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-400">Comments</span>
                  <span className="font-medium text-brown-600">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-400">Likes</span>
                  <span className="font-medium text-brown-600">128</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brown-400">Views</span>
                  <span className="font-medium text-brown-600">1.2k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6">
              <h3 className="text-xl font-bold text-brown-600 mb-6">Profile Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brown-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brown-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brown-600 mb-1">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brown-600 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brown-600 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brown-600 mb-1">
                    Twitter
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 disabled:bg-gray-50"
                  />
                </div>
              </form>
            </div>

            {/* Recent Articles */}
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6 mt-6">
              <h3 className="text-xl font-bold text-brown-600 mb-6">Recent Articles</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-brown-100">
                  <h4 className="font-medium text-brown-600 mb-1">Understanding React Hooks</h4>
                  <p className="text-sm text-brown-400 mb-2">A comprehensive guide to React Hooks and how to use them effectively...</p>
                  <div className="flex items-center gap-4 text-sm text-brown-400">
                    <span>2 days ago</span>
                    <span>•</span>
                    <span>245 views</span>
                  </div>
                </div>
                <div className="pb-4 border-b border-brown-100">
                  <h4 className="font-medium text-brown-600 mb-1">TypeScript Best Practices</h4>
                  <p className="text-sm text-brown-400 mb-2">Learn the best practices for writing clean TypeScript code...</p>
                  <div className="flex items-center gap-4 text-sm text-brown-400">
                    <span>1 week ago</span>
                    <span>•</span>
                    <span>189 views</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-brown-600 mb-1">CSS Grid vs Flexbox</h4>
                  <p className="text-sm text-brown-400 mb-2">When to use CSS Grid and when to use Flexbox...</p>
                  <div className="flex items-center gap-4 text-sm text-brown-400">
                    <span>2 weeks ago</span>
                    <span>•</span>
                    <span>156 views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
