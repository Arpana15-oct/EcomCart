<img width="1882" height="833" alt="Screenshot 2025-11-08 114942" src="https://github.com/user-attachments/assets/1e6762fa-59e1-4bd0-8230-07f6aa289a95" />
<img width="1890" height="839" alt="Screenshot 2025-11-08 115309" src="https://github.com/user-attachments/assets/f9737892-3e13-417d-bfb0-b737e86160bd" />
<img width="1873" height="839" alt="Screenshot 2025-11-08 115120" src="https://github.com/user-attachments/assets/89174f71-26ad-4337-b4fa-561b2b5d4bd5" />
<img width="935" height="843" alt="Screenshot 2025-11-08 115231" src="https://github.com/user-attachments/assets/24d3281f-c58b-48cc-9c0b-ed28db1b2d1b" />
# EcomCart - Full-Stack E-Commerce Application
A modern, full-stack e-commerce application built with React, Node.js, Express, and MongoDB. This project demonstrates a complete shopping experience with product browsing, cart management, and checkout functionality.

## 🚀 Features

- **Product Catalog**: Browse a curated list of products with images, descriptions, and prices
- **Shopping Cart**: Add, update, and remove items from cart with real-time updates
- **Checkout Process**: Complete order processing with receipt generation
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **RESTful API**: Well-structured backend API with proper error handling
- **Database Integration**: MongoDB with Mongoose for data persistence
- **Sample Data Seeding**: Automatic seeding of sample products on first run

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Context API** - State management for cart functionality

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
EcomCart/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── cartController.js     # Cart operations
│   │   ├── checkoutController.js # Checkout processing
│   │   └── productController.js  # Product CRUD operations
│   ├── models/
│   │   ├── CartItem.js          # Cart item schema
│   │   └── Product.js           # Product schema with sample data
│   ├── routes/
│   │   ├── cartRoutes.js        # Cart API routes
│   │   ├── checkoutRoutes.js    # Checkout API routes
│   │   └── productRoutes.js     # Product API routes
│   ├── server.js                # Main server file
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.jsx         # Cart component
│   │   │   ├── Checkoutform.jsx # Checkout form
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Productlist.jsx  # Product listing
│   │   │   └── Receiptmodal.jsx # Receipt modal
│   │   ├── context/
│   │   │   └── CartContext.jsx  # Cart state management
│   │   ├── pages/
│   │   │   ├── Homepage.jsx     # Home page
│   │   │   └── Checkoutpage.jsx # Checkout page
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # App entry point
│   │   └── index.css            # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md                    # This file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URL=mongodb://localhost:27017/ecomcart
   PORT=5000
   ```
   Replace `mongodb://localhost:27017/ecomcart` with your MongoDB connection string if using MongoDB Atlas.

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` and automatically seed sample products.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

## 🚀 Usage

1. Ensure both backend and frontend servers are running
2. Open your browser and navigate to `http://localhost:5173`
3. Browse products on the homepage
4. Add items to cart by clicking "Add to Cart"
5. View cart items in the navigation bar
6. Proceed to checkout to complete your order
7. Fill out the checkout form and submit to see the receipt

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process checkout

## 🎨 UI/UX Features

- **Gradient Backgrounds**: Beautiful purple-to-blue gradients
- **Hover Effects**: Smooth animations and transitions
- **Loading States**: Spinner animations during data fetching
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Modern Typography**: Clean, readable fonts and spacing
- **Interactive Elements**: Buttons with hover and scale effects

## 🔒 Security Notes

- This is a demo application with simplified authentication (guest user)
- In production, implement proper user authentication and authorization
- Add input validation and sanitization
- Use HTTPS in production
- Implement rate limiting and other security measures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the development team.

---

**Happy Shopping! 🛒✨**
