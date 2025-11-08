import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export const sampleProducts = [
  {
    name: 'Wireless Headphones',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    name: 'Smart Watch',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    description: 'Feature-rich smartwatch with health tracking'
  },
  {
    name: 'Laptop Backpack',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
    description: 'Durable laptop backpack with multiple compartments'
  },
  {
    name: 'Bluetooth Speaker',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300',
    description: 'Portable Bluetooth speaker with excellent sound quality'
  },
  {
    name: 'Gaming Mouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300',
    description: 'Ergonomic gaming mouse with RGB lighting'
  },
  {
    name: 'Phone Case',
    price: 499,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300',
    description: 'Protective phone case with stylish design'
  }
];

export default Product;
