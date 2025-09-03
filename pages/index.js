import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Work from '../components/Work'
import Contact from '../components/Contact'
import InteractiveLogo from '../components/InteractiveLogo'
import WhatsApp from '../components/WhatsApp'
import AdminPanel from '../components/AdminPanel'
import ConsultationModal from '../components/ConsultationModal'
import ModalNotification from '../components/ModalNotification'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hasShownModal, setHasShownModal] = useState(false)

  useEffect(() => {
    // Check if modal has been shown before (using localStorage - resets on browser restart)
    const modalShown = localStorage.getItem('consultationModalShown')
    
    if (!modalShown) {
      // Show notification after 8 seconds, modal after 10 seconds
      const notificationTimer = setTimeout(() => {
        setShowNotification(true)
      }, 8000)

      const modalTimer = setTimeout(() => {
        if (showNotification) {
          setShowConsultationModal(true)
          setHasShownModal(true)
          setShowNotification(false)
          localStorage.setItem('consultationModalShown', 'true')
        }
      }, 10000)

      return () => {
        clearTimeout(notificationTimer)
        clearTimeout(modalTimer)
      }
    }
  }, [showNotification])

  const handleCloseModal = () => {
    setShowConsultationModal(false)
  }

  const handleShowModal = () => {
    setShowNotification(false)
    setShowConsultationModal(true)
    setHasShownModal(true)
    localStorage.setItem('consultationModalShown', 'true')
  }

  const handleDismissNotification = () => {
    setShowNotification(false)
    localStorage.setItem('consultationModalShown', 'true')
  }



  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>wishcoin.tech - Elite AI Software Development Agency</title>
        <meta name="description" content="Premier AI-driven software development agency. We architect complex, intelligent solutions with enterprise-grade quality at competitive prices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.particles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>

        <main className={styles.main}>
          <InteractiveLogo />
          <h1 className={styles.title}>
            wishcoin.tech
          </h1>
          <p className={styles.heroSubtitle}>
            Elite AI-driven software development. We architect complex, intelligent solutions that transform businesses while delivering exceptional value without compromising on quality.
          </p>
          <div className={styles.heroFeatures}>
            <span className={styles.feature}>AI/ML Solutions</span>
            <span className={styles.feature}>Complex Software Architecture</span>
            <span className={styles.feature}>Enterprise Grade Quality</span>
          </div>
          <button className={styles.ctaButton} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Discover Our Expertise
          </button>
        </main>
      </section>

      {/* Other Sections */}
      <About />
      <Services />
      <TechStack />
      <Work />
      <Contact />
      
      {/* WhatsApp Chat */}
      <WhatsApp />
      
      {/* Admin Panel (Hidden - Ctrl+Shift+A to access) */}
      <AdminPanel />
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showConsultationModal} 
        onClose={handleCloseModal} 
      />
      
      {/* Modal Notification */}
      <ModalNotification 
        isVisible={showNotification}
        onShowModal={handleShowModal}
        onDismiss={handleDismissNotification}
      />
    </div>
  )
}