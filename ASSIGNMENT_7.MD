# Assignment 7: React Data Fetching Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Data Fetching Building Personal Blog Assignment
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: High
- **Prerequisite**: [ASSIGNMENT_6.MD](./ASSIGNMENT_6.MD)

## 🎯 วัตถุประสงค์
เข้าใจและใช้งานการดึงข้อมูลจากภายนอก (API) ใน React

## 📚 Learning Outcomes
- เข้าใจ `useEffect` hook สำหรับ side effects
- ใช้ `fetch` API ดึงข้อมูล
- จัดการ loading state และ error state
- ใช้ async/await กับ data fetching

## ✅ ข้อกำหนด (Requirements) - ทำเสร็จแล้ว

### 1. Create Real API Integration ✅
- **สร้าง**: `src/api/blogApi.js` ✅
- **ฟังก์ชัน**: `fetchBlogPosts()`, `fetchCategories()` ✅
- **API URL**: `https://blog-post-project-api.vercel.app/posts` ✅
- **Axios**: ใช้ HTTP client สำหรับ API calls ✅
- **Date Formatting**: แปลง ISO 8601 → readable format ✅

### 2. Data Fetching with useEffect ✅
- **แก้ไข**: `src/components/ArticleSection.jsx` ✅
- **ใช้ `useEffect`**: ดึงข้อมูลเมื่อ component mount ✅
- **State**: `posts`, `categories`, `loading`, `error`, `page`, `hasMore` ✅
- **Dependency array**: `[selectedCategory]`, `[page]` ✅
- **Real API**: ใช้ข้อมูลจาก server จริง ✅

### 3. Loading and Error States ✅
- **Loading**: แสดง "Loading..." ระหว่างรอข้อมูล ✅
- **Error**: แสดง "Error: Failed to fetch data" ✅
- **Success**: แสดงข้อมูลเมื่อโหลดเสร็จ ✅
- **Pagination Loading**: แสดง "Loading..." บน View More button ✅

## 📝 โค้ดที่ทำเสร็จแล้ว

### Real API Integration (src/api/blogApi.js) ✅
```jsx
import axios from 'axios';

const API_BASE_URL = 'https://blog-post-project-api.vercel.app';

// แปลงวันที่จาก ISO 8601 เป็นรูปแบบ "11 September 2024"
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

// ดึงข้อมูลบทความจาก API
export const fetchBlogPosts = async (page = 1, limit = 6, category = '', keyword = '') => {
  try {
    const params = { page, limit };
    
    if (category && category !== 'Highlight') {
      params.category = category;
    }
    
    if (keyword) {
      params.keyword = keyword;
    }

    const response = await axios.get(`${API_BASE_URL}/posts`, { params });
    
    // แปลงวันที่ในข้อมูลที่ได้จาก API
    const formattedPosts = response.data.posts.map(post => ({
      ...post,
      date: formatDate(post.date)
    }));

    return {
      ...response.data,
      posts: formattedPosts
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

// ดึงข้อมูล categories (mock function)
export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Highlight", "Cat", "Inspiration", "General"]);
    }, 100);
  });
};
```

### Data Fetching in ArticleSection
```jsx
import { useState, useEffect } from 'react';
import { fetchBlogPosts, fetchCategories } from '../api/blogApi';

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articlesData, categoriesData] = await Promise.all([
          fetchBlogPosts(),
          fetchCategories()
        ]);
        setArticles(articlesData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // ... render articles and categories
  );
};
```

## 🔍 วิธีตรวจสอบความสำเร็จ - ผ่านแล้ว

### Checklist ✅
- [x] สร้าง real API functions ✅
- [x] ใช้ `useEffect` ดึงข้อมูล ✅
- [x] มี loading state ✅
- [x] มี error handling ✅
- [x] ข้อมูลแสดงถูกต้องเมื่อโหลดเสร็จ ✅
- [x] Category filtering ทำงาน ✅
- [x] Pagination ด้วย View More ✅
- [x] Date formatting จาก ISO ✅

### Testing ✅
1. ✅ แสดง "Loading..." ขณะโหลด
2. ✅ ข้อมูลแสดงหลังจากเชื่อมต่อ API
3. ✅ Error handling ทำงานเมื่อ API ล้มเหลว
4. ✅ Category filtering ทำงานถูกต้อง
5. ✅ Pagination ด้วย View More ทำงาน
6. ✅ Date formatting แสดงผลถูกต้อง

## 🚧 ปัญหาที่พบบ่อย
- ลืม dependency array ใน `useEffect`
- ไม่ handle loading state
- Memory leaks (ไม่ cleanup)
- ใช้ async function ผิดใน `useEffect`

## 📁 Files ที่แก้ไขแล้ว ✅
- `src/api/blogApi.js` (สร้างใหม่) ✅
- `src/components/ArticleSection.jsx` (แก้ไข) ✅
- `package.json` (เพิ่ม axios dependency) ✅

## 🎉 สรุปผลการทำ Assignment 7

**สถานะ: ✅ เสร็จสมบูรณ์ 100%**

### ที่ทำได้:
1. ✅ ติดตั้ง axios สำหรับ HTTP requests
2. ✅ สร้าง `src/api/blogApi.js` สำหรับ API integration
3. ✅ ใช้ API จริงจาก `https://blog-post-project-api.vercel.app/posts`
4. ✅ แปลงวันที่จาก ISO 8601 เป็น readable format
5. ✅ Implement useEffect สำหรับ data fetching
6. ✅ เพิ่ม state management ครบถ้วน (posts, loading, error, pagination)
7. ✅ Category filtering ด้วย API calls
8. ✅ Pagination ด้วย View More button (6 posts per page)
9. ✅ Loading states และ error handling
10. ✅ Debug console logs สำหรับ troubleshooting

### หลักการที่ได้เรียนรู้:
- **API Integration**: การเชื่อมต่อกับ external API
- **useEffect Hook**: การจัดการ side effects ใน React
- **State Management**: การจัดการหลาย states พร้อมกัน
- **Async/Await**: การทำงานกับ asynchronous operations
- **Error Handling**: การจัดการกับ errors อย่างเหมาะสม
- **Pagination**: การแบ่งข้อมูลเป็นหน้าๆ
- **Loading States**: การแสดงสถานะการโหลด
- **Date Formatting**: การแปลงรูปแบบวันที่
- **React Best Practices**: การเขียนโค้ดที่สะอาดและ maintainable

### ฟีเจอร์พิเศษ (Challenge):
- ✅ **Pagination**: โหลดข้อมูลแบบจำกัด 6 รายการต่อหน้า
- ✅ **View More**: โหลดเพิ่มข้อมูลแบบ append (ไม่ replace)
- ✅ **Category Filtering**: กรองข้อมูลตามหมวดหมู่แบบ real-time
- ✅ **Smart Loading**: แยก loading state ระหว่าง initial และ pagination

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
