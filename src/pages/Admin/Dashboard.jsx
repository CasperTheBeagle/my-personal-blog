import React from 'react';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  const stats = {
    totalUsers: 1234,
    totalArticles: 567,
    totalComments: 2341,
    totalViews: 45678,
    activeToday: 89,
    revenue: 12345,
  };

  const recentActivity = [
    { id: 1, type: 'user', action: 'New user registered', user: 'john.doe@example.com', time: '2 minutes ago' },
    { id: 2, type: 'article', action: 'New article published', user: 'Jane Smith', time: '15 minutes ago' },
    { id: 3, type: 'comment', action: 'Comment reported', user: 'Admin', time: '1 hour ago' },
    { id: 4, type: 'user', action: 'User banned', user: 'spam_user@example.com', time: '2 hours ago' },
    { id: 5, type: 'article', action: 'Article updated', user: 'Mike Johnson', time: '3 hours ago' },
  ];

  const topArticles = [
    { id: 1, title: 'Understanding React Hooks', views: 2456, comments: 45 },
    { id: 2, title: 'TypeScript Best Practices', views: 1892, comments: 32 },
    { id: 3, title: 'CSS Grid vs Flexbox', views: 1567, comments: 28 },
    { id: 4, title: 'JavaScript ES2024 Features', views: 1234, comments: 19 },
    { id: 5, title: 'Building REST APIs', views: 987, comments: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
            <p className="text-sm text-gray-500 mt-1">System Management</p>
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
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              👥 Users
            </Link>
            <Link
              to="/admin/comments"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              💬 Comments
            </Link>
            <Link
              to="/admin/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              ⚙️ Settings
            </Link>
            <hr className="my-4 border-gray-200" />
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-1"
            >
              🏠 User Dashboard
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              🌐 Public Site
            </Link>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's what's happening on your site today.</p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
                  <span className="text-2xl">👥</span>
                </div>
                <p className="text-3xl font-bold text-blue-600">{stats.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">+12% from last month</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Articles</h3>
                  <span className="text-2xl">📝</span>
                </div>
                <p className="text-3xl font-bold text-green-600">{stats.totalArticles.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">+8 this week</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Views</h3>
                  <span className="text-2xl">👁️</span>
                </div>
                <p className="text-3xl font-bold text-purple-600">{stats.totalViews.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">+24% from last week</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Active Today</h3>
                  <span className="text-2xl">🔥</span>
                </div>
                <p className="text-3xl font-bold text-orange-600">{stats.activeToday}</p>
                <p className="text-sm text-gray-500 mt-1">Users online now</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activities */}
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                            activity.type === 'user' ? 'bg-blue-100' :
                            activity.type === 'article' ? 'bg-green-100' :
                            activity.type === 'comment' ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                            {activity.type === 'user' && '👤'}
                            {activity.type === 'article' && '📝'}
                            {activity.type === 'comment' && '💬'}
                            {activity.type === 'user' && activity.action.includes('banned') && '🚫'}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{activity.action}</p>
                            <p className="text-sm text-gray-500">{activity.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Top Articles */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Top Articles</h2>
                  <div className="space-y-4">
                    {topArticles.map((article, index) => (
                      <div key={article.id} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-brown-100 rounded-full flex items-center justify-center text-sm font-bold text-brown-600">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 text-sm line-clamp-2">{article.title}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-gray-500">👁️ {article.views.toLocaleString()}</span>
                            <span className="text-xs text-gray-500">💬 {article.comments}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  ➕ New User
                </button>
                <button className="px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  📝 New Article
                </button>
                <button className="px-4 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  📊 View Reports
                </button>
                <button className="px-4 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                  ⚙️ System Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
