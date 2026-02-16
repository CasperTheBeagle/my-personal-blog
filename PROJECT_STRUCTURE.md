# 📁 Project Structure Documentation

## 🎯 วัตถุประสงค์
เอกสารนี้อธิบายโครงสร้างไฟล์และหน้าที่ของแต่ละไฟล์ในโปรเจ็ค Personal Blog ที่พัฒนาด้วย React + Vite

## 📂 โครงสร้างโปรเจ็ค

```
my-personal-blog/
├── 📄 README.md                    # คำอธิบายโปรเจ็คทั่วไป
├── 📄 PROJECT_STRUCTURE.md         # 📖 อธิบายโครงสร้างไฟล์ (ไฟล์นี้)
├── 📄 ASSIGNMENT_PLAN.MD           # 📋 แผนการทำ assignments ทั้งหมด
├── 📄 ASSIGNMENT_*.MD              # 📝 รายละเอียดแต่ละ assignment
├── 📄 package.json                 # 📦 Dependencies และ scripts
├── 📄 vite.config.js               # ⚙️ Vite configuration
├── 📄 tailwind.config.js          # 🎨 Tailwind CSS configuration
├── 📄 postcss.config.js            # 📐 PostCSS configuration
├── 📄 index.html                   # 🌐 HTML template
├── 📁 public/                      # 📂 Static assets
│   └── 🖼️ favicon.ico
├── 📁 src/                         # 📂 Source code
│   ├── 📄 main.jsx                # 🚀 Entry point
│   ├── 📄 App.jsx                 # 🏠 Main application component
│   ├── 📄 index.css               # 🎨 Global styles
│   ├── 📁 api/                    # 📂 API functions
│   │   └── 📄 blogApi.js          # 🌐 Blog data fetching
│   ├── 📁 components/             # 📂 Reusable components
│   │   ├── 📄 NavBar.jsx          # 🧭 Navigation bar
│   │   ├── 📄 Footer.jsx          # 🦶 Footer component
│   │   ├── 📄 HeroSection.jsx     # 🎯 Hero section
│   │   ├── 📄 ArticleSection.jsx  # 📰 Article listing
│   │   ├── 📄 BlogCard.jsx        # 🃏 Blog post card
│   │   ├── 📄 ProtectedRoute.jsx  # 🛡️ Route protection
│   │   ├── 📄 StyleGuide.jsx      # 🎨 Component showcase
│   │   └── 📁 ui/                 # 📂 shadcn/ui components
│   │       ├── 📄 button.jsx
│   │       ├── 📄 input.jsx
│   │       └── 📄 select.jsx
│   ├── 📁 context/                # 📂 React Context
│   │   └── 📄 AuthContext.jsx     # 🔐 Authentication state
│   ├── 📁 pages/                  # 📂 Page components
│   │   ├── 📄 Home.jsx            # 🏠 Home page
│   │   ├── 📄 About.jsx           # ℹ️ About page
│   │   ├── 📄 BlogDetail.jsx      # 📖 Blog detail page
│   │   ├── 📄 NotFound.jsx        # ❌ 404 page
│   │   ├── 📄 Login.jsx           # 🔑 Login page
│   │   ├── 📄 SignUp.jsx          # 📝 Sign up page
│   │   ├── 📄 Dashboard.jsx       # 📊 User dashboard
│   │   ├── 📄 Profile.jsx         # 👤 User profile
│   │   ├── 📄 Settings.jsx       # ⚙️ User settings
│   │   └── 📁 Admin/              # 📂 Admin pages
│   │       ├── 📄 Dashboard.jsx   # 📈 Admin dashboard
│   │       ├── 📄 ArticleManagement.jsx # 📝 Article CRUD
│   │       └── 📄 UserManagement.jsx    # 👥 User CRUD
│   └── 📁 assets/                 # 📂 Static assets
│       └── 🖼️ images/            # 📸 Image files
└── 📁 node_modules/               # 📦 Dependencies
```

## 📋 คำอธิบายแต่ละไฟล์

### 📄 **Root Level Files**

