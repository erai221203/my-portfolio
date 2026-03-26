import styles from './LoadingSpinner.module.css'

function LoadingSpinner() {
  return (
    <div className={styles.spinner} role="status" aria-label="Loading">
      <div className={styles.spinnerIcon} />
    </div>
  )
}

export default LoadingSpinner
