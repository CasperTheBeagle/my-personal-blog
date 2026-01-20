# Assignment 1: React Vite Building Personal Blog

## 📋 ข้อมูล Assignment
- **ชื่อ**: React Vite Building Personal Blog Assignment
- **สถานะ**: ✅ เสร็จแล้ว
- **Priority**: Low
- **Prerequisite**: ไม่มี

## 🎯 วัตถุประสงค์
ตั้งค่าโปรเจ็ก React ด้วย Vite และเตรียมพื้นฐานสำหรับการพัฒนา

## 📚 Learning Outcomes
- เข้าใจ Vite build tool
- ติดตั้งและตั้งค่า React + Vite project
- ตั้งค่า development environment
- ใช้ npm scripts พื้นฐาน

## ✅ ข้อกำหนด (Requirements)

### 1. Initialize Project
- **สร้าง**: `npm create vite@latest my-personal-blog -- --template react`
- **เข้าโฟลเดอร์**: `cd my-personal-blog`
- **ติดตั้ง dependencies**: `npm install`

### 2. Basic Configuration
- **ตรวจสอบ**: `package.json` มี scripts ครบ
- **ทดสอบ**: `npm run dev` ทำงานได้
- **ตรวจสอบ**: `vite.config.js` มี React plugin

### 3. Project Structure
- **ตรวจสอบ**: โครงสร้างโฟลเดอร์พื้นฐาน
- **Files**: `index.html`, `src/main.jsx`, `src/App.jsx`
- **Folders**: `public/`, `src/`

## 📝 ตัวอย่างโค้ดที่ต้องทำ

### package.json
```json
{
  "name": "my-personal-blog",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### vite.config.js
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 🔍 วิธีตรวจสอบความสำเร็จ

### Checklist
- [ ] สร้างโปรเจ็กด้วย Vite สำเร็จ
- [ ] `npm run dev` ทำงานได้
- [ ] เข้า http://localhost:5173 ได้
- [ ] โครงสร้างโฟลเดอร์ถูกต้อง
- [ ] มีไฟล์พื้นฐานครบ

### Testing
1. Run `npm run dev`
2. Open browser ที่ http://localhost:5173
3. ตรวจสอบว่าแสดง React default page
4. Stop server และทดสอบ `npm run build`

## 🚧 ปัญหาที่พบบ่อย
- Node.js version เก่าไป
- ไม่สามารถ run `npm create vite` ได้
- Port ถูกใช้งานอยู่
- Permission issues

## 📁 Files ที่ต้องตรวจสอบ
- `package.json`
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`

---
*กลับไปที่ [ASSIGNMENT_PLAN.MD](./ASSIGNMENT_PLAN.MD)*
