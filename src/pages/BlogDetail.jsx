import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogPosts } from '../api/blogApi';

export const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        // Fetch all posts and find the one with matching ID
        const response = await fetchBlogPosts(1, 100); // Get all posts
        const foundArticle = response.posts.find(post => post.id === parseInt(id));
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Failed to fetch article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex justify-center items-center">
          <div className="text-brown-400 text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex justify-center items-center">
          <div className="text-red-500 text-lg">
            {error || 'Article not found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-brown-200 text-brown-600 rounded-md font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brown-600 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 text-brown-400">
            <div className="flex items-center gap-3">
              <img 
                src={article.authorImage} 
                alt={article.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{article.author}</span>
            </div>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-12">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg text-brown-600">
          <p className="text-xl leading-relaxed mb-6">
            {article.description}
          </p>
          
          <div className="bg-brown-50 p-6 rounded-lg border-l-4 border-brown-400 my-8">
            <p className="italic">
              This is where the full article content would be displayed. In a real implementation, 
              this would come from the API's content field or be fetched from a separate endpoint.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold font-serif text-brown-600 mt-12 mb-4">
            Key Takeaways
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Important point one from the article</li>
            <li>Key insight two that readers should remember</li>
            <li>Practical advice from the content</li>
          </ul>
          
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-brown-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={article.authorImage} 
                alt={article.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-brown-600">{article.author}</div>
                <div className="text-sm text-brown-400">Blog Writer</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-brown-400 text-brown-400 rounded-md hover:bg-brown-400 hover:text-white transition-colors">
                Share
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};
