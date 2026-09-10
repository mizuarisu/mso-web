'use client'

import { useEffect, useState } from 'react'
import { SiteLayout } from './site-layout'

export function TacticalShell({ children, showLoader = false }: { children: React.ReactNode; showLoader?: boolean }) {
  const [loading, setLoading] = useState(showLoader)
  const [status, setStatus] = useState('INITIALIZING WEBSITE')

  useEffect(() => {
    if (!showLoader) return
    const statuses = ['INITIALIZING WEBSITE', 'VERIFYING LINK', 'LOADING ASSETS','LOADING FILES','LOADED.','WELCOME.']
    const timers = statuses.map((label, index) => window.setTimeout(() => setStatus(label), index * 560))
    const timer = window.setTimeout(() => setLoading(false), 4200)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
      else entry.target.classList.remove('is-visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => { timers.forEach(window.clearTimeout); window.clearTimeout(timer); observer.disconnect() }
  }, [showLoader])

  return <SiteLayout>
    {loading && <div className="tactical-loader" role="status" aria-label="Loading Vanguard archive"><div className="loader-grid" aria-hidden="true" /><div className="loader-frame"><div className="loader-topline"><span>MSO // WEBSITE</span><span></span></div><img className="loader-emblem" src="/images/division-emblem.webp" alt="Marine Special Operations emblem" /><div className="loader-status"><span className="loader-status-dot" />{status}</div><div className="loader-progress"><span /><span /><span /><span /><span /><span /></div><div className="loader-progress-line"><i /></div><p>ESTABLISHING ENCRYPTED CONNECTION <b>OK</b></p></div></div>}
    <div className="noise" aria-hidden="true" />
    {children}
  </SiteLayout>
}

export function SectionKicker({ number, label }: { number: string; label: string }) { return <div className="section-kicker"><span>{number}</span><span>{label}</span><i /></div> }
