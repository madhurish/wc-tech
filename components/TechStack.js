import styles from '../styles/TechStack.module.css'
import { 
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export default function TechStack() {
  const techCategories = [
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: CpuChipIcon,
      description: "Advanced AI models, neural networks, and intelligent automation systems",
      level: 9.5
    },
    {
      category: "Cloud Infrastructure & DevOps",
      icon: CloudIcon,
      description: "Scalable cloud architectures, containerization, and automated deployment pipelines",
      level: 9.2
    },
    {
      category: "Data Engineering & Analytics",
      icon: CircleStackIcon,
      description: "Big data processing, real-time analytics, and intelligent data warehouses",
      level: 8.8
    },
    {
      category: "Full-Stack Software Development",
      icon: BoltIcon,
      description: "Enterprise applications, APIs, and complex software architecture",
      level: 9.0
    }
  ]

  return (
    <section id="techstack" className={styles.techStack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Enterprise Technology Stack</h2>
          <p className={styles.subtitle}>
            Our mastery of cutting-edge technologies enables us to build scalable, 
            secure, and intelligent systems that drive business transformation.
          </p>
        </div>
        
        <div className={styles.categoriesGrid}>
          {techCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <category.icon className={styles.categoryIcon} />
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>
              
              <p className={styles.categoryDescription}>{category.description}</p>
              
              <div className={styles.skillRating}>
                <div className={styles.ratingInfo}>
                  <span className={styles.ratingLabel}>Expertise Level</span>
                  <span className={styles.ratingValue}>{category.level}/10</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{ width: `${(category.level / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}