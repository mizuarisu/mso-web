'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  ['HOME', '/'], ['DIVISIONS', '/divisions'], ['COMMAND', '/command'], ['GALLERY', '/gallery'], ['UPDATES', '/updates'], ['HONORARY', '/honorary'], ['ACCESS', '/access'],
]

export function SiteHeader() {
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="header-brand" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('vanguard:navigation-start')) }}>
        <span className="header-emblem"><img src="/images/division-emblem.webp" alt="" /></span>
        <span><b>MARINE</b><small> SPECIAL OPERATIONS</small></span>
      </Link>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><i /><i /><i /></button>
      <nav className={menuOpen ? 'header-nav open' : 'header-nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('vanguard:navigation-start')) }}>{label}</Link>)}
        <Link className="admin-link" href="/settings" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('vanguard:navigation-start')) }}>ADMIN</Link>
      </nav>
    </div>
    <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
  </header>
}
