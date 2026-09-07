import Link from 'next/link'
import { TacticalShell, SectionKicker } from '@/components/tactical-shell'
import { divisions, galleryItems } from '@/components/route-content'
import { AnimatedCounter } from '@/components/animated-counter'

async function getRobloxMemberCount() {
  try {
    const response = await fetch('https://groups.roblox.com/v1/groups/156700841', { next: { revalidate: 900 } })
    if (!response.ok) return 38
    const data = await response.json()
    return typeof data.memberCount === 'number' ? data.memberCount : 38
  } catch {
    return 38
  }
}

export default async function HomePage() {
  const memberCount = await getRobloxMemberCount()
  return <TacticalShell showLoader>
    <section id="top" className="hero-section"><div className="hero-image" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" /><div className="hero-content"><p className="eyebrow"><span className="live-dot" /> ACTIVE // EST. 2014 // CLASSIFIED</p><h1>BUILT FOR THE<br /><em>IMPOSSIBLE.</em></h1><p className="hero-copy">Vanguard is a fictional special operations division built around discipline, discretion, and decisive action. In the margins, we move first.</p><div className="hero-actions"><Link className="button button-primary" href="/">ENTER THE ARCHIVE <span>↗</span></Link><Link className="text-link" href="/divisions">EXPLORE DIVISIONS <span>↓</span></Link></div></div><div className="hero-footer"><span>LAT 38° 53′ 24″ N</span><span>LONG 77° 00′ 32″ W</span><span>OPERATIONAL STATUS: <b>GREEN</b></span><span>SCROLL TO EXPLORE ↓</span></div></section>
    <div className="ticker"><div>VANGUARD // <b>NO MISSION TOO COMPLEX</b> // DISCIPLINE · DISCRETION · DECISIVE ACTION // VANGUARD //</div></div>
    <section className="section-pad paper-section reveal"><SectionKicker number="01" label="THE DIVISION" /><div className="intro-grid"><div><h2>QUIET PROFESSIONALS.<br /><em>LOUD RESULTS.</em></h2></div><div className="intro-copy"><p className="lead">We are not the first line. We are the line that appears when every other line has failed.</p><p>Operating at the intersection of intelligence, technology, and human performance, Vanguard brings adaptable teams to the problems that do not fit inside conventional doctrine.</p><Link className="text-link" href="/">READ OUR DOCTRINE <span>↗</span></Link></div></div><div className="stat-row"><div><b><AnimatedCounter value={12} /></b><span>ACTIVE CELLS</span></div><div><b><AnimatedCounter value={memberCount} /></b><span>OPERATORS</span></div><div><b><AnimatedCounter value={100} suffix="%" duration={1100} /></b><span>MISSION FOCUS</span></div><div><b>∞</b><span>COMMITMENT</span></div></div></section>
    <section className="section-pad dark-section reveal"><SectionKicker number="02" label="CAPABILITIES" /><div className="section-heading"><h2>THE <em>EDGE</em> OF THE SPEAR.</h2><Link className="text-link" href="/divisions">VIEW ALL CELLS <span>↗</span></Link></div><div className="division-grid">{divisions.map((division) => <article className="division-card" key={division.code}><span className="division-code">{division.code}</span><span className="corner-mark">↗</span><p className="card-role">{division.role}</p><h3>{division.name}</h3><p>{division.text}</p><Link href="/divisions">VIEW CELL <span>→</span></Link></article>)}</div></section>
    <section className="section-pad paper-section reveal"><SectionKicker number="03" label="FIELD ARCHIVE" /><div className="gallery-top"><h2>VISUAL <em>LOG.</em></h2><Link className="text-link" href="/gallery">OPEN GALLERY <span>↗</span></Link></div><div className="gallery-grid">{galleryItems.slice(0, 3).map((item, index) => <article className={`gallery-card gallery-${index + 1}`} key={item.title}><div className="gallery-photo" style={{ backgroundImage: `url(${item.image})` }} /><div className="gallery-label"><span>{item.category}</span><b>{item.title}</b><small>{item.meta}</small></div></article>)}</div></section>
    <section className="red-band"><div><span>VANGUARD // ACCESS</span><h2>READY WHEN<br />IT <em>MATTERS.</em></h2></div><Link className="button button-light" href="/access">REQUEST ACCESS <span>↗</span></Link></section>
  </TacticalShell>
}
