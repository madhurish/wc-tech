import styles from '../styles/Work.module.css'

export default function Work() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with advanced features and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2024"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Secure financial application with real-time transactions and AI-powered insights.",
      tech: ["React Native", "Python", "AI/ML"],
      year: "2023"
    },
    {
      title: "Brand Identity System",
      category: "Brand Design",
      description: "Complete brand overhaul including logo, guidelines, and digital assets.",
      tech: ["Design System", "UI/UX", "Branding"],
      year: "2024"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Complex data visualization platform with real-time analytics and reporting.",
      tech: ["Vue.js", "D3.js", "PostgreSQL"],
      year: "2023"
    }
  ]

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Work</h2>
          <p className={styles.subtitle}>
            Explore our latest projects and see how we bring innovative ideas to life.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectOverlay}>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
                <div className={styles.projectGlow}></div>
              </div>
              
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTech}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <button className={styles.ctaButton}>View All Projects</button>
        </div>
      </div>
    </section>
  )
}