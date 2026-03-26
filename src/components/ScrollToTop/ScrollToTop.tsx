import { FiArrowUp } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks'
import styles from './ScrollToTop.module.css'

function ScrollToTop() {
  const scrollPosition = useScrollPosition()
  const isVisible = scrollPosition > 400

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
