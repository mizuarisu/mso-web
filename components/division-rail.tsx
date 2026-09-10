'use client'

import { useEffect, useRef, useState } from 'react'
import { divisions } from './route-content'

export function DivisionRail() {
  const railRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const cards = Array.from(rail.querySelectorAll<HTMLElement>('.division-card'))
    const updateActive = () => {
      const center = rail.getBoundingClientRect().left + rail.clientWidth / 2
      let closest = 0
      let distance = Infinity
      cards.forEach((card, index) => {
        const box = card.getBoundingClientRect()
        const nextDistance = Math.abs(box.left + box.width / 2 - center)
        if (nextDistance < distance) {
          distance = nextDistance
          closest = index
        }
      })
      setActive(closest)
    }
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const maxScroll = rail.scrollWidth - rail.clientWidth
      const nextScroll = rail.scrollLeft + event.deltaY
      const canScrollRail = nextScroll > 0 && nextScroll < maxScroll
      if (!canScrollRail) return
      event.preventDefault()
      rail.scrollBy({ left: event.deltaY, behavior: 'smooth' })
    }
    rail.addEventListener('scroll', updateActive, { passive: true })
    rail.addEventListener('wheel', onWheel, { passive: false })
    updateActive()
    return () => {
      rail.removeEventListener('scroll', updateActive)
      rail.removeEventListener('wheel', onWheel)
    }
  }, [])

  return <div className="division-rail-wrap"><div className="division-rail" ref={railRef}>{divisions.map((division, index) => <article className={`division-card${index === active ? ' is-active' : ''}`} key={division.code}><img className="division-icon" src={division.icon} alt={`${division.name} division icon`} /><span className="division-code">{division.code}</span><span className="corner-mark">↗</span><p className="card-role">{division.role}</p><h3>{division.name}</h3><p>{division.text}</p><a href="#divisions">VIEW CELL <span>→</span></a></article>)}</div><div className="division-dots" aria-label="Division carousel position">{divisions.map((division, index) => <button key={division.code} className={index === active ? 'is-active' : ''} aria-label={`Show ${division.name}`} onClick={() => railRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })} />)}</div></div>
}
