# Assignment 9: React Router Building Personal Blog Part 2

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Router Building Personal Blog Assignment Part 2
- **สถานะ**: ❌ ยังไม่เสร็จ
- **Priority**: High
- **Prerequisite**: [ASSIGHMENT_8.MD](./ASSIGHMENT_8.MD)

## 🎯 วัตถุประสงค์
พัฒนาการใช้งาน React Router ขั้นสูงและเชื่อมต่อกับระบบบทความ

## 📚 Learning Outcomes
- ใช้ `useParams` สำหรับ dynamic routing
- ใช้ `useNavigate` สำหรับ programmatic navigation
- ใช้ `useLocation` และ `Link` กับ state
- สร้าง protected routes (ถ้าต้องการ)
- ใช้ `Outlet` สำหรับ nested routes

## ✅ ข้อกำหนด (Requirements)

### 1. Dynamic Blog Detail Page
- **แก้ไข**: `src/pages/BlogDetail.jsx`
- **ใช้ `useParams`**: ดึง `id` จาก URL
- **ใช้ `useEffect`**: ดึงข้อมูลบทความตาม ID
- **แสดง**: ข้อมูลบทความเต็ม
- **Loading/Error**: จัดการ state ต่างๆ

### 2. BlogCard Links
- **แก้ไข**: `src/components/BlogCard.jsx`
- **ใช้ `<Link>`**: คลุกทั้งการ์ด
- **Navigate**: ไปหน้า `/blog/:id`
- **Pass state**: ส่งข้อมูลบางส่วนผ่าน Link state

### 3. Category Navigation
- **แก้ไข**: `src/components/ArticleSection.jsx`
- **URL Parameters**: `/category/:categoryName`
- **Filter**: กรองบทความตาม URL parameter
- **Active State**: แสดงหมวดหมู่ที่เลือก

### 4. Search Functionality
- **เพิ่ม**: Search results page
- **URL Query**: `/search?q=keyword`
- **ใช้ `useSearchParams`**: อ่านค่า query parameters
- **Filter**: กรองบทความตามคำค้นหา

### 5. Breadcrumb Navigation
- **สร้าง**: `src/components/Breadcrumb.jsx`
- **แสดง**: ตำแหน่งปัจจุบัน
- **Navigate**: กลับไปหน้าก่อนหน้าได้

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### BlogDetail Page with Dynamic Data
```jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogById } from '../api/blogApi';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogById(id);
        setArticle(data);
      } catch (err) {
        setError('Article not found');
        setTimeout(() => navigate('/'), 2000);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, navigate]);

  if (loading) return <div>Loading article...</div>;
  if (error) return <div>{error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Breadcrumb category={article.category} title={article.title} />
      
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600">
            {article.category}
          </span>
          <span className="text-brown-400">{article.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brown-600 mb-6">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-3">
          <img 
            src={article.authorImage} 
            alt={article.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{article.author}</p>
            <p className="text-sm text-brown-400">Author</p>
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <p className="text-lg leading-relaxed text-brown-400">
          {article.description}
        </p>
        {/* TODO: Add full article content */}
      </div>

      <footer className="mt-12 pt-8 border-t border-brown-300">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-500"
        >
          ← Back to Articles
        </Link>
      </footer>
    </article>
  );
};
```

### BlogCard with Link
```jsx
import { Link } from 'react-router-dom';

export default function BlogCard({ image, category, title, description, author, date, authorImage }) {
  return (
    <div className="flex flex-col gap-4">
      <Link 
        to={`/blog/${id}`} // ต้องมี id prop
        state={{ from: 'home' }} // ส่ง state ถ้าต้องการ
        className="relative h-[212px] sm:h-[360px] block"
      >
        <img 
          className="w-full h-full object-cover rounded-md hover:opacity-90 transition-opacity" 
          src={image} 
          alt={title} 
        />
      </Link>

      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>

        <Link to={`/blog/${id}`}>
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        <div className="flex items-center text-sm">
          <img 
            className="w-8 h-8 rounded-full mr-2 object-cover" 
            src={authorImage} 
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
```

### Category Routes in App.jsx
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog/:id" element={<BlogDetail />} />
  <Route path="/category/:categoryName" element={<CategoryPage />} />
  <Route path="/search" element={<SearchPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Breadcrumb Component
```jsx
import { Link } from 'react-router-dom';

export const Breadcrumb = ({ category, title }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-brown-400 mb-8">
      <Link to="/" className="hover:text-brown-600">
        Home
      </Link>
      <span>/</span>
      <Link 
        to={`/category/${category.toLowerCase()}`} 
        className="hover:text-brown-600"
      >
        {category}
      </Link>
      <span>/</span>
      <span className="text-brown-600">{title}</span>
    </nav>
  );
};
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] BlogDetail แสดงข้อมูลตาม ID
- [ ] BlogCard คลิกไปหน้า detail ได้
- [ ] Category navigation ทำงาน
- [ ] Search functionality ทำงาน
- [ ] Breadcrumb แสดงถูกต้อง
- [ ] Back/forward browser buttons ทำงาน

### Testing
1. Click บทความ → ไปหน้า detail พร้อมข้อมูลถูกต้อง
2. พิมพ์ URL โดยตรง → แสดงข้อมูลถูกต้อง
3. Click category → กรองบทความตามหมวดหมู่
4. ค้นหา → แสดงผลลัพธ์การค้นหา
5. ใช้ browser back button → กลับหน้าก่อนหน้าได้

## 🚧 ปัญหาที่พบบ่อย
- ลืมใช้ `useParams` อ่าน URL parameters
- Link state ไม่ทำงานตามต้องการ
- ไม่ handle loading/error states
- ใช้ `useHistory` แทน `useNavigate` (เก่า)

## 📁 Files ที่ต้องแก้ไข
- `src/App.jsx` (เพิ่ม routes)
- `src/pages/BlogDetail.jsx` (แก้ไข)
- `src/components/BlogCard.jsx` (แก้ไข)
- `src/components/ArticleSection.jsx` (แก้ไข)
- `src/components/Breadcrumb.jsx` (สร้างใหม่)
- `src/pages/CategoryPage.jsx` (สร้างใหม่)
- `src/pages/SearchPage.jsx` (สร้างใหม่)
- `src/api/blogApi.js` (เพิ่ม fetchBlogById)

## 📝 ตัวอย่างโค้ดที่ต้องทำ

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
