import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import './App.css'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage/SkillsPage'))
const CertificatesPage = lazy(() => import('./pages/CertificatesPage/CertificatesPage'))

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