#### 📄 **README.md**
- **หน้าที่**: คำอธิบายโปรเจ็คทั่วไป
- **เนื้อหา**: 
  - ชื่อโปรเจ็ค
  - คำอธิบายสั้นๆ
  - วิธีติดตั้ง
  - วิธีรัน
  - Features หลัก
  - Demo credentials

#### 📄 **PROJECT_STRUCTURE.md** (📖 ไฟล์นี้)
- **หน้าที่**: อธิบายโครงสร้างไฟล์และหน้าที่
- **เนื้อหา**: 
  - โครงสร้างโปรเจ็คแบบ tree
  - คำอธิบายแต่ละไฟล์/โฟลเดอร์
  - วัตถุประสงค์ของแต่ละส่วน

#### 📄 **ASSIGNMENT_PLAN.MD**
- **หน้าที่**: แผนการทำ assignments ทั้งหมด
- **เนื้อหา**: 
  - รายการ assignments ทั้งหมด (9 assignments)
  - สถานะการทำ
  - Dependencies ระหว่าง assignments
  - Learning path

#### 📄 **ASSIGNMENT_*.MD**
- **หน้าที่**: รายละเอียดแต่ละ assignment
- **เนื้อหา**: 
  - วัตถุประสงค์
  - Requirements
  - ตัวอย่างโค้ด
  - วิธีตรวจสอบ
  - ปัญหาที่พบบ่อย

### 📁 **src/ - Source Code**

#### 📄 **main.jsx**
- **หน้าที่**: Entry point ของ React application
- **เนื้อหา**: 
  - Import React และ ReactDOM
  - Import CSS
  - Render App component ลงใน DOM
  - StrictMode wrapper

#### 📄 **App.jsx**
- **หน้าที่**: Main application component
- **เนื้อหา**: 
  - React Router setup
  - AuthProvider wrapper
  - Route definitions
  - Layout components

#### 📄 **index.css**
- **หน้าที่**: Global styles และ Tailwind CSS imports
- **เนื้อหา**: 
  - Tailwind CSS directives
  - Custom CSS variables
  - Global styles

### 📁 **src/api/ - API Functions**

#### 📄 **blogApi.js**
- **หน้าที่**: Functions สำหรับดึงข้อมูลบทความ
- **เนื้อหา**: 
  - `fetchBlogPosts()` - ดึงรายการบทความ
  - `fetchBlogById()` - ดึงบทความตาม ID
  - `fetchCategories()` - ดึงหมวดหมู่
  - Mock data สำหรับ development

### 📁 **src/components/ - Reusable Components**

#### 📄 **NavBar.jsx**
- **หน้าที่**: Navigation bar หลัก
- **เนื้อหา**: 
  - Dynamic menu based on user role
  - User dropdown menu
  - Mobile responsive menu
  - Authentication integration

#### 📄 **Footer.jsx**
- **หน้าที่**: Footer component
- **เนื้อหา**: 
  - Copyright information
  - Social links
  - Navigation links

#### 📄 **HeroSection.jsx**
- **หน้าที่**: Hero section หน้าแรก
- **เนื้อหา**: 
  - Main heading
  - Call-to-action buttons
  - Background styling

#### 📄 **ArticleSection.jsx**
- **หน้าที่**: แสดงรายการบทความ
- **เนื้อหา**: 
  - Category filtering
  - Search functionality
  - Pagination
  - BlogCard rendering

#### 📄 **BlogCard.jsx**
- **หน้าที่**: Card สำหรับแสดงบทความแต่ละเรื่อง
- **เนื้อหา**: 
  - Article image
  - Category badge
  - Title and description
  - Author information
  - Link to detail page

#### 📄 **ProtectedRoute.jsx**
- **หน้าที่**: Route protection component
- **เนื้อหา**: 
  - Role-based access control
  - Redirect logic
  - Loading states
  - Public route wrapper

#### 📄 **StyleGuide.jsx**
- **หน้าที่**: Component showcase และ style guide
- **เนื้อหา**: 
  - UI components showcase
  - Color palette
  - Typography
  - Component examples

### 📁 **src/context/ - State Management**

