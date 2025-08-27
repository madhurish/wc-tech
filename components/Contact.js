import { useState } from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
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
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@wishcoin.tech</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📱</div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+91 784 287 4287</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💼</div>
              <h3 className={styles.infoTitle}>Enterprise Solutions</h3>
              <p className={styles.infoText}>24/7 Support Available</p>
            </div>
            
            <div className={styles.socialLinks}>
              <h3 className={styles.socialTitle}>Connect With Us</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>GitHub</a>
                <a href="#" className={styles.socialLink}>Medium</a>
                <a href="#" className={styles.socialLink}>Stack Overflow</a>
              </div>
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
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}