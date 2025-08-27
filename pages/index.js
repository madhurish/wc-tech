import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Work from '../components/Work'
import Contact from '../components/Contact'
import InteractiveLogo from '../components/InteractiveLogo'
import WhatsApp from '../components/WhatsApp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>WishCoin.tech - Elite AI Software Development Agency</title>
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
    </div>
  )
}