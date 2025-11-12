import './Page.css';

function Contact() {
  return (
    <div className="page">
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or support.</p>
        <div className="content-section">
          <h2>Contact Information</h2>
          <p>Email: contact@myapp.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="content-section">
          <h2>Office Location</h2>
          <p>123 Business Street, Tech City, TC 12345</p>
        </div>
        <div className="content-section">
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
        <div className="content-section">
          <h2>Follow Us</h2>
          <p>Stay connected on social media for the latest updates.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
