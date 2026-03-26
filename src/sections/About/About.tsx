import { motion } from 'framer-motion'
import { FiBook, FiBriefcase, FiMapPin, FiMail, FiAward, FiUser } from 'react-icons/fi'
import styles from './About.module.css'

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

const education = [
  {
    institution: 'Kumaraguru College of Technology',
    period: '2022 — Present',
    description: 'Dept- BTech Artificial Intelligence and Data Science',
    grade: 'CGPA- 8.01 (Till 5th semester)',
  },
  {
    institution: 'The Vijay Millennium SR Sec School, Krishnagiri',
    period: '2020 — 2022',
    description: 'Pursued higher secondary of class 11th and class 12th.',
    grade: 'Secured 74.5% in 12th standard.',
  },
  {
    institution: 'Sri Vijay Vidyalaya Boys HR Sec School, DPI',
    period: '2019 — 2020',
    description: 'Pursued class 10th.',
    grade: 'Secured 96.4% in 10th standard.',
  },
]

const experience = [
  {
    title: 'Quality Assurance Intelligence Intern',
    period: 'Oct 2025 — Present',
    description: 'Quality Assurance Team.',
    company: 'Stats Perform, Bengaluru, India.',
  },
  {
    title: 'Vice President',
    period: 'Aug 2025 — Present',
    description: 'Department of Artificial Intelligence and Data Science.',
    company: 'Kumaraguru College of Technology.',
  },
  {
    title: 'Alumni Ambassador',
    period: 'Oct 2024 — Present',
    description: 'Department of Artificial Intelligence and Data Science.',
    company: 'Kumaraguru College of Technology.',
  },
  {
    title: 'CRS-Paper Presentation - IEEE',
    period: 'Apr 2024 — Mar 2025',
    description: 'AI-Driven Solar Panel Optimization during Cloudy times Using Real-Time Image Processing',
    company: 'IEEE Paper Presentation',
  },
  {
    title: 'Treasurer',
    period: 'Aug 2024 — Aug 2025',
    description: 'Department Association of Artificial Intelligence and Data Science.',
    company: 'Kumaraguru College of Technology.',
  },
  {
    title: 'Technical Lead',
    period: 'April 2024 — March 2025',
    description: 'CRS Project with the company Ezon Energy Solutions (P) Ltd.',
    company: '',
  },
  {
    title: 'Innovation Engineer - Intern',
    period: 'Aug 2024 — Dec 2024',
    description: 'Forge Innovation and Ventures',
    company: '',
  },
  {
    title: 'Paper Presentation - IEEE',
    period: 'Apr 2024 — Oct 2024',
    description: 'Artistic Fusion: AI Powered Artistry for Story Boarding',
    company: 'IEEE Paper Presentation',
  },
  {
    title: 'ML Engineer - Intern',
    period: 'May 2024 — June 2024',
    description: 'Virtual Internship @Codsoft.',
    company: '',
  },
  {
    title: 'Executive Member',
    period: 'Oct 2023 — Aug 2024',
    description: 'Department Association of Artificial Intelligence and Data Science.',
    company: 'Kumaraguru College of Technology.',
  },
]

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
              Hello! I'm <span className={styles.highlight}>Eraianbu Rajkumar</span>, based in Coimbatore, Tamil Nadu, India. 
              I specialize in building AI-driven solutions that address real-world challenges.
            </p>
            <p className={styles.introText}>
              I'm passionate about building AI-driven solutions that address real-world challenges, with hands-on experience in 
              <span className={styles.highlight}> computer vision</span>, <span className={styles.highlight}>machine learning</span>, and 
              <span className={styles.highlight}> robotics</span>. My journey includes innovative projects such as a solar tracking system 
              and an AI-powered storyboard generator.
            </p>
            <p className={styles.introText}>
              My journey includes innovative projects such as a solar tracking system, an AI-powered storyboard generator, and 
              autonomous mobile robots. I strive to blend functionality with creative design to deliver meaningful digital experiences.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div className={styles.infoGrid} variants={fadeInUp}>
            <div className={styles.infoCard}>
              <FiMapPin className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FiMail className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>eraianbu872@gmail.com</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FiBriefcase className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Status</span>
                <span className={styles.infoValue}>Quality Assurance Intelligence Intern</span>
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
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  variants={fadeInUp}
                >
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3 className={styles.itemTitle}>{item.institution}</h3>
                    <span className={styles.itemPeriod}>{item.period}</span>
                    <p className={styles.itemDescription}>{item.description}</p>
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
                {experience.map((item, index) => (
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
