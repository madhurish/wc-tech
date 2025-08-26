import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Wishcoin - Modern Digital Solutions</title>
        <meta name="description" content="Modern digital agency specializing in web development, design, and digital marketing" />
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
          <h1 className={styles.title}>
            wishcoin.tech
          </h1>
          <p className={styles.heroSubtitle}>
            We create exceptional digital experiences that drive growth and innovation.
          </p>
          <button className={styles.ctaButton} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Work
          </button>
        </main>
      </section>

      {/* Other Sections */}
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}