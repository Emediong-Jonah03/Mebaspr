import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/home/LandingPage'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Services from './pages/services/Services'
import { Routes, Route } from 'react-router-dom'
import './styles/globals.css'



export default function App() {
  return (
    <div className="font-display">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
