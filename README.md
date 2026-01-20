# Fashion E-Commerce Website

A modern, responsive e-commerce platform for fashion and clothing items built with React and Vite. Browse products, manage your wishlist, add items to cart, and place orders with a seamless user experience.

## Features

- 🛍️ **Product Catalog** - Browse fashion collections with detailed product information
- 🔍 **Search & Filter** - Search products and filter by categories
- ❤️ **Wishlist** - Save favorite items for later
- 🛒 **Shopping Cart** - Add/remove items, manage quantities, view totals
- 👤 **User Authentication** - Login system for personalized experience
- 📦 **Order Management** - Place orders and track order history
- 📧 **Newsletter** - Subscribe to stay updated on new arrivals
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean interface with promotional banners and polished styling

## Tech Stack

### Frontend

- **React** 18.3.1 - UI library for building interactive interfaces
- **React Router DOM** 6.26.1 - Client-side routing and navigation
- **React Toastify** 10.0.5 - Toast notifications for user feedback
- **Context API** - State management for app-wide data

### Styling

- **Tailwind CSS** 3.4.10 - Utility-first CSS framework
- **PostCSS** 8.4.41 - CSS processing and transformations
- **Autoprefixer** - Automatic vendor prefixing for cross-browser compatibility

### Development & Build Tools

- **Vite** 5.4.1 - Next-generation frontend build tool with HMR
- **@vitejs/plugin-react** - Babel integration for Fast Refresh
- **ESLint** 9.9.0 - Code quality and linting
- **ESLint React Plugins** - React-specific linting rules

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecommerce-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components for different routes
├── context/         # React Context for state management
├── Data/            # Data files and utilities
├── assets/          # Images and static assets
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Key Pages

- **Home** - Landing page with featured products and promotions
- **Collection** - Browse all available clothing items
- **Categories** - Filter products by category
- **Product** - Detailed product view with description and images
- **Cart** - Shopping cart management and checkout
- **Wishlist** - Your saved favorite items
- **Orders** - View your order history
- **About** - Company information
- **Contact** - Get in touch with us

## State Management

The app uses React's Context API via `StoreContext.jsx` for managing global state including:

- Product data
- Shopping cart items
- Wishlist items
- User authentication state

## Data Source

Product data is loaded from `Clothing.json` containing product information, pricing, images, and availability.

## Responsive Design

The app uses Tailwind CSS's responsive breakpoints for optimal viewing on all devices:

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface

## Future Enhancements

- Backend integration for real product management
- Payment gateway integration
- User account and profile management
- Product reviews and ratings
- Inventory management
- Admin dashboard

## License

This project is open source and available under the MIT License.
