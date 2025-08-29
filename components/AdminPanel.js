import { useState, useEffect } from 'react'
import { csvHandler } from '../utils/csvHandler'
import styles from '../styles/AdminPanel.module.css'
import { 
  ArrowDownTrayIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

export default function AdminPanel() {
  const [isVisible, setIsVisible] = useState(false)
  const [submissionCount, setSubmissionCount] = useState(0)

  useEffect(() => {
    // Show admin panel with Ctrl+Shift+A (or Cmd+Shift+A on Mac)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        setIsVisible(!isVisible)
        updateSubmissionCount()
      }
      
      // Hide with Escape key
      if (e.key === 'Escape') {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const updateSubmissionCount = () => {
    setSubmissionCount(csvHandler.getSubmissionCount())
  }

  const handleDownload = () => {
    csvHandler.downloadCsv(`wishcoin_submissions_${new Date().toISOString().split('T')[0]}.csv`)
    updateSubmissionCount()
  }

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all submissions? This cannot be undone.')) {
      csvHandler.clearSubmissions()
      setSubmissionCount(0)
      alert('All submissions cleared successfully')
    }
  }

  if (!isVisible) return null

  return (
    <div className={styles.adminOverlay}>
      <div className={styles.adminPanel}>
        <div className={styles.header}>
          <h3 className={styles.title}>Admin Panel - Contact Submissions</h3>
          <button 
            className={styles.closeButton}
            onClick={() => setIsVisible(false)}
          >
            ×
          </button>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{submissionCount}</span>
            <span className={styles.statLabel}>Total Submissions</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.downloadButton}
            onClick={handleDownload}
            disabled={submissionCount === 0}
          >
            <ArrowDownTrayIcon className={styles.buttonIcon} />
            Download CSV
          </button>
          
          <button 
            className={styles.clearButton}
            onClick={handleClear}
            disabled={submissionCount === 0}
          >
            <TrashIcon className={styles.buttonIcon} />
            Clear All
          </button>
        </div>

        <div className={styles.instructions}>
          <p><strong>Keyboard Shortcuts:</strong></p>
          <p>• Ctrl/Cmd + Shift + A: Toggle Admin Panel</p>
          <p>• Escape: Close Panel</p>
        </div>
      </div>
    </div>
  )
}