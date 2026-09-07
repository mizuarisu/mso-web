'use client'

import { useEffect, useState } from 'react'

export function PageTransition() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const onStart = () => setActive(true)
    const onEnd = () => window.setTimeout(() => setActive(false), 260)
    window.addEventListener('vanguard:navigation-start', onStart)
    window.addEventListener('vanguard:navigation-end', onEnd)
    return () => { window.removeEventListener('vanguard:navigation-start', onStart); window.removeEventListener('vanguard:navigation-end', onEnd) }
  }, [])
  return <div className={active ? 'page-transition active' : 'page-transition'} aria-hidden="true"><span /><span /><span /></div>
}
