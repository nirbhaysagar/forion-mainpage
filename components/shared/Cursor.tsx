'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  
  // Real mouse position
  const posRef = useRef({ x: -100, y: -100 })
  // Interpolated position for smoothness
  const smoothRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }
    
    // Hide when mouse leaves the window
    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    const loop = () => {
      const { x, y } = posRef.current
      const smooth = smoothRef.current
      
      // Fine-tuned smooth interpolation (lerp)
      smooth.x += (x - smooth.x) * 0.25
      smooth.y += (y - smooth.y) * 0.25

      if (dotRef.current) {
        // translate3d forces GPU acceleration for sub-pixel perfect smooth movement
        dotRef.current.style.transform = `translate3d(${smooth.x - 10}px, ${smooth.y - 10}px, 0)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible])

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#fff',
        pointerEvents: 'none',
        zIndex: 999999, // Ensure it's on top of everything
        mixBlendMode: 'difference', // Makes it black on white, white on black
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
    />
  )
}
