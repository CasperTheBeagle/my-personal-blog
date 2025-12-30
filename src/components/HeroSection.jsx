import React from 'react';

const HeroSection = () => {
  return (
    <section className="main-container hero-wrapper">
      
      {/* Left Side: Text Content */}
      <div className="hero-text">
        <h1>Stay Informed,<br />Stay Inspired</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '400px' }}>
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
        </p>
        
        <div className="author-profile">
          <img 
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Author" 
            className="author-avatar"
          />
          <div>
             <span className="label" style={{marginBottom:0}}>AUTHOR</span>
             <h3 style={{margin:0}}>Thompson P.</h3>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hero-image-container">
        <img 
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Man with cat" 
        />
      </div>

    </section>
  );
};

export default HeroSection;