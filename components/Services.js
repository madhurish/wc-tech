import styles from '../styles/Services.module.css'

export default function Services() {
  const services = [
    {
      title: "AI/ML Solutions",
      description: "Custom machine learning models, neural networks, and AI-driven automation systems that transform your business processes and decision-making capabilities.",
      icon: "🤖",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
    },
    {
      title: "Enterprise Software Architecture",
      description: "Scalable, secure, and maintainable enterprise systems designed to handle millions of users with zero downtime and maximum performance.",
      icon: "🏗️",
      technologies: ["Microservices", "Cloud Native", "Kubernetes", "Docker"]
    },
    {
      title: "Data Engineering & Analytics",
      description: "Big data pipelines, real-time analytics, and intelligent data warehouses that unlock actionable insights from your complex datasets.",
      icon: "📊",
      technologies: ["Apache Spark", "Kafka", "Elasticsearch", "PostgreSQL"]
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflow automation, RPA solutions, and smart process optimization that reduce costs and eliminate manual errors.",
      icon: "⚡",
      technologies: ["Process Mining", "RPA", "Workflow AI", "API Integration"]
    },
    {
      title: "Cloud-Native Development",
      description: "Serverless applications, containerized solutions, and cloud-first architectures that scale automatically and optimize costs.",
      icon: "☁️",
      technologies: ["AWS", "Azure", "GCP", "Serverless"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security implementations, penetration testing, and compliance frameworks that protect your critical systems.",
      icon: "🔒",
      technologies: ["Zero Trust", "GDPR", "SOC 2", "Penetration Testing"]
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>AI-Powered Software Solutions</h2>
          <p className={styles.subtitle}>
            We architect and deploy cutting-edge AI solutions and complex enterprise software that drives real business value. 
            Our expertise spans the entire technology stack, from intelligent algorithms to scalable cloud infrastructure.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceTechnologies}>
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.serviceGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}