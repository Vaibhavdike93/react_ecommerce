function Footer() {
  return (
    <footer className="bg-light text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-shop fs-3 me-2 text-primary"></i>
              <h4 className="mb-0">ShopZone</h4>
            </div>

            <p className="text-muted">
              Your premium destination for quality products with fast delivery and exceptional customer service.
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'Products', 'New Arrivals', 'Deals', 'About Us'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-muted text-decoration-none hover-text-light">
                    <i className="bi bi-chevron-right small me-1"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Help</h5>
            <ul className="list-unstyled">
              {['FAQs', 'Shipping', 'Returns', 'Order Status', 'Payment Options'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-muted text-decoration-none hover-text-light">
                    <i className="bi bi-chevron-right small me-1"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt me-3 text-primary"></i>
                <span>123 Business Ave, Suite 500, New York, NY 10001</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone me-3 text-primary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-envelope me-3 text-primary"></i>
                <span>support@shopzone.com</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h6 className="mb-2">Subscribe to Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-secondary border-0" 
                  placeholder="Your email" 
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        
        <div className="row mt-3">
          <div className="col-md-6 text-center text-md-start">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} ShopZone. All rights reserved.
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="text-muted">
              <a href="#" className="text-decoration-none text-muted me-3">Privacy Policy</a>
              <a href="#" className="text-decoration-none text-muted me-3">Terms of Service</a>
              <a href="#" className="text-decoration-none text-muted">Cookies</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;