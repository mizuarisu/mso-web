'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  ['HOME', '#top'], ['ABOUT US', '#about'], ['DIVISIONS', '#divisions'], ['COMMAND', '#command'], ['GALLERY', '#gallery'], ['UPDATES', '#updates'], ['HONORARY', '#honorary'],
]

export function SiteHeader() {
  const pathname = usePathname()
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
      <Link href="/" className="header-brand" onClick={() => { setMenuOpen(false) }}>
        <span className="header-emblem"><img src="/images/division-emblem.webp" alt="" /></span>
        <span><b>MARINE</b><small> SPECIAL OPERATIONS</small></span>
      </Link>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><i /><i /><i /></button>
      <nav className={menuOpen ? 'header-nav open' : 'header-nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={pathname === '/' ? href : `/${href}`} onClick={() => { setMenuOpen(false) }}>{label}</Link>)}
      </nav>
    </div>
    <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
  </header>
}
