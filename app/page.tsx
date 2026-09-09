import { TacticalShell, SectionKicker } from '@/components/tactical-shell'
import { divisions, galleryItems } from '@/components/route-content'
import { AnimatedCounter } from '@/components/animated-counter'

const updates = [
  ['08.09.26', 'VANGUARD SELECTS NEW RECONNAISSANCE CADRE', 'A new specialist cohort begins the first phase of assessment and field integration.'],
  ['21.08.26', 'OPERATION NIGHT HAWK // AFTER ACTION', 'A complete visual log from the division’s latest multi-cell exercise.'],
  ['04.08.26', 'THE STANDARD: WHY WE TRAIN IN THE DARK', 'A doctrine note on discomfort, clarity, and decisive action.'],
]

async function getRobloxMemberCount() {
  try {
    const response = await fetch('https://groups.roblox.com/v1/groups/156700841', { next: { revalidate: 900 } })
    const data = await response.json()
    return typeof data.memberCount === 'number' ? data.memberCount : 38
  } catch { return 38 }
}

function Stat({ value, label, prefix = '', suffix = '', duration }: { value: number; label: string; prefix?: string; suffix?: string; duration?: number }) {
  return <div className="stat-block"><b>{prefix}<AnimatedCounter value={value} suffix={suffix} duration={duration} /></b><span>{label}</span></div>
}

