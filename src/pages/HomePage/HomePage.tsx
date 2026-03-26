import { lazy, Suspense, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../sections/Hero/Hero'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const About = lazy(() => import('../../sections/About/About'))
const Projects = lazy(() => import('../../sections/Projects/Projects'))
const Contact = lazy(() => import('../../sections/Contact/Contact'))

function HomePage() {
  const location = useLocation()

  // Update URL hash based on scroll position
  const updateHashOnScroll = useCallback(() => {
    const sections = ['contact', 'projects', 'about', 'home']
    const scrollPosition = window.scrollY + 100

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          const newHash = `#${sectionId}`
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash)
          }
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  useEffect(() => {
    // Add scroll listener for hash updates
    window.addEventListener('scroll', updateHashOnScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateHashOnScroll)
    }
  }, [updateHashOnScroll])

  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </>
  )
}

export default HomePage
