# Assignment 8: React Router Building Personal Blog Part 1

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Router Building Personal Blog Assignment Part 1
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: High
- **Prerequisite**: [ASSIGHMENT_7.MD](./ASSIGHMENT_7.MD)

## 🎯 วัตถุประสงค์
ตั้งค่า React Router สำหรับการนำทางระหว่างหน้าต่างๆ ในเว็บบล็อก

## 📚 Learning Outcomes
- เข้าใจการทำงานของ React Router
- ติดตั้งและตั้งค่า React Router
- สร้าง routes พื้นฐาน
- ใช้ `BrowserRouter`, `Routes`, `Route` components
- ใช้ `Link` component สำหรับ navigation

## ✅ ข้อกำหนด (Requirements)

### 1. Install React Router
- **ติดตั้ง**: `npm install react-router-dom`
- **เพิ่ม**: ใน `package.json`

### 2. Setup Router in App.jsx
- **แก้ไข**: `src/App.jsx`
- **ครอบด้วย**: `<BrowserRouter>`
- **สร้าง**: `<Routes>` และ `<Route>` components
- **Routes**: Home, About, Blog Detail, Not Found

### 3. Create Page Components
- **สร้าง**: `src/pages/` folder
- **Home.jsx**: หน้าแรก (เอา Hero + Articles มารวม)
- **About.jsx**: หน้า About
- **BlogDetail.jsx**: หน้าแสดงบทความเดี่ยว
- **NotFound.jsx**: หน้า 404

### 4. Navigation Links
- **แก้ไข**: `src/components/NavBar.jsx`
- **ใช้**: `<Link>` แทน `<a href="#">`
- **Routes**: Home, About

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### App.jsx with Router
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BlogDetail } from './pages/BlogDetail';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brown-100 text-brown-600 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### NavBar with Links
```jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="text-2xl font-bold tracking-tight text-green-theme">
        <Link to="/">hh.</Link>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 text-base">
          Sign up
        </Button>
      </div>
    </nav>
  );
};
```

### Home Page
```jsx
import { HeroSection } from '../components/HeroSection';
import { ArticleSection } from '../components/ArticleSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ArticleSection />
    </>
  );
};
```

### Blog Detail Page
```jsx
import { useParams } from 'react-router-dom';

export const BlogDetail = () => {
  const { id } = useParams();
  
  // TODO: Fetch article by ID
  // TODO: Display article content
  
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <h1>Blog Post {id}</h1>
      <p>Article content will be displayed here...</p>
    </div>
  );
};
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] ติดตั้ง react-router-dom สำเร็จ
- [ ] App.jsx ใช้ BrowserRouter ได้
- [ ] สร้าง page components ครบ
- [ ] NavBar ใช้ Link components
- [ ] Routes ทำงานถูกต้อง
- [ ] สามารถนำทางระหว่างหน้าได้

### Testing
1. Click logo → ไปหน้า home
2. Click About → ไปหน้า about
3. พิมพ์ /blog/1 → ไปหน้า blog detail
4. พิมพ์ URL ผิด → ไปหน้า 404
5. ตรวจสอบ browser back/forward buttons

## 🚧 ปัญหาที่พบบ่อย
- ลืมครอบ App ด้วย BrowserRouter
- ใช้ `<a href>` แทน `<Link>`
- Route path ผิด syntax
- ไม่มี NotFound route

## 📁 Files ที่ต้องสร้าง/แก้ไข
- `package.json` (เพิ่ม dependency)
- `src/App.jsx` (แก้ไข)
- `src/components/NavBar.jsx` (แก้ไข)
- `src/pages/Home.jsx` (สร้างใหม่)
- `src/pages/About.jsx` (สร้างใหม่)
- `src/pages/BlogDetail.jsx` (สร้างใหม่)
- `src/pages/NotFound.jsx` (สร้างใหม่)

## 📝 ตัวอย่างโค้ดที่ต้องทำ

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
