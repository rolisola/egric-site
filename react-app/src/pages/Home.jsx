import './Page.css';

function Home() {
  return (
    <div className="page">
      <div className="page-container">
        <h1>Welcome to MyApp</h1>
        <p>This is the home page of our React application.</p>
        <div className="content-section">
          <h2>Featured Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="content-section">
          <h2>Getting Started</h2>
          <p>Explore our services and products using the navigation menu above.</p>
        </div>
        {/* Conteúdo adicional para permitir scroll */}
        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="content-section">
          <h2>Our Mission</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="content-section">
          <h2>Contact Information</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
