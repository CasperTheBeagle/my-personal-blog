import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    // จัดหน้าจอหลัก: ใช้ min-h-screen และสีพื้นหลังจาก theme
    <div className="min-h-screen bg-brown-100 font-sans">
      
      {/* Todo 1: Render NavBar */}
      <NavBar />
      
      {/* Todo 2: Render HeroSection */}
      <main>
        <HeroSection />
      </main>

    </div>
  )
}