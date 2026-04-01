import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZap } from 'react-icons/fi'
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma,
  FaLinux, FaMusic, FaUsers, FaCrown, FaBrain, FaChess, FaFilePowerpoint, FaCalendarAlt
} from 'react-icons/fa'
import { FaPuzzlePiece } from 'react-icons/fa6'
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiPostgresql, SiMongodb, SiTensorflow, SiOpencv,
  SiPandas, SiPlotly, SiOpenai, SiAutodesk, SiStreamlit, SiFastapi, SiGooglecloud, SiMysql, SiR
} from 'react-icons/si'
import { techSkills, programmingSkills, softSkills, hardSkills, skillsCategoryTabs } from '../../data'
import styles from './Skills.module.css'

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiNextdotjs: <SiNextdotjs />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  FaGitAlt: <FaGitAlt />,
  FaDocker: <FaDocker />,
  FaAws: <FaAws />,
  FaFigma: <FaFigma />,
  FaLinux: <FaLinux />,
  SiTensorflow: <SiTensorflow />,
  SiOpencv: <SiOpencv />,
  SiPandas: <SiPandas />,
  SiPlotly: <SiPlotly />,
  SiOpenai: <SiOpenai />,
  SiAutodesk: <SiAutodesk />,
  SiStreamlit: <SiStreamlit />,
  SiFastapi: <SiFastapi />,
  SiGooglecloud: <SiGooglecloud />,
  SiMysql: <SiMysql />,
  SiR: <SiR />,
  SiUipath: <SiTensorflow />,
  SiRos: <FaLinux />,
  FaMusic: <FaMusic />,
  FaUsers: <FaUsers />,
  FaCrown: <FaCrown />,
  FaBrain: <FaBrain />,
  FaChess: <FaChess />,
  FaFilePowerpoint: <FaFilePowerpoint />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  SiMicrosoftexcel: <FaFilePowerpoint />,
}

const allSkills = [...techSkills, ...programmingSkills, ...softSkills, ...hardSkills]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.3 }
  },
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      {/* Background Glows */}
      <div className={`${styles.backgroundGlow} ${styles.glow1}`} />
      <div className={`${styles.backgroundGlow} ${styles.glow2}`} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>
            <FiZap /> My Expertise
          </span>
          <h2 className={styles.sectionTitle}>
            Skills & <span className={styles.titleGradient}>Technologies</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Constantly evolving my toolkit to build cutting-edge solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className={styles.categoryTabs}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {skillsCategoryTabs.map((category) => (
            <motion.button
              key={category.id}
              className={`${styles.categoryTab} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                variants={cardVariants}
                layout
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>
                    {iconMap[skill.icon]}
                  </div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <span className={styles.skillLevel}>
                      {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                </div>
                <div className={styles.progressWrapper}>
                  <span className={styles.progressPercentage}>{skill.level}%</span>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
