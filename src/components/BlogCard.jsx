// src/components/ui/BlogCard.jsx
import React from 'react';

// รับ props เข้ามาเพื่อทำให้ข้อมูลเป็น Dynamic
export default function BlogCard({ image, category, title, description, author, date, authorImage }) {
  return (
    <div className="flex flex-col gap-4">
      {/* ส่วนรูปภาพปก */}
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img 
          className="w-full h-full object-cover rounded-md" 
          src={image} 
          alt={title} 
        />
      </a>

      {/* ส่วนเนื้อหา */}
      <div className="flex flex-col">
        {/* Category Badge */}
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>

        {/* Title */}
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Author & Date Section */}
        <div className="flex items-center text-sm">
          <img 
            className="w-8 h-8 rounded-full mr-2 object-cover" 
            src={authorImage || "https://placehold.co/100x100"} 
            alt={author} 
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}