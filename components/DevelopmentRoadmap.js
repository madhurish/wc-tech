import { useState, useEffect, useRef } from 'react'
import styles from '../styles/DevelopmentRoadmap.module.css'
import { 
  PhoneIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BugAntIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export default function DevelopmentRoadmap() {
  const [visibleSteps, setVisibleSteps] = useState(new Set())
  const stepRefs = useRef([])

  const roadmapSteps = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      description: 'We start with a comprehensive consultation to understand your business goals, technical requirements, and project scope. This initial conversation helps us craft a tailored solution strategy.',
      icon: PhoneIcon,
      color: '#7877C6'
    },
    {
      id: 'requirements',
      title: 'Requirement Specification',
      description: 'Our team creates detailed technical specifications, user stories, and project documentation. We define the architecture, technology stack, and development milestones.',
      icon: DocumentTextIcon,
      color: '#FF6767'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'We design intuitive user interfaces and exceptional user experiences. Our design process includes wireframes, prototypes, and user testing to ensure optimal usability.',
      icon: PaintBrushIcon,
      color: '#7877C6'
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Our elite engineering team builds your solution using cutting-edge technologies and best practices. We follow agile methodologies with regular progress updates.',
      icon: CodeBracketIcon,
      color: '#FF6767'
    },
    {
      id: 'testing',
      title: 'Testing & QA',
      description: 'Comprehensive testing ensures your application is robust, secure, and performs flawlessly. We conduct unit tests, integration tests, and performance optimization.',
      icon: BugAntIcon,
      color: '#7877C6'
    },
    {
      id: 'delivery',
      title: 'Delivery & Support',
      description: 'We deploy your solution with zero downtime and provide ongoing support, monitoring, and maintenance to ensure continued success and optimal performance.',
      icon: RocketLaunchIcon,
      color: '#FF6767'
    }
  ]

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, index]))
            }
          })
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Development Roadmap</h2>
          <p className={styles.subtitle}>
            Our proven process from initial consultation to successful delivery. 
            Each step is carefully crafted to ensure your project's success.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {roadmapSteps.map((step, index) => {
            const IconComponent = step.icon
            const isVisible = visibleSteps.has(index)
            const isEven = index % 2 === 0

            return (
              <div
                key={step.id}
                ref={el => stepRefs.current[index] = el}
                className={`${styles.timelineStep} ${isVisible ? styles.visible : ''} ${isEven ? styles.left : styles.right}`}
              >
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon} style={{ '--step-color': step.color }}>
                    <IconComponent className={styles.iconSvg} />
                  </div>
                  <div className={styles.stepText}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                <div className={styles.stepConnector}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}