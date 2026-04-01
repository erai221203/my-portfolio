import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiAward, FiX, FiZoomIn, FiFilter } from 'react-icons/fi'
import { certificates } from '../../data'
import { Certificate } from '../../types'
import styles from './Certificates.module.css'

type CertificateCategory = 'online' | 'workshop' | 'award' | 'publication' | 'hackathon' | 'all'

interface CategoryGroup {
  id: CertificateCategory
  label: string
  icon: string
  count: number
}

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all')

  const openPreview = (cert: Certificate) => {
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closePreview = () => {
    setSelectedCert(null)
    document.body.style.overflow = ''
  }

  // Check if URL is external HTTP/HTTPS link
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://')
  }

  // Check if URL is a PDF file
  const isPdfUrl = (url: string) => {
    return url.toLowerCase().endsWith('.pdf')
  }

  // Handle certificate link - open PDF in new tab
  const handleCertificateLink = (url: string) => {
    if (isPdfUrl(url) || isExternalUrl(url)) {
      window.open(url, '_blank')
    }
  }

  // Simple filtering logic - exactly like Skills section
  const filteredCerts = activeCategory === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory)

  // Build categories array with counts
  const categories: CategoryGroup[] = [
    { id: 'all', label: 'All Certificates', icon: '📜', count: certificates.length },
    { id: 'online', label: 'Online Courses', icon: '🎓', count: certificates.filter(c => c.category === 'online').length },
    { id: 'workshop', label: 'Workshops', icon: '🛠️', count: certificates.filter(c => c.category === 'workshop').length },
    { id: 'award', label: 'Awards', icon: '🏆', count: certificates.filter(c => c.category === 'award').length },
    { id: 'publication', label: 'Publications', icon: '📄', count: certificates.filter(c => c.category === 'publication').length },
    { id: 'hackathon', label: 'Hackathons', icon: '⚡', count: certificates.filter(c => c.category === 'hackathon').length },
  ]

  return (
    <section id="cert" className={`section ${styles.certificates}`}>
      <div className="container">
        <motion.div
          className={styles.certificatesHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Certificates</h2>
          <p className="section-subtitle">
            Recognition and achievements throughout my journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className={styles.categoryFilter}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.filterHeader}>
            <FiFilter size={20} />
            <span>Filter by Category</span>
          </div>
          <div className={styles.categoryTabs}>
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.icon}>{cat.icon}</span>
                <div className={styles.tabContent}>
                  <span className={styles.label}>{cat.label}</span>
                  <span className={styles.count}>{cat.count}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.certificatesGrid}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.title}
              className={styles.certCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => openPreview(cert)}
            >
              <div className={styles.certImage}>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement?.classList.add(styles.imageFallback)
                    }}
                  />
                ) : (
                  <div className={styles.certImagePlaceholder}>
                    <FiAward />
                  </div>
                )}
                <div className={styles.certOverlay}>
                  <FiZoomIn size={24} />
                  <span>View Certificate</span>
                </div>
              </div>

              <div className={styles.certContent}>
                <div className={styles.certMeta}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certDot}></span>
                  <time className={styles.certDate}>{cert.date}</time>
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certText}>Click to preview certificate</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={closePreview}
                aria-label="Close preview"
              >
                <FiX size={24} />
              </button>

              <div className={styles.modalImageWrapper}>
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className={styles.modalImage}
                  />
                ) : (
                  <div className={styles.modalPlaceholder}>
                    <FiAward size={80} />
                    <p>Certificate image not available</p>
                  </div>
                )}
              </div>

              <div className={styles.modalInfo}>
                <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
                <div className={styles.modalMeta}>
                  <span className={styles.modalIssuer}>{selectedCert.issuer}</span>
                  <span className={styles.modalDot}>•</span>
                  <time>{selectedCert.date}</time>
                </div>
                {(isPdfUrl(selectedCert.url) || isExternalUrl(selectedCert.url)) && (
                  <button
                    onClick={() => handleCertificateLink(selectedCert.url)}
                    className={styles.modalLink}
                  >
                    <FiExternalLink size={18} />
                    <span>{isPdfUrl(selectedCert.url) ? 'View PDF Certificate' : 'View Original Certificate'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates