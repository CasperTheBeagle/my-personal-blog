# Assignment 2: React Components Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Components Building Personal Blog Assignment
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: Low
- **Prerequisite**: [ASSIGHMENT_1.MD](./ASSIGHMENT_1.MD)

## 🎯 วัตถุประสงค์
สร้าง React components พื้นฐานสำหรับเว็บบล็อก

## 📚 Learning Outcomes
- เข้าใจ component structure ใน React
- สร้าง reusable components
- แยก UI เป็น components ย่อยๆ
- ใช้ props พื้นฐาน

## ✅ ข้อกำหนด (Requirements)

### 1. Navigation Bar Component
- **สร้าง**: `src/components/NavBar.jsx`
- **ฟีเจอร์**: Logo, Login/Signup buttons, Hamburger menu
- **Responsive**: Desktop แสดงเมนู, Mobile แสดง hamburger

### 2. Hero Section Component
- **สร้าง**: `src/components/HeroSection.jsx`
- **เนื้อหา**: หัวข้อใหญ่, รูปผู้เขียน, ข้อมูลส่วนตัว
- **Layout**: 3 columns grid

### 3. Article Section Component
- **สร้าง**: `src/components/ArticleSection.jsx`
- **ฟีเจอร์**: Filter buttons, Search bar, Article grid
- **Responsive**: 1-3 columns grid

### 4. Blog Card Component
- **สร้าง**: `src/components/BlogCard.jsx`
- **เนื้อหา**: รูปภาพ, หมวดหมู่, หัวข้อ, คำอธิบาย, ผู้เขียน

### 5. Footer Component
- **สร้าง**: `src/components/Footer.jsx`
- **เนื้อหา**: Social links, contact info

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### NavBar.jsx
```jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-green-theme">
          hh.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-base rounded-full px-6">Log in</button>
          <button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 text-base">
            Sign up
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full px-6 py-4 shadow-lg">
          {/* Mobile menu items */}
        </div>
      )}
    </nav>
  );
};

export { NavBar };
```

### HeroSection.jsx
```jsx
const HeroSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-8 md:px-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Column 1: Heading */}
        <div className="md:col-span-4 flex flex-col justify-center h-full order-1">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-serif text-brown-600">
            Stay <br /> Informed, <br /> Stay Inspired
          </h1>
          <p className="text-brown-400 text-lg leading-relaxed max-w-sm">
            Discover a World of Knowledge at Your Fingertips.
          </p>
        </div>

        {/* Column 2: Image */}
        <div className="md:col-span-4 flex justify-center order-2">
          <div className="relative w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-3xl">
            <img
              src="https://example.com/author.jpg"
              alt="Author"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Column 3: Author Bio */}
        <div className="md:col-span-4 flex flex-col justify-center h-full order-3">
          <span className="text-brown-400 text-sm uppercase tracking-wider mb-2">
            - Author
          </span>
          <h3 className="text-2xl font-bold mb-4 font-serif">
            Thompson P.
          </h3>
          <p className="text-brown-400 leading-relaxed">
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
```

### BlogCard.jsx
```jsx
export default function BlogCard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img 
          className="w-full h-full object-cover rounded-md" 
          src="https://example.com/article.jpg" 
          alt="Article" 
        />
      </a>

      {/* Content */}
      <div className="flex flex-col">
        {/* Category */}
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            Cat
          </span>
        </div>

        {/* Title */}
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do
          </h2>
        </a>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey.
        </p>

        {/* Author & Date */}
        <div className="flex items-center text-sm">
          <img 
            className="w-8 h-8 rounded-full mr-2 object-cover" 
            src="https://example.com/author.jpg" 
            alt="Author" 
          />
          <span>Thompson P.</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>11 September 2024</span>
        </div>
      </div>
    </div>
  );
}
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] สร้าง components ครบทั้ง 5 ตัว
- [ ] App.jsx นำเข้า components มาแสดง
- [ ] Layout แสดงถูกต้อง
- [ ] Responsive design ทำงาน
- [ ] ไม่มี console errors

### Testing
1. ตรวจสอบว่า components แสดงใน App.jsx
2. Test responsive breakpoints
3. ตรวจสอบ mobile menu toggle
4. ตรวจสอบ grid layouts

## 🚧 ปัญหาที่พบบ่อย
- ลืม export components
- Import paths ผิด
- CSS classes ไม่ทำงาน
- Responsive ไม่ถูกต้อง

## 📁 Files ที่ต้องสร้าง
- `src/components/NavBar.jsx`
- `src/components/HeroSection.jsx`
- `src/components/ArticleSection.jsx`
- `src/components/BlogCard.jsx`
- `src/components/Footer.jsx`
- `src/App.jsx` (แก้ไข)

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
