# Assignment 4: React Props Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Props Building Personal Blog Assignment
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: High
- **Prerequisite**: [ASSIGNMENT_3.MD](./ASSIGNMENT_3.MD)

## 🎯 วัตถุประสงค์
เข้าใจและใช้งาน React Props ในการส่งข้อมูลระหว่าง components

## 📚 Learning Outcomes
- เข้าใจความหมายของ props ใน React
- สามารถส่งข้อมูลจาก parent component ไป child component
- ใช้ props destructuring ได้
- ใช้ default props และ props validation

## ✅ ข้อกำหนด (Requirements) - ทำเสร็จแล้ว

### 1. Props ใน BlogCard Component ✅
- **แก้ไข**: `src/components/BlogCard.jsx`
- **รับ props**: `{ image, category, title, description, author, date, authorImage }`
- **แสดงข้อมูล**: ใช้ props ที่รับมาแทนข้อมูล hardcoded
- **ผลลัพธ์**: BlogCard รับ props ทั้ง 7 ตัวได้ถูกต้อง

### 2. Props ใน ArticleSection Component ✅
- **แก้ไข**: `src/components/ArticleSection.jsx`
- **ส่ง props**: จาก `blogPosts.map()` ไปยัง `BlogCard`
- **ใช้ key prop**: `key={article.id}` ในการ map
- **ผลลัพธ์**: Import blogPosts และส่ง props ได้ถูกต้อง

### 3. Props ใน UI Components ✅
- **ตรวจสอบ**: `src/components/ui/` components
- **ใช้ spread operator**: `{...props}` สำหรับ HTML attributes
- **ใช้ destructuring**: ใน function parameters
- **ผลลัพธ์**: UI components ใช้ props ได้ถูกต้อง

## 📝 ตัวอย่างโค้ดที่ทำเสร็จแล้ว

### BlogCard.jsx (รับ props) ✅
```jsx
// ก่อนแก้ไข: ข้อมูล hardcoded
<img src="https://example.com/cat.jpg" alt="Cat" />
<h2>Hardcoded Title</h2>

// หลังแก้ไข: ใช้ props
<img src={image} alt={title} />
<h2>{title}</h2>
```

### ArticleSection.jsx (ส่ง props) ✅
```jsx
// ส่ง props ไปยัง BlogCard
{blogPosts.map((article) => (
  <BlogCard
    key={article.id}
    image={article.image}
    category={article.category}
    title={article.title}
    description={article.description}
    author={article.author}
    date={article.date}
    authorImage={article.authorImage}
  />
))}
```

## 🔍 วิธีตรวจสอบความสำเร็จ - ผ่านแล้ว

### Checklist ✅
- [x] BlogCard รับ props ทั้ง 7 ตัว
- [x] ArticleSection ส่ง props ถูกต้อง
- [x] ไม่มีข้อมูล hardcoded ใน BlogCard
- [x] ใช้ key prop ในการ map
- [x] UI components ใช้ spread operator ถูกต้อง

### Testing ✅
1. ✅ เปลี่ยนข้อมูลใน `blogPosts` array และ BlogCard เปลี่ยนตาม
2. ✅ ตรวจสอบว่า BlogCard เปลี่ยนตาม
3. ✅ Inspect React DevTools เพื่อดู props

## 🚧 ปัญหาที่พบบ่อย
- ลืมส่ง props บางตัว
- ไม่ใช้ key prop ในการ map
- ใช้ข้อมูล hardcoded อยู่

## 📁 Files ที่แก้ไขแล้ว ✅
- `src/components/BlogCard.jsx` - รับ props 7 ตัว
- `src/components/ArticleSection.jsx` - import blogPosts และส่ง props
- `src/data/blogPosts.js` - ข้อมูลบทความ 6 เรื่อง
- `src/components/ui/button.jsx` - ใช้ spread operator
- `src/components/ui/input.jsx` - ใช้ spread operator
- `src/components/ui/select.jsx` - ใช้ spread operator

## 🎉 สรุปผลการทำ Assignment 4

**สถานะ: ✅ เสร็จสมบูรณ์ 100%**

### ที่ทำได้:
1. ✅ BlogCard รับ props ทั้ง 7 ตัวได้ถูกต้อง
2. ✅ ArticleSection import blogPosts และส่ง props ได้ถูกต้อง
3. ✅ ใช้ `blogPosts.map()` และ `key={article.id}` ได้ถูกต้อง
4. ✅ UI components ใช้ spread operator ได้ถูกต้อง
5. ✅ Responsive Grid Layout ทำงานได้
6. ✅ มีข้อมูลบทความครบ 6 เรื่อง

### หลักการที่ได้เรียนรู้:
- **Props Destructuring**: รับข้อมูลจาก parent component
- **Loose Coupling**: Component แยกกันได้ ไม่ขึ้นกับข้อมูลภายใน
- **Dynamic Rendering**: ใช้ `.map()` สร้าง components จาก array
- **Reusable Components**: BlogCard สามารถนำกลับมาใช้ซ้ำได้

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
