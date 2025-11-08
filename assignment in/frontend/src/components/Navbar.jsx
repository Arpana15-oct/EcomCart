import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              🛍️ Vibe Commerce
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              to="/checkout"
              className="relative text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
