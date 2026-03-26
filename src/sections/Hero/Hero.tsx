import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaFigma } from 'react-icons/fa'
import { personalInfo } from '../../data'
import styles from './Hero.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const roles = [
  'QA Intelligence Intern',
  'Data Analyst',
  'AIML Engineer',
  
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const techIcons = [
    <FaReact key="react" />,
    <FaNodeJs key="node" />,
    <FaPython key="python" />,
    <FaDocker key="docker" />,
    <FaFigma key="figma" />,
  ]

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.heroBackground} />
      
      {/* Floating Orbs */}
      <div className={styles.floatingOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
      
      {/* Grid Pattern */}
      <div className={styles.gridPattern} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Content */}
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 className={styles.name} variants={itemVariants}>
            Hi, I'm{' '}
            <span className={styles.nameHighlight}>{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Title */}
          <motion.p className={styles.title} variants={itemVariants}>
            A <span className={styles.typingText}>{displayText}</span>
            <span className={styles.cursor} />
          </motion.p>

          {/* Description */}
          <motion.p className={styles.description} variants={itemVariants}>
            I craft exceptional digital experiences with clean code and creative solutions.
            Passionate about building products that make a difference.
          </motion.p>

          {/* Stats */}
          <motion.div className={styles.statsRow} variants={itemVariants}>
            <div className={styles.stat}>
              <div className={styles.statValue}>2+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className={styles.heroActions} variants={itemVariants}>
            <motion.button
              className={styles.primaryBtn}
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk <FiArrowRight />
            </motion.button>
            <motion.button
              className={styles.secondaryBtn}
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload /> Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <div className={styles.visualWrapper}>
            {/* Rotating Ring */}
            <div className={styles.rotatingRing} />
            
            {/* Profile Card */}
            <div className={styles.profileCard}>
              <div className={styles.profileInner}>
                <img 
                  src="/assets/images/me/new.jpg" 
                  alt={personalInfo.name}
                  className={styles.profileImage}
                />
              </div>
            </div>

            {/* Tech Icons Orbit */}
            <div className={styles.techOrbit}>
              {techIcons.map((icon, index) => (
                <div key={index} className={styles.techIcon}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
