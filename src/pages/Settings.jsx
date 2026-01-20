import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    comments: true,
    mentions: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showLocation: true,
    allowMessages: true,
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
    { id: 'security', label: 'Security', icon: '🛡️' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-brown-600 mb-2">Settings</h1>
          <p className="text-brown-400">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-brown-100 text-brown-600 font-medium'
                        : 'text-brown-400 hover:bg-brown-50 hover:text-brown-600'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-4 mt-6">
              <h3 className="font-medium text-brown-600 mb-3">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/profile"
                  className="block text-brown-400 hover:text-brown-600 transition-colors"
                >
                  View Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block text-brown-400 hover:text-brown-600 transition-colors"
                >
                  Dashboard
                </Link>
                {user?.role === 'admin' && (
                  <Link
                    to="/admin/dashboard"
                    className="block text-brown-400 hover:text-brown-600 transition-colors"
                  >
                    Admin Panel
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-brown-200 p-6">
              
              {/* Account Settings */}
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-2xl font-bold text-brown-600 mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Email Address</h3>
                      <div className="flex items-center justify-between p-4 bg-brown-50 rounded-md">
                        <div>
                          <p className="font-medium text-brown-600">{user?.email}</p>
                          <p className="text-sm text-brown-400">This is your primary email address</p>
                        </div>
                        <button className="px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-100 transition-colors">
                          Change
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Password</h3>
                      <div className="flex items-center justify-between p-4 bg-brown-50 rounded-md">
                        <div>
                          <p className="font-medium text-brown-600">••••••••</p>
                          <p className="text-sm text-brown-400">Last changed 3 months ago</p>
                        </div>
                        <button className="px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-100 transition-colors">
                          Update
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Account Type</h3>
                      <div className="p-4 bg-brown-50 rounded-md">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user?.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {user?.role === 'admin' ? 'Admin Account' : 'User Account'}
                          </span>
                          <p className="text-sm text-brown-400">
                            {user?.role === 'admin' ? 'Full access to all features' : 'Standard user access'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Delete Account</h3>
                      <div className="p-4 bg-red-50 rounded-md border border-red-200">
                        <p className="text-red-700 mb-3">Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-brown-600 mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Email Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { key: 'email', label: 'Account updates and security alerts', description: 'Important notifications about your account' },
                          { key: 'marketing', label: 'Marketing emails', description: 'News, updates, and promotional content' },
                          { key: 'comments', label: 'Comments on your articles', description: 'When someone comments on your content' },
                          { key: 'mentions', label: 'Mentions and replies', description: 'When someone mentions you' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-brown-50 rounded-md">
                            <div>
                              <p className="font-medium text-brown-600">{item.label}</p>
                              <p className="text-sm text-brown-400">{item.description}</p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(item.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notifications[item.key] ? 'bg-brown-600' : 'bg-gray-300'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Push Notifications</h3>
                      <div className="p-4 bg-brown-50 rounded-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-brown-600">Browser Push Notifications</p>
                            <p className="text-sm text-brown-400">Receive notifications in your browser</p>
                          </div>
                          <button
                            onClick={() => handleNotificationChange('push')}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              notifications.push ? 'bg-brown-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                notifications.push ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-2xl font-bold text-brown-600 mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Profile Visibility</h3>
                      <div className="p-4 bg-brown-50 rounded-md">
                        <div className="space-y-3">
                          {[
                            { value: 'public', label: 'Public', description: 'Anyone can view your profile' },
                            { value: 'private', label: 'Private', description: 'Only followers can view your profile' },
                          ].map((option) => (
                            <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="profileVisibility"
                                value={option.value}
                                checked={privacy.profileVisibility === option.value}
                                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                                className="w-4 h-4 text-brown-600 border-brown-300 focus:ring-brown-500"
                              />
                              <div>
                                <p className="font-medium text-brown-600">{option.label}</p>
                                <p className="text-sm text-brown-400">{option.description}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Information Sharing</h3>
                      <div className="space-y-3">
                        {[
                          { key: 'showEmail', label: 'Show email address on profile' },
                          { key: 'showLocation', label: 'Show location on profile' },
                          { key: 'allowMessages', label: 'Allow direct messages from anyone' },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 bg-brown-50 rounded-md">
                            <p className="font-medium text-brown-600">{item.label}</p>
                            <button
                              onClick={() => handlePrivacyChange(item.key, !privacy[item.key])}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                privacy[item.key] ? 'bg-brown-600' : 'bg-gray-300'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  privacy[item.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-bold text-brown-600 mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Two-Factor Authentication</h3>
                      <div className="p-4 bg-brown-50 rounded-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-brown-600">2FA is not enabled</p>
                            <p className="text-sm text-brown-400">Add an extra layer of security to your account</p>
                          </div>
                          <button className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors">
                            Enable 2FA
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-brown-50 rounded-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-brown-600">Current Session</p>
                              <p className="text-sm text-brown-400">Chrome on Windows • San Francisco, CA</p>
                              <p className="text-xs text-brown-400">Active now</p>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                              Current
                            </span>
                          </div>
                        </div>
                        <div className="p-4 bg-brown-50 rounded-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-brown-600">Mobile Session</p>
                              <p className="text-sm text-brown-400">Safari on iPhone • New York, NY</p>
                              <p className="text-xs text-brown-400">2 hours ago</p>
                            </div>
                            <button className="px-3 py-1 border border-red-300 text-red-600 rounded text-sm hover:bg-red-50 transition-colors">
                              Revoke
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-brown-600 mb-3">Login History</h3>
                      <div className="p-4 bg-brown-50 rounded-md">
                        <button className="px-4 py-2 border border-brown-300 text-brown-600 rounded-md hover:bg-brown-100 transition-colors">
                          View Login History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
