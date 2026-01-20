import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ArticleManagement = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Understanding React Hooks',
      author: 'John Doe',
      category: 'React',
      status: 'published',
      views: 2456,
      comments: 45,
      date: '2024-01-15',
      featured: true,
    },
    {
      id: 2,
      title: 'TypeScript Best Practices',
      author: 'Jane Smith',
      category: 'TypeScript',
      status: 'published',
      views: 1892,
      comments: 32,
      date: '2024-01-14',
      featured: false,
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      author: 'Mike Johnson',
      category: 'CSS',
      status: 'draft',
      views: 1567,
      comments: 28,
      date: '2024-01-13',
      featured: false,
    },
    {
      id: 4,
      title: 'JavaScript ES2024 Features',
      author: 'Sarah Wilson',
      category: 'JavaScript',
      status: 'published',
      views: 1234,
      comments: 19,
      date: '2024-01-12',
      featured: true,
    },
    {
      id: 5,
      title: 'Building REST APIs',
      author: 'Tom Brown',
      category: 'Backend',
      status: 'published',
      views: 987,
      comments: 15,
      date: '2024-01-11',
      featured: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['React', 'TypeScript', 'CSS', 'JavaScript', 'Backend'];
  const statuses = ['all', 'published', 'draft', 'archived'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || article.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleStatusChange = (articleId, newStatus) => {
    setArticles(prev => prev.map(article => 
      article.id === articleId ? { ...article, status: newStatus } : article
    ));
  };

  const handleFeaturedToggle = (articleId) => {
    setArticles(prev => prev.map(article => 
      article.id === articleId ? { ...article, featured: !article.featured } : article
    ));
  };

  const handleDelete = (articleId) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(prev => prev.filter(article => article.id !== articleId));
    }
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
              className="block px-4 py-2 bg-gray-100 text-gray-700 rounded-md transition-colors mb-1"
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
                <h1 className="text-3xl font-bold text-gray-800">Article Management</h1>
                <p className="text-gray-600 mt-2">Manage all articles on the platform</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                ➕ New Article
              </button>
            </div>
            
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                
                <div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filteredArticles.length} articles
                  </span>
                </div>
              </div>
            </div>
            
            {/* Articles Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Article
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
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
                    {filteredArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <div>
                              <p className="font-medium text-gray-900 line-clamp-2">{article.title}</p>
                              <p className="text-sm text-gray-500">{article.date}</p>
                              {article.featured && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                                  ⭐ Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`}
                              alt={article.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm text-gray-900">{article.author}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {article.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={article.status}
                            onChange={(e) => handleStatusChange(article.id, e.target.value)}
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 cursor-pointer ${
                              article.status === 'published' ? 'bg-green-100 text-green-800' :
                              article.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                            <option value="archived">Archived</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div>👁️ {article.views.toLocaleString()}</div>
                            <div>💬 {article.comments}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleFeaturedToggle(article.id)}
                              className={`p-1 rounded ${
                                article.featured ? 'text-yellow-600 hover:bg-yellow-50' : 'text-gray-400 hover:bg-gray-50'
                              }`}
                              title={article.featured ? 'Remove from featured' : 'Add to featured'}
                            >
                              ⭐
                            </button>
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Edit">
                              ✏️
                            </button>
                            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded" title="View">
                              👁️
                            </button>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                              title="Delete"
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
            {filteredArticles.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm || filterStatus !== 'all' || filterCategory !== 'all'
                    ? 'Try adjusting your filters'
                    : 'Get started by creating your first article'}
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  ➕ New Article
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
