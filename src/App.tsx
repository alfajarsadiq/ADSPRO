import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Page and Component Imports
import Home from './pages/Home';
import About from './pages/About';
// import Products from './pages/Products';
import Partners from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';          // <-- Added
import BlogPost from './pages/BlogPost';  // <-- Added
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// REMOVE THIS LINE:
// import SmoothScroll from './components/SmoothScroll'; 

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for inner pages (Navbar + Content + Footer)
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* REMOVED SmoothScroll wrapper. 
          We use a standard div relative wrapper instead. 
          This prevents the "jump to top" bug. 
      */}
      <div className="relative isolate min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Inner Pages */}
          <Route element={<MainLayout />}>
            <Route path="/about" element={<About />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/services" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* New Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
