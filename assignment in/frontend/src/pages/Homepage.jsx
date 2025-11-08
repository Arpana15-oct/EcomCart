import Productlist from '../components/Productlist';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Shop the latest trends with unbeatable prices and premium quality.
              Your perfect shopping experience starts here.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Shop Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600">Handpicked items just for you</p>
        </div>
        <Productlist />
      </div>
    </div>
  );
};

export default Homepage;
