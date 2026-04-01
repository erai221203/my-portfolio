import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCalendar, FiTag } from 'react-icons/fi'
import { projects } from '../../data'
import styles from './Projects.module.css'

function Projects() {
  // Separate featured and regular projects
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          className={styles.projectsHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects - Large Format */}
        {featuredProjects.length > 0 && (
          <motion.div
            className={styles.featuredSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <h3 className={styles.sectionSubtitle}>Spotlight</h3>
            <motion.div
              className={styles.featuredGrid}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {featuredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className={`${styles.projectCard} ${styles.featuredCard} ${idx % 2 === 0 ? styles.cardLeft : styles.cardRight}`}
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className={styles.projectImage}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImg}
                    />
                    <div className={styles.projectOverlay}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className={styles.overlayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className={styles.overlayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    <span className={styles.featuredBadge}>⭐ Featured</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    
                    <div className={styles.projectMeta}>
                      {project.date && (
                        <div className={styles.metaItem}>
                          <FiCalendar size={14} />
                          <span>{project.date}</span>
                        </div>
                      )}
                      {project.tag && (
                        <div className={styles.metaItem}>
                          <FiTag size={14} />
                          <span>{project.tag}</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.projectTech}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Regular Projects - Grid Format */}
        {regularProjects.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <h3 className={styles.sectionSubtitle}>Other Projects</h3>
            <motion.div
              className={styles.projectsGrid}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {regularProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className={`${styles.projectCard} ${styles.compactCard}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className={styles.projectImage}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImg}
                    />
                    <div className={styles.projectOverlay}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className={styles.overlayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className={styles.overlayLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    
                    {(project.date || project.tag) && (
                      <div className={styles.projectMeta}>
                        {project.date && (
                          <div className={styles.metaItem}>
                            <FiCalendar size={13} />
                            <span>{project.date}</span>
                          </div>
                        )}
                        {project.tag && (
                          <div className={styles.metaItem}>
                            <FiTag size={13} />
                            <span>{project.tag}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className={styles.projectTech}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
