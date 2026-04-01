import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi'
import { personalInfo } from '../../data'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  state: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<FormStatus>({ state: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus({ state: 'loading' })
    
    try {
      // Using Formspree for email handling
      const response = await fetch('https://formspree.io/f/mbdpkebv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setFormStatus({
          state: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ state: 'idle' })
        }, 5000)
      } else {
        setFormStatus({
          state: 'error',
          message: 'Failed to send message. Please try again or ping me at ' + personalInfo.email,
        })
      }
    } catch (error) {
      setFormStatus({
        state: 'error',
        message: 'An error occurred. Please try again later.',
      })
      console.error('Form submission error:', error)
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          className={styles.contactHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className={styles.contactContainer}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMail size={22} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiMapPin size={22} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{personalInfo.location}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FiPhone size={22} />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Phone</span>
                <span className={styles.infoValue}>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.formInput}
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus.state === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus.state === 'loading' ? (
                'Sending...'
              ) : formStatus.state === 'success' ? (
                <>
                  Message Sent <FiCheck />
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </motion.button>

            {formStatus.state === 'success' && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ {formStatus.message}
              </motion.div>
            )}

            {formStatus.state === 'error' && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✕ {formStatus.message}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
