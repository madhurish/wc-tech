import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Us</h2>
            <p className={styles.description}>
              We are a forward-thinking digital agency that specializes in creating 
              exceptional experiences through innovative design and cutting-edge technology. 
              Our team of passionate creators and strategists work together to bring your 
              vision to life.
            </p>
            <p className={styles.description}>
              With years of experience in the industry, we understand the importance of 
              combining aesthetic appeal with functional excellence. Every project we 
              undertake is a testament to our commitment to quality and innovation.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}