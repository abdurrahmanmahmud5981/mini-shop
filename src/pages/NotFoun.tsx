import React from 'react';
import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { ROUTES } from '../constants/routes';

export const NotFoundPage: React.FC = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-8">
          <Search className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <Link
          to={ROUTES.HOME}
          className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};