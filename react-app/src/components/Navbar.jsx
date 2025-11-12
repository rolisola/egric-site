import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMainNavClick = () => {
    setServicesOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleMainNavClick}>
          MyApp
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleMainNavClick}
            >
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleMainNavClick}
            >
              About
            </Link>
          </li>

          <li 
            className="navbar-item dropdown" 
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`navbar-link dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span className={`arrow ${servicesOpen ? 'open' : ''}`}>▼</span>
            </button>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/services/web" 
                    className="dropdown-link"
                    onClick={() => setServicesOpen(false)}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/mobile" 
                    className="dropdown-link"
                    onClick={() => setServicesOpen(false)}
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/cloud" 
                    className="dropdown-link"
                    onClick={() => setServicesOpen(false)}
                  >
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li 
            className="navbar-item dropdown" 
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={`navbar-link dropdown-toggle ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <span className={`arrow ${productsOpen ? 'open' : ''}`}>▼</span>
            </button>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/products/product-a" 
                    className="dropdown-link"
                    onClick={() => setProductsOpen(false)}
                  >
                    Product A
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/product-b" 
                    className="dropdown-link"
                    onClick={() => setProductsOpen(false)}
                  >
                    Product B
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/product-c" 
                    className="dropdown-link"
                    onClick={() => setProductsOpen(false)}
                  >
                    Product C
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleMainNavClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
