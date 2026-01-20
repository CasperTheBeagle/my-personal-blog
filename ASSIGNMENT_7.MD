# Assignment 7: React Data Fetching Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Data Fetching Building Personal Blog Assignment
- **สถานะ**: ❌ ยังไม่เสร็จ
- **Priority**: High
- **Prerequisite**: [ASSIGHMENT_6.MD](./ASSIGHMENT_6.MD)

## 🎯 วัตถุประสงค์
เข้าใจและใช้งานการดึงข้อมูลจากภายนอก (API) ใน React

## 📚 Learning Outcomes
- เข้าใจ `useEffect` hook สำหรับ side effects
- ใช้ `fetch` API ดึงข้อมูล
- จัดการ loading state และ error state
- ใช้ async/await กับ data fetching

## ✅ ข้อกำหนด (Requirements)

### 1. Create Mock API
- **สร้าง**: `src/api/blogApi.js`
- **ฟังก์ชัน**: `fetchBlogPosts()`, `fetchCategories()`
- **Mock delay**: ใช้ `setTimeout` จำลองการรอข้อมูล
- **Return**: Promise ที่ resolve เป็นข้อมูล

### 2. Data Fetching with useEffect
- **แก้ไข**: `src/components/ArticleSection.jsx`
- **ใช้ `useEffect`**: ดึงข้อมูลเมื่อ component mount
- **State**: `loading`, `error`, `articles`, `categories`
- **Dependency array**: `[]` (run once)

### 3. Loading and Error States
- **Loading**: แสดง spinner หรือ skeleton
- **Error**: แสดงข้อความ error
- **Success**: แสดงข้อมูลเมื่อโหลดเสร็จ

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### Mock API (src/api/blogApi.js)
```jsx
export const fetchBlogPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Understanding Cat Behavior",
          description: "Dive into the curious world of cat behavior...",
          category: "Cat",
          author: "Thompson P.",
          date: "11 September 2024",
          image: "https://example.com/cat.jpg",
          authorImage: "https://example.com/author.jpg"
        },
        // ... more articles
      ]);
    }, 1000); // Simulate network delay
  });
};

export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Highlight", "Cat", "Inspiration", "General"]);
    }, 500);
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

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] สร้าง mock API functions
- [ ] ใช้ `useEffect` ดึงข้อมูล
- [ ] มี loading state
- [ ] มี error handling
- [ ] ข้อมูลแสดงถูกต้องเมื่อโหลดเสร็จ

### Testing
1. ตรวจสอบว่าแสดง "Loading..." ขณะโหลด
2. ตรวจสอบว่าข้อมูลแสดงหลังจาก 1 วินาที
3. จำลอง error และตรวจสอบ error message
4. ตรวจสอบ Network tab ใน DevTools

## 🚧 ปัญหาที่พบบ่อย
- ลืม dependency array ใน `useEffect`
- ไม่ handle loading state
- Memory leaks (ไม่ cleanup)
- ใช้ async function ผิดใน `useEffect`

## 📁 Files ที่ต้องสร้าง/แก้ไข
- `src/api/blogApi.js` (สร้างใหม่)
- `src/components/ArticleSection.jsx` (แก้ไข)

## 📝 ตัวอย่างโค้ดที่ต้องทำ

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
