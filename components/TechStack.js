import styles from '../styles/TechStack.module.css'

export default function TechStack() {
  const techCategories = [
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      technologies: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 92 },
        { name: "OpenAI GPT", level: 88 },
        { name: "LangChain", level: 85 },
        { name: "Hugging Face", level: 90 },
        { name: "Computer Vision", level: 87 }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: "☁️",
      technologies: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 88 },
        { name: "Google Cloud", level: 85 },
        { name: "Kubernetes", level: 92 },
        { name: "Docker", level: 95 },
        { name: "Terraform", level: 85 }
      ]
    },
    {
      category: "Data Engineering",
      icon: "📊",
      technologies: [
        { name: "Apache Spark", level: 90 },
        { name: "Apache Kafka", level: 88 },
        { name: "Elasticsearch", level: 85 },
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 90 }
      ]
    },
    {
      category: "Development Stack",
      icon: "⚡",
      technologies: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "React", level: 88 },
        { name: "FastAPI", level: 92 },
        { name: "GraphQL", level: 85 },
        { name: "TypeScript", level: 87 }
      ]
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
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>
              
              <div className={styles.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.techItem}>
                    <div className={styles.techInfo}>
                      <span className={styles.techName}>{tech.name}</span>
                      <span className={styles.techLevel}>{tech.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progress} 
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}