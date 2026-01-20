# Assignment 3: React Modules Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Modules Building Personal Blog Assignment
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: Low
- **Prerequisite**: [ASSIGHMENT_2.MD](./ASSIGHMENT_2.MD)

## 🎯 วัตถุประสงค์
จัดระเบียบโค้ดด้วย ES6 modules และตั้งค่า project structure ที่ดี

## 📚 Learning Outcomes
- เข้าใจ ES6 modules (import/export)
- จัดระเบียบโครงสร้างโฟลเดอร์
- ใช้ path aliases ใน Vite
- แยก components และ utilities

## ✅ ข้อกำหนด (Requirements)

### 1. Module Structure
- **แยก**: Components เป็นไฟล์独立
- **ใช้**: Named exports และ default exports
- **จัดระเบียบ**: โฟลเดอร์ตามหน้าที่

### 2. Path Aliases
- **ตั้งค่า**: `@` ชี้ไปที่ `src/`
- **แก้ไข**: `vite.config.js`
- **ใช้**: `import Component from '@/components/Component'`

### 3. Component Organization
- **สร้าง**: `src/components/` สำหรับ UI components
- **สร้าง**: `src/components/ui/` สำหรับ reusable UI
- **สร้าง**: `src/data/` สำหรับข้อมูล
- **สร้าง**: `src/assets/` สำหรับ static files

### 4. Import/Export Patterns
- **Default export**: สำหรับ main component
- **Named export**: สำหรับ utilities หรือ multiple exports
- **Re-export**: สำหรับ index files

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### vite.config.js (เพิ่ม path alias)
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Component Exports
```jsx
// src/components/NavBar.jsx
const NavBar = () => {
  // component logic
};

export { NavBar }; // Named export

// src/components/BlogCard.jsx
export default function BlogCard() {
  // component logic
} // Default export

// src/components/index.jsx (re-export)
export { NavBar } from './NavBar';
export { default as BlogCard } from './BlogCard';
export { HeroSection } from './HeroSection';
```

### Import Patterns
```jsx
// src/App.jsx
import { NavBar } from '@/components/NavBar'; // Named import
import BlogCard from '@/components/BlogCard'; // Default import
import { HeroSection, Footer } from '@/components'; // Multiple imports

// หรือใช้ index file
import { NavBar, HeroSection, Footer } from '@/components';
import BlogCard from '@/components/BlogCard';
```

### Data Module
```jsx
// src/data/blogPosts.js
export const blogPosts = [
  {
    id: 1,
    title: "Understanding Cat Behavior",
    description: "Dive into the curious world...",
    category: "Cat",
    author: "Thompson P.",
    date: "11 September 2024",
    image: "https://example.com/cat.jpg"
  },
  // ... more posts
];

export const categories = ["Highlight", "Cat", "Inspiration", "General"];

// src/components/ArticleSection.jsx
import { blogPosts, categories } from '@/data/blogPosts';
```

### UI Components Module
```jsx
// src/components/ui/Button.jsx
export const Button = ({ variant, size, children, ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      {...props}
    >
      {children}
    </button>
  );
};

// src/components/ui/Input.jsx
export const Input = ({ type, placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      {...props}
    />
  );
};

// src/components/ui/index.jsx
export { Button } from './Button';
export { Input } from './Input';
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] ใช้ path alias `@` ได้
- [ ] Components แยกเป็นไฟล์独立
- [ ] Import/export ทำงานถูกต้อง
- [ ] โครงสร้างโฟลเดอร์เป็นระเบียบ
- [ ] ไม่มี import errors

### Testing
1. ตรวจสอบว่า `@` alias ทำงาน
2. ทดสอบ import จากต่างโฟลเดอร์
3. ตรวจสอบว่า components ทำงานเหมือนเดิม
4. ตรวจสอบ build process

## 🚧 ปัญหาที่พบบ่อย
- Path alias ไม่ทำงาน
- Import/export syntax ผิด
- Circular dependencies
- File paths ผิด

## 📁 Files ที่ต้องแก้ไข
- `vite.config.js` (เพิ่ม alias)
- `src/App.jsx` (แก้ไข imports)
- `src/components/*.jsx` (แก้ไข exports)
- `src/data/blogPosts.js` (สร้างใหม่)
- `src/components/ui/` (สร้างใหม่)

## 📂 โครงสร้างโฟลเดอร์ที่ควรมี
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── index.jsx
│   ├── NavBar.jsx
│   ├── HeroSection.jsx
│   ├── ArticleSection.jsx
│   ├── BlogCard.jsx
│   ├── Footer.jsx
│   └── index.jsx
├── data/
│   └── blogPosts.js
├── assets/
│   └── images/
├── App.jsx
└── main.jsx
```

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
