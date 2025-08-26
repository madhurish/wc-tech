import styles from '../styles/Services.module.css'

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      icon: "🎨"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive brand development that tells your story and connects with your audience.",
      icon: "🚀"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that drive growth and maximize your digital presence.",
      icon: "📈"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱"
    },
    {
      title: "Consulting",
      description: "Strategic guidance and technical expertise to help your business achieve its digital goals.",
      icon: "💡"
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We offer a comprehensive suite of digital services to help your business thrive in the modern world.
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
              <div className={styles.serviceGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}