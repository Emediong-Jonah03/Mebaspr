import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './home/LandingPage'
import About from './about/About'
import Blog from './blog/Blog'
import Services from './services/Services'
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
