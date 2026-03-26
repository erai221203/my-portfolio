import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { socialLinks, personalInfo } from '../../data'
import styles from './Footer.module.css'

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaEnvelope: <FaEnvelope size={20} />,
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
        
        <p className={styles.copyright}>
          © {currentYear} {personalInfo.name}. Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          &{' '}
          <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
            Framer Motion
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
