import styles from '../styles/About.module.css'
import { 
  CpuChipIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Elite Software Engineering Excellence</h2>
            <p className={styles.description}>
              wishcoin.tech is a premier software development agency specializing in AI-driven solutions 
              and complex enterprise systems. We architect intelligent software that scales with your 
              business, delivering cutting-edge technology at competitive rates without ever compromising 
              on quality or security standards.
            </p>
            <p className={styles.description}>
              Our elite engineering team combines deep expertise in artificial intelligence, machine learning, 
              and enterprise software architecture. We follow rigorous development methodologies, implement 
              comprehensive testing frameworks, and maintain the highest code quality standards to ensure 
              your mission-critical applications perform flawlessly under any load.
            </p>
            <div className={styles.expertise}>
              <div className={styles.expertiseItem}>
                <CpuChipIcon className={styles.expertiseIcon} />
                <span className={styles.expertiseText}>AI/ML Implementation</span>
              </div>
              <div className={styles.expertiseItem}>
                <BuildingLibraryIcon className={styles.expertiseIcon} />
                <span className={styles.expertiseText}>Enterprise Architecture</span>
              </div>
              <div className={styles.expertiseItem}>
                <ShieldCheckIcon className={styles.expertiseIcon} />
                <span className={styles.expertiseText}>Security-First Development</span>
              </div>
              <div className={styles.expertiseItem}>
                <BoltIcon className={styles.expertiseIcon} />
                <span className={styles.expertiseText}>High-Performance Systems</span>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>AI Solutions Deployed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Client Retention Rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support & Monitoring</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="/image1.jpeg" 
                alt="wishcoin.tech Team and Workspace" 
                className={styles.aboutImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}