#### 📄 **AuthContext.jsx**
- **หน้าที่**: Authentication state management
- **เนื้อหา**: 
  - User state
  - Login/logout functions
  - localStorage persistence
  - Role management

### 📁 **src/pages/ - Page Components**

#### 📄 **Home.jsx**
- **หน้าที่**: Home page
- **เนื้อหา**: 
  - HeroSection
  - ArticleSection
  - Layout structure

#### 📄 **About.jsx**
- **หน้าที่**: About page
- **เนื้อหา**: 
  - About content
  - Team information
  - Company details

#### 📄 **BlogDetail.jsx**
- **หน้าที่**: Blog detail page
- **เนื้อหา**: 
  - Dynamic routing with useParams
  - Article content display
  - Author information
  - Related articles

#### 📄 **NotFound.jsx**
- **หน้าที่**: 404 error page
- **เนื้อหา**: 
  - Error message
  - Link to home page
  - Custom styling

#### 📄 **Login.jsx**
- **หน้าที่**: Login page
- **เนื้อหา**: 
  - Login form
  - Validation
  - Authentication integration
  - Redirect logic

#### 📄 **SignUp.jsx**
- **หน้าที่**: Sign up page
- **เนื้อหา**: 
  - Registration form
  - Password validation
  - User creation
  - Redirect to dashboard

#### 📄 **Dashboard.jsx**
- **หน้าที่**: User dashboard
- **เนื้อหา**: 
  - User statistics
  - Recent activity
  - Quick actions
  - Social stats

#### 📄 **Profile.jsx**
- **หน้าที่**: User profile page
- **เนื้อหา**: 
  - Profile information
  - Edit functionality
  - User statistics
  - Recent articles

#### 📄 **Settings.jsx**
- **หน้าที่**: User settings page
- **เนื้อหา**: 
  - Account settings
  - Notification preferences
  - Privacy settings
  - Security options

### 📁 **src/pages/Admin/ - Admin Pages**

#### 📄 **Dashboard.jsx**
- **หน้าที่**: Admin dashboard
- **เนื้อหา**: 
  - System statistics
  - Recent activity
  - Quick actions
  - Admin navigation

#### 📄 **ArticleManagement.jsx**
- **หน้าที่**: Article CRUD management
- **เนื้อหา**: 
  - Article listing
  - Create/edit/delete
  - Status management
  - Filtering and search

#### 📄 **UserManagement.jsx**
- **หน้าที่**: User CRUD management
- **เนื้อหา**: 
  - User listing
  - Role management
  - Ban/unban functionality
  - User statistics

## 🎨 **Design System**

### **Colors**
- **Primary**: Brown theme (#8B4513)
- **Secondary**: Green theme (#22C55E)
- **Accent**: Purple for admin (#9333EA)
- **Neutral**: Gray scale

### **Typography**
- **Font**: System fonts (sans-serif)
- **Headings**: Serif font for titles
- **Body**: Sans-serif for content

### **Components**
- **Buttons**: shadcn/ui components
- **Forms**: Tailwind CSS styling
- **Cards**: Custom shadow and border styles

## 🔄 **Data Flow**

### **Authentication Flow**
1. User logs in via Login/SignUp
2. AuthContext updates user state
3. ProtectedRoute checks authentication
4. NavBar updates based on user role
5. Redirect to appropriate dashboard

### **Blog Data Flow**
1. ArticleSection fetches data from blogApi
2. BlogCard displays individual articles
3. Link navigates to BlogDetail
4. BlogDetail fetches specific article data

## 🚀 **Development Notes**

### **Key Features**
- **Authentication**: Mock authentication with localStorage
- **Routing**: React Router with protected routes
- **State Management**: React Context for auth
- **Styling**: Tailwind CSS + shadcn/ui
- **Data**: Mock API with realistic data

### **Best Practices**
- Component-based architecture
- Separation of concerns
- Reusable components
- Responsive design
- Accessibility considerations

---

**📖 อัพเดทล่าสุด**: 21 มกราคม 2026  
**👤 ผู้พัฒนา**: Cascade AI Assistant  
**🎯 โปรเจ็ค**: Personal Blog - React + Vite
