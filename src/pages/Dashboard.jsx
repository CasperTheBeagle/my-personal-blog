import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  const mockStats = {
    articlesRead: 24,
    articlesPublished: user?.role === 'admin' ? 12 : 3,
    comments: 45,
    likes: 128,
    followers: 89,
    following: 156,
  };

  const recentActivity = [
    { id: 1, type: 'article', title: 'Understanding React Hooks', time: '2 hours ago' },
    { id: 2, type: 'comment', title: 'Great article on TypeScript', time: '5 hours ago' },
    { id: 3, type: 'like', title: 'Cat Behavior Guide', time: '1 day ago' },
    { id: 4, type: 'follow', title: 'Started following John Doe', time: '2 days ago' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-brown-600 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-brown-400">Here's what's happening with your account today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brown-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-brown-400">Articles Read</h3>
            <svg className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brown-600">{mockStats.articlesRead}</p>
          <p className="text-sm text-brown-400 mt-1">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-brown-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-brown-400">Published</h3>
            <svg className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brown-600">{mockStats.articlesPublished}</p>
          <p className="text-sm text-brown-400 mt-1">+3 this week</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-brown-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-brown-400">Comments</h3>
            <svg className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brown-600">{mockStats.comments}</p>
          <p className="text-sm text-brown-400 mt-1">+8 this week</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-brown-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-brown-400">Likes</h3>
            <svg className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brown-600">{mockStats.likes}</p>
          <p className="text-sm text-brown-400 mt-1">+24 this week</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6">
            <h2 className="text-xl font-bold text-brown-600 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-brown-100 last:border-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'article' ? 'bg-blue-100' :
                    activity.type === 'comment' ? 'bg-green-100' :
                    activity.type === 'like' ? 'bg-red-100' : 'bg-purple-100'
                  }`}>
                    {activity.type === 'article' && '📝'}
                    {activity.type === 'comment' && '💬'}
                    {activity.type === 'like' && '❤️'}
                    {activity.type === 'follow' && '👥'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-brown-600">{activity.title}</p>
                    <p className="text-sm text-brown-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6">
            <h2 className="text-xl font-bold text-brown-600 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/profile"
                className="block w-full text-center px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors"
              >
                Edit Profile
              </Link>
              <Link
                to="/settings"
                className="block w-full text-center px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-50 transition-colors"
              >
                Settings
              </Link>
              {user?.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>

          {/* Social Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6 mt-6">
            <h2 className="text-xl font-bold text-brown-600 mb-6">Social Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-brown-400">Followers</span>
                <span className="font-medium text-brown-600">{mockStats.followers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brown-400">Following</span>
                <span className="font-medium text-brown-600">{mockStats.following}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
