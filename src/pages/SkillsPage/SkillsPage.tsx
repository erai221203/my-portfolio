import { motion } from 'framer-motion'
import Skills from '../../sections/Skills/Skills'
import styles from './SkillsPage.module.css'

function SkillsPage() {
  return (
    <motion.div
      className={styles.skillsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Skills />
    </motion.div>
  )
}

export default SkillsPage
