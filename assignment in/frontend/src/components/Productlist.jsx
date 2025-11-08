import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function Productlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(p => (
        <div
          key={p._id}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{p.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">₹{p.price}</span>
              <button
                onClick={() => addToCart(p)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Add to Cart</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
