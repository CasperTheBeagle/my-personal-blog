import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brown-100">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-brown-400 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-brown-600 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-brown-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/"
          className="inline-block px-8 py-3 bg-brown-400 text-white rounded-md hover:bg-brown-500 transition-colors font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
