import { motion } from 'framer-motion'
import { FiBook, FiBriefcase, FiMapPin, FiMail, FiAward, FiUser } from 'react-icons/fi'
import styles from './About.module.css'
import { personalInfo, education as educationData, experience as experienceData } from '../../data'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const interests = ['Machine Learning', 'Computer Vision', 'Robotics', 'Photography', 'Chess', 'DJing']

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        {/* About Me Introduction */}
        <motion.div
          className={styles.aboutIntro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className={styles.introHeader} variants={fadeInUp}>
            <FiUser className={styles.introIcon} />
            <h2 className={styles.introTitle}>About Me</h2>
          </motion.div>

          <motion.div className={styles.introContent} variants={fadeInUp}>
            <p className={styles.introText}>
              Hello! I'm <span className={styles.highlight}>{personalInfo.name}</span>, based in {personalInfo.location}. 
              {personalInfo.bio}
            </p>
            <p className={styles.introText}>
              {personalInfo.bio2}
            </p>
            <p className={styles.introText}>
              {personalInfo.bio3}
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div className={styles.infoGrid} variants={fadeInUp}>
            <div className={styles.infoCard}>
              <FiMapPin className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{personalInfo.location}</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FiMail className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{personalInfo.email}</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FiBriefcase className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Status</span>
                <span className={styles.infoValue}>{experienceData[0]?.title || 'Professional'}</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FiAward className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Projects</span>
                <span className={styles.infoValue}>15+ Completed</span>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div className={styles.interests} variants={fadeInUp}>
            {interests.map((interest) => (
              <span key={interest} className={styles.interestTag}>
                {interest}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Education & Experience Grid */}
        <div className={styles.aboutGrid}>
          {/* Education Section */}
          <motion.div
            className={styles.column}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.columnHeader} variants={fadeInUp}>
              <FiBook className={styles.columnIcon} />
              <h2 className={styles.columnTitle}>Education</h2>
            </motion.div>
            
            <div className={styles.timeline}>
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  variants={fadeInUp}
                >
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3 className={styles.itemTitle}>{item.institution}</h3>
                    <span className={styles.itemPeriod}>{item.period}</span>
                    <p className={styles.itemDescription}>{item.degree}</p>
                    <p className={styles.itemGrade}>{item.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className={styles.column}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.columnHeader} variants={fadeInUp}>
              <FiBriefcase className={styles.columnIcon} />
              <h2 className={styles.columnTitle}>Experience</h2>
            </motion.div>
            
            <div className={styles.timelineScroll}>
              <div className={styles.timeline}>
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.timelineItem}
                    variants={fadeInUp}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <span className={styles.itemPeriod}>{item.period}</span>
                      <p className={styles.itemDescription}>{item.description}</p>
                      {item.company && <p className={styles.itemCompany}>{item.company}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
