import { useState, useEffect } from 'react'
import { contactService } from '../services/contactService'
import styles from '../styles/ConsultationModal.module.css'
import { 
  XMarkIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Free Software Consultation',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // 1: form, 2: success

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    if (!isClient) {
      setSubmitMessage('Please wait for the page to load completely.')
      setIsSubmitting(false)
      return
    }

    try {
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitMessage('Please fill in all required fields')
        setIsSubmitting(false)
        return
      }

      const result = await contactService.submitContactForm(formData)
      
      if (result.success) {
        setCurrentStep(2) // Show success step
        console.log('Consultation request submitted with ID:', result.id)
      } else {
        setSubmitMessage('Error sending your request. Please try again.')
        console.error('Firebase submission error:', result.error)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitMessage('Error sending your request. Please try again.')
    }

    setIsSubmitting(false)
  }

  const handleClose = () => {
    setCurrentStep(1)
    setFormData({
      name: '',
      email: '',
      subject: 'Free Software Consultation',
      message: ''
    })
    setSubmitMessage('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={handleClose}>
          <XMarkIcon className={styles.closeIcon} />
        </button>

        {/* Success Step */}
        {currentStep === 2 ? (
          <div className={styles.successStep}>
            <div className={styles.successIcon}>
              <CheckCircleIcon className={styles.checkIcon} />
            </div>
            <h2 className={styles.successTitle}>Consultation Request Sent!</h2>
            <p className={styles.successMessage}>
              Thank you for your interest! Our team will review your request and get back to you within 24 hours with next steps for your free software consultation.
            </p>
            <div className={styles.successFeatures}>
              <div className={styles.feature}>
                <SparklesIcon className={styles.featureIcon} />
                <span>Free 30-minute consultation</span>
              </div>
              <div className={styles.feature}>
                <RocketLaunchIcon className={styles.featureIcon} />
                <span>Custom AI solution roadmap</span>
              </div>
            </div>
            <button className={styles.continueButton} onClick={handleClose}>
              Continue Browsing
            </button>
          </div>
        ) : (
          /* Form Step */
          <div className={styles.formStep}>
            {/* Header */}
            <div className={styles.modalHeader}>
              <div className={styles.headerIcon}>
                <SparklesIcon className={styles.sparklesIcon} />
              </div>
              <h2 className={styles.modalTitle}>
                Get Your Free Software Consultation
              </h2>
              <p className={styles.modalSubtitle}>
                Let our AI experts analyze your business needs and create a custom roadmap for your digital transformation.
              </p>
            </div>

            {/* Form */}
            <form className={styles.consultationForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tell us about your project *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  placeholder="Describe your business goals, current challenges, or the type of software solution you're looking for..."
                  rows="4"
                  required
                />
              </div>

              {submitMessage && (
                <div className={`${styles.submitMessage} ${submitMessage.includes('Error') ? styles.error : styles.success}`}>
                  {submitMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <RocketLaunchIcon className={styles.buttonIcon} />
                    Get Free Consultation
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <CheckCircleIcon className={styles.trustIcon} />
                <span>100% Free Consultation</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircleIcon className={styles.trustIcon} />
                <span>No Obligation</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircleIcon className={styles.trustIcon} />
                <span>24hr Response Time</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}