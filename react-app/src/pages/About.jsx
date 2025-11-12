import './Page.css';

function About() {
  return (
    <div className="page">
      <div className="page-container">
        <h1>About Us</h1>
        <p>Learn more about our company and our mission.</p>
        <div className="content-section">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="content-section">
          <h2>Our Team</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="content-section">
          <h2>Our Values</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="content-section">
          <h2>Our Vision</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
