import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col px-6 py-8 gap-8 max-w-md mx-auto md:max-w-5xl md:flex-row md:items-center">
      
      {/* Text Content */}
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-600 leading-[1.15]">
          Stay Informed, <br />
          Stay Inspired
        </h1>
        <p className="text-brown-400 text-lg leading-relaxed">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
        </p>
        
        {/* Author Widget */}
        <div className="flex items-center gap-4 mt-2">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
              alt="Thompson P." 
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex flex-col">
                <span className="text-xs text-brown-400 font-semibold uppercase tracking-wide">Author</span>
                <span className="text-base text-brown-600 font-bold">Thompson P.</span>
            </div>
        </div>
      </div>

      {/* Image Content - ใช้รูปแมวตามโจทย์ */}
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-auto md:h-[500px]">
            <img 
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" 
              alt="Cat in nature" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;