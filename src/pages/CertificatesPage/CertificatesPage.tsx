import { motion } from 'framer-motion'
import Certificates from '../../sections/Certificates/Certificates'
import styles from './CertificatesPage.module.css'

function CertificatesPage() {
  return (
    <motion.div
      className={styles.certificatesPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Certificates />
    </motion.div>
  )
}

export default CertificatesPage
