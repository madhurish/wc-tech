import { useState, useEffect } from 'react'
import { contactService } from '../services/contactService'
import styles from '../styles/AdminPanel.module.css'
import { 
  ArrowDownTrayIcon,
  TrashIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function AdminPanel() {
  const [isVisible, setIsVisible] = useState(false)
  const [submissionCount, setSubmissionCount] = useState(0)
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
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

  const updateSubmissionCount = async () => {
    if (isClient) {
      setIsLoading(true)
      try {
        const result = await contactService.getSubmissionCount()
        if (result.success) {
          setSubmissionCount(result.count)
        }
      } catch (error) {
        console.error('Error getting submission count:', error)
      }
      setIsLoading(false)
    }
  }

  const loadSubmissions = async () => {
    if (isClient) {
      setIsLoading(true)
      try {
        const result = await contactService.getRecentSubmissions(20)
        if (result.success) {
          setSubmissions(result.data)
        }
      } catch (error) {
        console.error('Error loading submissions:', error)
      }
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      await contactService.exportAsCSV()
    } catch (error) {
      console.error('Error downloading CSV:', error)
      alert('Error downloading submissions. Please try again.')
    }
  }

  const handleDeleteSubmission = async (submissionId) => {
    if (window.confirm('Are you sure you want to delete this submission? This cannot be undone.')) {
      try {
        const result = await contactService.deleteSubmission(submissionId)
        if (result.success) {
          // Remove from local state
          setSubmissions(prev => prev.filter(sub => sub.id !== submissionId))
          setSubmissionCount(prev => prev - 1)
          alert('Submission deleted successfully')
        } else {
          alert('Error deleting submission. Please try again.')
        }
      } catch (error) {
        console.error('Error deleting submission:', error)
        alert('Error deleting submission. Please try again.')
      }
    }
  }

  if (!isClient || !isVisible) return null

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
            disabled={submissionCount === 0 || isLoading}
          >
            <ArrowDownTrayIcon className={styles.buttonIcon} />
            Download CSV
          </button>
          
          <button 
            className={styles.loadButton}
            onClick={loadSubmissions}
            disabled={isLoading}
          >
            <EyeIcon className={styles.buttonIcon} />
            {isLoading ? 'Loading...' : 'Load Submissions'}
          </button>
        </div>

        {submissions.length > 0 && (
          <div className={styles.submissionsList}>
            <h4>Recent Submissions ({submissions.length})</h4>
            <div className={styles.submissionsContainer}>
              {submissions.map((submission) => (
                <div key={submission.id} className={styles.submissionCard}>
                  <div className={styles.submissionHeader}>
                    <span className={styles.submissionName}>{submission.name}</span>
                    <span className={styles.submissionDate}>
                      {submission.timestamp ? submission.timestamp.toLocaleDateString() : 'Unknown date'}
                    </span>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDeleteSubmission(submission.id)}
                      title="Delete submission"
                    >
                      <TrashIcon className={styles.smallIcon} />
                    </button>
                  </div>
                  <div className={styles.submissionDetails}>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Subject:</strong> {submission.subject}</p>
                    <p><strong>Message:</strong> {submission.message}</p>
                    <p><strong>Status:</strong> <span className={styles.status}>{submission.status}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.instructions}>
          <p><strong>Keyboard Shortcuts:</strong></p>
          <p>• Ctrl/Cmd + Shift + A: Toggle Admin Panel</p>
          <p>• Escape: Close Panel</p>
        </div>
      </div>
    </div>
  )
}