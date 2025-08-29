import { useState } from 'react'
import { csvHandler } from '../utils/csvHandler'
import styles from '../styles/Contact.module.css'
import { 
  EnvelopeIcon,
  PhoneIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@wishcoinmedia.com?subject=Inquiry about AI Solutions'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917842874287'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitMessage('Please fill in all fields')
        setIsSubmitting(false)
        return
      }

      // Get existing CSV data
      const existingCsv = csvHandler.getFromLocalStorage()
      
      // Convert form data to CSV format
      const updatedCsv = csvHandler.formDataToCsv(formData, existingCsv)
      
      // Save to localStorage
      const success = csvHandler.saveToLocalStorage(updatedCsv)
      
      if (success) {
        setSubmitMessage('Thank you! Your message has been saved successfully.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Log for debugging
        console.log('Form submitted and saved to CSV:', formData)
        console.log('Total submissions:', csvHandler.getSubmissionCount())
      } else {
        setSubmitMessage('Error saving your message. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitMessage('Error saving your message. Please try again.')
    }

    setIsSubmitting(false)
    
    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Start Your AI Transformation</h2>
          <p className={styles.subtitle}>
            Ready to leverage AI and complex software solutions for your business? 
            Let's discuss how we can drive unprecedented growth and efficiency.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={`${styles.infoCard} ${styles.clickable}`} onClick={handleEmailClick}>
              <div className={styles.infoIcon}>
                <EnvelopeIcon className={styles.iconSvg} />
              </div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>info@wishcoinmedia.com</p>
              <p className={styles.clickHint}>Click to send email</p>
            </div>
            
            <div className={`${styles.infoCard} ${styles.clickable}`} onClick={handlePhoneClick}>
              <div className={styles.infoIcon}>
                <PhoneIcon className={styles.iconSvg} />
              </div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+91 784 287 4287</p>
              <p className={styles.clickHint}>Click to call</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <BriefcaseIcon className={styles.iconSvg} />
              </div>
              <h3 className={styles.infoTitle}>Enterprise Solutions</h3>
              <p className={styles.infoText}>24/7 Support Available</p>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitMessage && (
              <div className={`${styles.submitMessage} ${submitMessage.includes('Error') ? styles.error : styles.success}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}