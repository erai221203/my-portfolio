import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { useScrollDirection, useScrollPosition, useActiveSection } from '../../hooks'
import { navItems, personalInfo } from '../../data'
import styles from './Navbar.module.css'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const scrollDirection = useScrollDirection()
  const scrollPosition = useScrollPosition()
  const activeSection = useActiveSection(['home', 'about', 'projects', 'contact'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHidden = scrollDirection === 'down' && scrollPosition > 100
  const isScrolled = scrollPosition > 50

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleAnchorClick = (e: React.MouseEvent, item: { label: string; href: string }) => {
    // If not on home page, prevent default and navigate programmatically
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/' + item.href)
    }
  }

  const isActive = (item: { label: string; href: string }) => {
    // For page routes (Skills, Certificates)
    if (item.href === '/skills') return location.pathname === '/skills'
    if (item.href === '/certificates') return location.pathname === '/certificates'
    
    // For anchor links (Home, About, Projects, Contact)
    if (location.pathname === '/') {
      // Extract section ID from href (e.g., '#home' -> 'home')
      const sectionId = item.href.startsWith('#') ? item.href.slice(1) : item.href
      return activeSection === sectionId
    }
    
    return false
  }

  const renderNavLink = (item: { label: string; href: string }) => {
    if (item.href === '/skills' || item.href === '/certificates') {
      return (
        <Link
          to={item.href}
          className={`${styles.navLink} ${isActive(item) ? styles.active : ''}`}
        >
          {item.label}
        </Link>
      )
    }
    return (
      <a
        href={location.pathname === '/' ? item.href : '/' + item.href}
        className={`${styles.navLink} ${isActive(item) ? styles.active : ''}`}
        onClick={(e) => handleAnchorClick(e, item)}
      >
        {item.label}
      </a>
    )
  }

  const renderMobileNavLink = (item: { label: string; href: string }) => {
    if (item.href === '/skills' || item.href === '/certificates') {
      return (
        <Link
          to={item.href}
          className={`${styles.mobileNavLink} ${isActive(item) ? styles.active : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      )
    }
    return (
      <a
        href={location.pathname === '/' ? item.href : '/' + item.href}
        className={`${styles.mobileNavLink} ${isActive(item) ? styles.active : ''}`}
        onClick={(e) => {
          setMobileMenuOpen(false)
          handleAnchorClick(e, item)
        }}
      >
        {item.label}
      </a>
    )
  }

  return (
    <nav
      className={`${styles.navbar} ${isHidden ? styles.hidden : ''} ${isScrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          {personalInfo.name}
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              {renderNavLink(item)}
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <button
            className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <div key={item.href}>
            {renderMobileNavLink(item)}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
