# Assignment 6: React State Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React State Building Personal Blog Assignment
- **สถานะ**: ❌ ยังไม่เสร็จ
- **Priority**: High
- **Prerequisite**: [ASSIGHMENT_5.MD](./ASSIGHMENT_5.MD)

## 🎯 วัตถุประสงค์
เข้าใจและใช้งาน React State ในการจัดการข้อมูลภายใน component

## 📚 Learning Outcomes
- เข้าใจความแตกต่างระหว่าง props และ state
- ใช้ `useState` hook ได้
- จัดการ state สำหรับ interactive components
- ใช้ conditional rendering กับ state

## ✅ ข้อกำหนด (Requirements)

### 1. Navigation Menu State
- **แก้ไข**: `src/components/NavBar.jsx`
- **ใช้ `useState`**: จัดการ hamburger menu
- **State**: `const [isOpen, setIsOpen] = useState(false)`
- **Toggle**: `onClick={() => setIsOpen(!isOpen)}`

### 2. Category Filter State
- **แก้ไข**: `src/components/ArticleSection.jsx`
- **ใช้ `useState`**: จัดการการ filter หมวดหมู่
- **State**: `const [selectedCategory, setSelectedCategory] = useState('Highlight')`
- **Filter**: กรองบทความตามหมวดหมู่ที่เลือก

### 3. Search State (Optional)
- **เพิ่ม**: ฟังก์ชันค้นหาบทความ
- **State**: `const [searchTerm, setSearchTerm] = useState('')`
- **Filter**: กรองบทความตามคำค้นหา

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### Navigation Menu State
```jsx
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full px-6 py-4">
          {/* Menu Items */}
        </div>
      )}
    </nav>
  );
};
```

### Category Filter State
```jsx
const ArticleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Highlight');

  const filteredArticles = selectedCategory === 'Highlight'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}

      {/* Filtered Articles */}
      {filteredArticles.map((article) => (
        <BlogCard key={article.id} {...article} />
      ))}
    </div>
  );
};
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] NavBar ใช้ state จัดการ menu
- [ ] Category filter ทำงานได้
- [ ] Click category แล้วบทความเปลี่ยน
- [ ] Search functionality ทำงาน (ถ้าทำ)
- [ ] State updates ไม่ทำให้ error

### Testing
1. Click hamburger menu และตรวจสอบการเปิด/ปิด
2. Click category buttons และตรวจสอบการ filter
3. พิมพ์ใน search box และตรวจสอบการค้นหา
4. Inspect React DevTools เพื่อดู state changes

## 🚧 ปัญหาที่พบบ่อย
- ลืม import `useState`
- State ไม่ update เมื่อ click
- Filter logic ผิด
- ใช้ state ผิดวิธี (mutation)

## 📁 Files ที่ต้องแก้ไข
- `src/components/NavBar.jsx`
- `src/components/ArticleSection.jsx`

## 📝 ตัวอย่างโค้ดที่ต้องทำ

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
