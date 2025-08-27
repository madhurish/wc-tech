import { useState, useRef, useEffect } from 'react'
import styles from '../styles/InteractiveLogo.module.css'

export default function InteractiveLogo() {
  const logoRef = useRef(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    const handleMouseMove = (e) => {
      const rect = logo.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate mouse position relative to logo center
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      // Calculate rotation angles (opposite to mouse movement)
      const rotateX = (mouseY / rect.height) * -20 // Max 20 degrees
      const rotateY = (mouseX / rect.width) * 20   // Max 20 degrees
      
      // Calculate translation (opposite to mouse movement)
      const translateX = (mouseX / rect.width) * -10 // Max 10px
      const translateY = (mouseY / rect.height) * -10 // Max 10px
      const translateZ = -15 // Fixed depth
      
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) scale(1.02)`
      )
    }

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(0px) scale(1)')
    }

    const handleMouseEnter = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(-5px) scale(1.01)')
    }

    logo.addEventListener('mousemove', handleMouseMove)
    logo.addEventListener('mouseleave', handleMouseLeave)
    logo.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove)
      logo.removeEventListener('mouseleave', handleMouseLeave)
      logo.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div className={styles.heroLogo}>
      <img 
        ref={logoRef}
        src="/logo.png" 
        alt="Wishcoin" 
        className={styles.heroLogoImage}
        style={{ transform }}
      />
    </div>
  )
}