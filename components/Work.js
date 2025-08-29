import styles from '../styles/Work.module.css'

export default function Work() {
  const projects = [
    {
      title: "Flux Call",
      category: "AI Call Center Management",
      description: "Intelligent AI agents for call center operations leveraging advanced voice processing and real-time communication. Automated customer interactions with 95% satisfaction rates while reducing operational costs by 60%.",
      tech: ["Twilio", "LiveKit", "OpenAI GPT", "Python"],
      year: "2024",
      impact: "60% Cost Reduction",
      scale: "10K+ Daily Calls",
      image: "/fluxcall.png"
    },
    {
      title: "Nutanix Collector",
      category: "Hypervisor Analytics Tool",
      description: "Cross-platform data collection tool for hypervisor environments built with enterprise-grade performance monitoring. Provides real-time insights into virtualization infrastructure with 99.9% uptime.",
      tech: ["Python", "Electron", "REST APIs", "SQLite"],
      year: "2024",
      impact: "99.9% Uptime Monitoring",
      scale: "1000+ Hypervisors",
      image: "/collector.png"
    },
    {
      title: "Treeni Energy",
      category: "Energy Analytics Platform",
      description: "Comprehensive data analytics platform for organizational energy management. Delivers actionable insights that help enterprises optimize energy consumption and reduce costs by up to 40%.",
      tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
      year: "2024",
      impact: "40% Energy Savings",
      scale: "500+ Organizations",
      image: "/treeni.jpeg"
    },
    {
      title: "AI Interview Service",
      category: "HR Tech AI Solution",
      description: "Automated AI interviewer platform that streamlines the hiring process with intelligent candidate assessment. Reduces hiring time by 75% while maintaining 90% accuracy in candidate evaluation.",
      tech: ["NLP", "FastAPI", "Redis", "React"],
      year: "2024",
      impact: "75% Faster Hiring",
      scale: "5K+ Interviews/Month",
      image: "/interview.jpg"
    }
  ]

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Transformative AI Solutions</h2>
          <p className={styles.subtitle}>
            Real-world implementations of complex AI systems that have generated millions in value 
            for our clients. Each project showcases our commitment to delivering enterprise-grade 
            solutions that scale and perform under the most demanding conditions.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.projectImg}
                />
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
                
                <div className={styles.projectMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Impact</span>
                    <span className={styles.metricValue}>{project.impact}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Scale</span>
                    <span className={styles.metricValue}>{project.scale}</span>
                  </div>
                </div>
                
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
      </div>
    </section>
  )
}