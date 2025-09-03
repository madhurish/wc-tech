import { useState, useEffect } from 'react'
import styles from '../styles/ModalNotification.module.css'
import { SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function ModalNotification({ isVisible, onShowModal, onDismiss }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      // Reset progress when notification becomes visible
      setProgress(0)
      
      // Progress bar animation (2 seconds)
      const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer)
            return 100
          }
          return prev + 1
        })
      }, 20) // 2 seconds total (100 * 20ms)

      return () => clearInterval(progressTimer)
    }
  }, [isVisible])

  const handleShowModal = () => {
    onShowModal()
  }

  const handleDismiss = () => {
    onDismiss()
  }

  if (!isVisible) return null

  return (
    <div className={styles.notificationContainer}>
      <div className={styles.notification}>
        <div className={styles.notificationHeader}>
          <div className={styles.iconContainer}>
            <SparklesIcon className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.title}>Free Consultation Available!</h4>
            <p className={styles.subtitle}>Get expert AI advice for your project</p>
          </div>
          <button className={styles.closeButton} onClick={handleDismiss}>
            <XMarkIcon className={styles.closeIcon} />
          </button>
        </div>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progressText}>
            {progress < 100 ? 'Opening in...' : 'Click to open'}
          </span>
        </div>

        <div className={styles.actions}>
          <button className={styles.dismissButton} onClick={handleDismiss}>
            Maybe Later
          </button>
          <button className={styles.showButton} onClick={handleShowModal}>
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}