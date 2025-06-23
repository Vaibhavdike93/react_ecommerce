import { useEffect, useState } from "react";
import Footer from "./comm/Footer";
import Navbar from "./comm/Navbar";
import ProductCard from "./comm/Productcard";
import axios from "axios";

function Home() 
{

  const [sliders, setSliders] = useState([]);
  useEffect(()=>{

    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
      setSliders(res.data);
    });
  },[]);

  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="hero-section mb-5">
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <button 
                key={index}
                type="button" 
                data-bs-target="#bannerCarousel" 
                data-bs-slide-to={index} 
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner rounded-3 overflow-hidden">
           { sliders.map((val, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <a href={val.slider_btn} target="_blank">
                <img 
                  src={val.slider_img} 
                  className="d-block w-100" 
                  alt={`Banner ${index + 1}`} 
                  style={{ height: '500px', objectFit: 'cover' }} 
                />
                </a>
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
                  <h3 className="fw-bold">{val.slider_head}</h3>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Product Sections */}
      <div className="container">
        <ProductSection 
          title="Featured Products" 
          subtitle="Our carefully curated selection of premium products"
        />
        
        <ProductSection 
          title="New Arrivals" 
          subtitle="Discover our latest additions to the collection"
          className="mt-5"
        />
        
        <ProductSection 
          title="Best Sellers" 
          subtitle="Customer favorites flying off the shelves"
          className="mt-5"
        />
      </div>
      <Footer />
    </div>
    
  );
}

// Reusable Product Section Component
function ProductSection({ title, subtitle, className = "" }) {
  return (
    <section className={`product-section ${className}`}>
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="row g-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="col-lg-3 col-md-6">
            <ProductCard data={[]} />
          </div>
        ))}
      </div>
    </section>
  );
}



export default Home;