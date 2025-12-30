import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StyleGuide from './components/StyleGuide'; // 1. import เข้ามา

export default function App() {
  return (
    <div className="min-h-screen bg-brown-100 font-sans pb-20"> {/* เพิ่ม pb-20 ให้มีพื้นที่ด้านล่างหน่อย */}
      
      <NavBar />
      
      <main className="space-y-12"> {/* เพิ่มระยะห่างระหว่าง Section */}
        <HeroSection />
        
        {/* 2. แสดงผล StyleGuide */}
        <StyleGuide />
      </main>

    </div>
  )
}