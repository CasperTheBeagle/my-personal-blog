// src/components/HeroSection.jsx
import React from 'react';
// อย่าลืมเอารูปแมวมาใส่ใน folder src/assets ตั้งชื่อว่า cat-hero.jpg หรือเปลี่ยน path ตามจริง
// อย่าลืมเอารูปแมวมาใส่ใน folder src/assets ตั้งชื่อว่า cat-hero.jpg หรือเปลี่ยน path ตามจริง

const HeroSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-8 md:px-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        {/* Column 1: Main Heading (Desktop: ซ้ายสุด, Mobile: บนสุด) */}
        <div className="md:col-span-4 flex flex-col justify-center h-full order-1">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-serif text-brown-600">
            Stay <br /> Informed, <br /> Stay Inspired
          </h1>
          <p className="text-brown-400 text-lg leading-relaxed max-w-sm">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
          </p>
        </div>

        {/* Column 2: Image (Desktop: ตรงกลาง, Mobile: ตรงกลาง) */}
        <div className="md:col-span-4 flex justify-center order-2">
          <div className="relative w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-3xl">
            {/* ใส่รูปจริงตรง src */}
            <img
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Author"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Column 3: Author Bio (Desktop: ขวาสุด, Mobile: ล่างสุด) */}
        <div className="md:col-span-4 flex flex-col justify-center h-full order-3 md:pt-32">
          <span className="text-brown-400 text-sm uppercase tracking-wider mb-2">
            - Author
          </span>
          <h3 className="text-2xl font-bold mb-4 font-serif">
            Thompson P.
          </h3>
          <p className="text-brown-400 leading-relaxed mb-6">
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
          </p>
          <p className="text-brown-400 leading-relaxed">
            When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
          </p>
        </div>

      </div>
    </section>
  );
};

export { HeroSection };
