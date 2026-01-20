// src/App.jsx
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { ArticleSection } from './components/ArticleSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brown-100 text-brown-600 font-sans">
      <NavBar />
      <HeroSection />

      {/* เพิ่ม Article Section */}
      <ArticleSection />

      {/* เพิ่ม Footer */}
      <Footer />
    </div>
  );
}

export default App;