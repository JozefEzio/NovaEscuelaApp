function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">Nova Escuela</div>
            <p className="footer-description">
              Empowering education through innovative technology and personalized learning experiences.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#demo">Demo</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Nova Escuela. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer