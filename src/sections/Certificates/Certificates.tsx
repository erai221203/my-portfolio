import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiAward, FiX, FiZoomIn } from 'react-icons/fi'
import { certificates } from '../../data'
import { Certificate } from '../../types'
import styles from './Certificates.module.css'

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const openPreview = (cert: Certificate) => {
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closePreview = () => {
    setSelectedCert(null)
    document.body.style.overflow = ''
  }

  // Check if URL is external (not a local image)
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://')
  }

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

        <motion.div
          className={styles.certificatesGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
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
                {isExternalUrl(selectedCert.url) && (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalLink}
                  >
                    <FiExternalLink size={18} />
                    <span>View Original Certificate</span>
                  </a>
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