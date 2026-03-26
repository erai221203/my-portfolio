import { useState, useEffect, useCallback } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [prevOffset, setPrevOffset] = useState(0)

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.scrollY
    const direction = scrollY > prevOffset ? 'down' : 'up'
    
    if (direction !== scrollDirection && (scrollY - prevOffset > 10 || scrollY - prevOffset < -10)) {
      setScrollDirection(direction)
    }
    setPrevOffset(scrollY)
  }, [prevOffset, scrollDirection])

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [updateScrollDirection])

  return scrollDirection
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', updatePosition)
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