export default async function HomePage() {
  const memberCount = await getRobloxMemberCount()
  const activeCells = 12

  return <TacticalShell showLoader>
    <section id="top" className="hero-section reveal"><div className="hero-image" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" /><div className="hero-content"><p className="eyebrow"><span className="live-dot" /> ACTIVE // EST. 2025 // CLASSIFIED</p><h1>NO WORSE<br /><em>ENEMY.</em></h1><p className="hero-copy">Marine Special Operations is a unit under the United States Marine Corps. A division built around discipline, professional, and decisive action. In the margins, we move first.</p><div className="hero-actions"><a className="button button-primary" href="#about">ABOUT US <span>↗</span></a><a className="text-link" href="#divisions">EXPLORE DIVISIONS <span>↓</span></a></div></div><div className="hero-footer"><span>LAT 38° 53′ 24″ N</span><span>LONG 77° 00′ 32″ W</span><span>OPERATIONAL STATUS: <b>GREEN</b></span><span>SCROLL TO EXPLORE ↓</span></div></section>
    <div className="ticker"><div>MARINE SPECIAL OPERATIONS // <b>NO WORSE ENEMY</b> // DISCIPLINED · PROFESSIONAL · DECISIVE ACTION // MARINE SPECIAL OPERATIONS //</div></div>

    <section id="about" className="section-pad paper-section reveal"><SectionKicker number="01" label="THE DIVISION" /><div className="intro-grid"><div><h2>QUIET PROFESSIONALS.<br /><em>LOUD RESULTS.</em></h2></div><div className="intro-copy"><p className="lead">We are not the first line. We are the line that appears when every other line has failed.</p><p>Marine Special Operations emphasizes realism, discipline, and teamwork. Members learn through training, coordination, and progress based on unit.</p><a className="text-link" href="#command">READ OUR DOCTRINE <span>↗</span></a></div></div><div className="stat-row"><Stat value={activeCells} label="ACTIVE CELLS" suffix="+" /><Stat value={memberCount} label="OPERATORS" suffix="+" /><Stat value={100} label="MISSION FOCUS" suffix="%" duration={1100} /><div className="stat-block stat-mark"><b>24/7</b><span>COMBAT READINESS</span></div></div></section>

    <section id="divisions" className="section-pad dark-section reveal"><SectionKicker number="02" label="CAPABILITIES" /><div className="section-heading"><h2>THE <em>EDGE</em> OF THE SPEAR.</h2><a className="text-link" href="#gallery">VIEW FIELD LOG <span>↗</span></a></div><div className="division-rail">{divisions.slice(0, 6).map((division) => <article className="division-card" key={division.code}><img className="division-icon" src={division.icon} alt={`${division.name} division icon`} /><span className="division-code">{division.code}</span><span className="corner-mark">↗</span><p className="card-role">{division.role}</p><h3>{division.name}</h3><p>{division.text}</p><a href="#divisions">VIEW CELL <span>→</span></a></article>)}</div></section>

    <section id="gallery" className="section-pad paper-section reveal"><SectionKicker number="03" label="FIELD ARCHIVE" /><div className="gallery-top"><h2>VISUAL <em>LOG.</em></h2><a className="text-link" href="#gallery">OPEN GALLERY <span>↗</span></a></div><div className="gallery-grid">{galleryItems.map((item, index) => <article className={`gallery-card gallery-${index + 1}`} key={item.title}><div className="gallery-photo" style={{ backgroundImage: `url(${item.image})` }} /><div className="gallery-label"><span>{item.category}</span><b>{item.title}</b><small>{item.meta}</small></div></article>)}</div></section>

    <section id="command" className="section-pad command-home dark-section reveal"><SectionKicker number="04" label="CHAIN OF COMMAND" /><div className="section-heading"><h2>THE FEW WHO <em>LEAD.</em></h2><a className="text-link" href="#command">VIEW COMMAND <span>↗</span></a></div><div className="command-branch"><div className="command-node command-root"><img src="/images/tactical-close.png" alt="Commander profile" /><span>01</span><div><b>COMMANDER · 1 PERSON</b><strong>COL. A. MERCER</strong></div></div><div className="command-branches command-chain"><div className="command-node"><img src="/images/tactical-night.png" alt="Lieutenant Commander profile" /><span>02</span><div><b>LIEUTENANT COMMANDER · 1 PERSON</b><strong>MAJ. R. VALE</strong></div></div><div className="command-node"><img src="/images/tactical-ocean.png" alt="Defense Intelligence Advisor profile" /><span>03</span><div><b>DEFENSE INTELLIGENCE ADVISOR · 1 PERSON</b><strong>CAPT. J. ORTIZ</strong></div></div><div className="command-branches command-final"><div className="command-node"><img src="/images/tactical-desert.png" alt="Squadron Commander profile" /><span>04</span><div><b>SQUADRON COMMANDER · 2 PEOPLE</b><strong>LT. S. KOVAČ</strong></div></div><div className="command-node"><img src="/images/tactical-training.png" alt="Strategic Vanguard profile" /><span>05</span><div><b>STRATEGIC VANGUARD · 2 PEOPLE</b><strong>VANGUARD CELL</strong></div></div></div></div></div></section>

    <section id="updates" className="section-pad paper-section reveal"><SectionKicker number="05" label="LATEST SIGNALS" /><div className="full-update-list">{updates.map(([date, title, text], index) => <article key={title}><div className="update-thumb" style={{ backgroundImage: `url(${galleryItems[index]?.image ?? '/images/tactical-night.png'})` }} /><span>{date}</span><div><h2>{title}</h2><p>{text}</p><a className="text-link" href="#updates">READ MORE <span>↗</span></a></div></article>)}</div></section>

    <section id="honorary" className="section-pad dark-section reveal"><SectionKicker number="06" label="HONORARY ROLL" /><div className="section-heading"><h2>REMEMBERED<br /><em>BY THE UNIT.</em></h2><a className="text-link" href="#honorary">HALL OF FAME <span>↗</span></a></div><div className="honorary-preview"><article><div className="honorary-image" style={{ backgroundImage: "url('/images/tactical-close.png')" }} /><div><span>001 // HONORARY</span><h3>THE FOUNDING CADRE</h3><p>For those who shaped the standard before there was a name for it.</p><a className="text-link" href="https://www.roblox.com/communities/156700841" target="_blank" rel="noreferrer">VISIT PROFILE <span>↗</span></a></div></article><article><div className="honorary-image" style={{ backgroundImage: "url('/images/tactical-night.png')" }} /><div><span>002 // HONORARY</span><h3>THE QUIET PROFESSIONALS</h3><p>For operators whose work made the next mission possible.</p><a className="text-link" href="https://www.roblox.com/communities/156700841" target="_blank" rel="noreferrer">VISIT PROFILE <span>↗</span></a></div></article></div></section>

  </TacticalShell>
}
