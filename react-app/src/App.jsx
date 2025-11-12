import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceWeb from './pages/ServiceWeb';
import ServiceMobile from './pages/ServiceMobile';
import ServiceCloud from './pages/ServiceCloud';
import Products from './pages/Products';
import ProductA from './pages/ProductA';
import ProductB from './pages/ProductB';
import ProductC from './pages/ProductC';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web" element={<ServiceWeb />} />
            <Route path="/services/mobile" element={<ServiceMobile />} />
            <Route path="/services/cloud" element={<ServiceCloud />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/product-a" element={<ProductA />} />
            <Route path="/products/product-b" element={<ProductB />} />
            <Route path="/products/product-c" element={<ProductC />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
