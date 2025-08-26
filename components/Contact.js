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
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@agency.com</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📱</div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+1 (555) 123-4567</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoText}>San Francisco, CA</p>
            </div>
            
            <div className={styles.socialLinks}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>Twitter</a>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>Dribbble</a>
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