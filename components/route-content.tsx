import Link from 'next/link'
import { SectionKicker } from './tactical-shell'

export const galleryItems = [
  { title: 'Night Hawk', category: 'OPERATIONS', meta: 'EXERCISE 24-07', image: '/images/tactical-night.png' },
  { title: 'Iron Resolve', category: 'TRAINING', meta: 'CAMP RAVEN', image: '/images/tactical-training.png' },
  { title: 'Desert Signal', category: 'FIELD NOTES', meta: 'JOINT TASKING', image: '/images/tactical-desert.png' },
  { title: 'Black Current', category: 'OPERATIONS', meta: 'ATLANTIC RANGE', image: '/images/tactical-ocean.png' },
]

export const divisions = [
  { code: '01', name: '1ST ASSAULT BRIGADE', role: 'CLANNERS', text: 'Precision assault, special reconnaissance, and mission command in denied environments.', icon: '/images/tactical-training.png' },
  { code: '02', name: '2ND ASSAULT BRIGADE', role: 'CLANNERS', text: 'Precision assault, special reconnaissance, and mission command in denied environments.', icon: '/images/tactical-desert.png' },
  { code: '03', name: '3RD ASSAULT BRIGADE', role: 'CLANNERS', text: 'Precision assault, special reconnaissance, and mission command in denied environments.', icon: '/images/tactical-ocean.png' },
  { code: '04', name: '[REDACTED]', role: 'REDACTED', text: 'INFORMATION CANNOT BE DISTRIBUTED.', icon: '/images/tactical-night.png' },
  { code: '05', name: 'ORLEANS COMPANY', role: 'MILSIM', text: 'Composed primarily of experienced operators to execute advanced operations.', icon: '/images/tactical-close.png' },
  { code: '06', name: 'STALLION COMPANY', role: 'MILSIM', text: 'The primary development company where operators build experience, improve tactical skills, and prepare for more advanced deployments.', icon: '/images/tactical-hero.png' },
  { code: '07', name: 'CONFLICT PROJECT', role: 'INDEPENDENT', text: 'A military and contracting company work among the Marine Special Operations. ' },
]

const updates = [
  ['08.09.26', 'VANGUARD SELECTS NEW RECONNAISSANCE CADRE', 'A new specialist cohort begins the first phase of assessment and field integration.'],
  ['21.08.26', 'OPERATION NIGHT HAWK // AFTER ACTION', 'A complete visual log from the division’s latest multi-cell exercise.'],
  ['04.08.26', 'THE STANDARD: WHY WE TRAIN IN THE DARK', 'A doctrine note on discomfort, clarity, and the discipline behind decisive action.'],
]

export function PageHero({ eyebrow, title, accent, copy, image = '/images/tactical-hero.png' }: { eyebrow: string; title: string; accent: string; copy: string; image?: string }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,9,10,.96), rgba(9,9,10,.7) 50%, rgba(9,9,10,.34)), url(${image})` }}><div className="hero-grid" /><div className="page-hero-content"><p className="eyebrow"><span className="live-dot" /> {eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1><p className="hero-copy">{copy}</p></div><span className="hero-coordinate">SECURE ARCHIVE // V-09</span></section>
}

export function AboutContent() {
  return <><PageHero eyebrow="01 // ORIENTATION" title="DISCIPLINE IS" accent="THE DIFFERENCE." copy="Vanguard is a fictional special operations division for immersive roleplay, built around a simple premise: preparation creates options when the situation stops being simple." /><section className="section-pad paper-section reveal"><SectionKicker number="02" label="THE DOCTRINE" /><div className="split-copy"><div><h2>QUIET<br /><em>PROFESSIONALS.</em></h2></div><div><p className="lead">We are not the first line. We are the line that appears when every other line has failed.</p><p>Our cells combine intelligence, technology, and human performance into a single operating picture. Every action is deliberate. Every standard exists because someone once needed it.</p><p>In the Vanguard, the mission is never an excuse for noise. It is a reason to become precise.</p></div></div></section><section className="red-band"><div><span>MISSION // 001</span><h2>MOVE FIRST.<br />MOVE <em>TOGETHER.</em></h2></div><Link className="button button-light" href="/divisions">VIEW CAPABILITIES <span>↗</span></Link></section></>
}

export function DivisionsContent() {
  return <><PageHero eyebrow="02 // CAPABILITIES" title="THE EDGE OF" accent="THE SPEAR." copy="Three disciplines. One operating picture. Each cell has a distinct role, but none operates alone." image="/images/tactical-training.png" /><section className="section-pad dark-section reveal"><SectionKicker number="03" label="OPERATIONAL CELLS" /><div className="division-detail-grid">{divisions.map((division) => <article className="division-detail" key={division.code}><div className="division-detail-top"><span>{division.code}</span><b>{division.role}</b></div><h2>{division.name}</h2><p>{division.text}</p><div className="detail-line"><span>READINESS</span><b>FULL SPECTRUM</b></div><div className="detail-line"><span>STATUS</span><b className="status-red">ACTIVE</b></div></article>)}</div></section><section className="section-pad paper-section reveal"><SectionKicker number="04" label="STRUCTURE" /><div className="structure-grid"><div><h2>BUILT AS<br /><em>ONE SYSTEM.</em></h2></div><div className="structure-list"><p><b>01 // COMMAND</b><span>Direction, standards, and final accountability.</span></p><p><b>02 // CELLS</b><span>Specialist teams designed for distinct mission profiles.</span></p><p><b>03 // SUPPORT</b><span>Intelligence, logistics, and technical enablement.</span></p></div></div></section></>
}

export function CommandContent() {
  const leaders = [['01', 'COMMANDING OFFICER', 'COL. A. MERCER'], ['02', 'EXECUTIVE OFFICER', 'MAJ. R. VALE'], ['03', 'OPERATIONS LEAD', 'CAPT. J. ORTIZ'], ['04', 'INTELLIGENCE DIRECTOR', 'LT. S. KOVAČ']]
  return <><PageHero eyebrow="03 // LEADERSHIP" title="THE FEW" accent="WHO LEAD." copy="Authority is earned in the field. Every decision carries the weight of the team behind it." image="/images/tactical-close.png" /><section className="section-pad paper-section reveal"><SectionKicker number="04" label="CHAIN OF COMMAND" /><div className="command-list large-command">{leaders.map(([number, role, name]) => <div key={number}><span>{number}</span><b>{role}</b><strong>{name}</strong></div>)}</div></section><section className="quote-section reveal"><p>“The standard is not the ceiling. It is the floor we refuse to fall beneath.”</p><span>— COMMAND DIRECTIVE 07</span></section></>
}

export function GalleryContent() {
  return <><PageHero eyebrow="04 // FIELD ARCHIVE" title="VISUAL" accent="LOG." copy="Selected imagery from training, exercises, and the quiet moments between them." image="/images/tactical-ocean.png" /><section className="section-pad dark-section reveal"><SectionKicker number="05" label="SELECTED RECORDS" /><div className="gallery-grid gallery-page-grid">{galleryItems.map((item, index) => <article className={`gallery-card gallery-${index + 1}`} key={item.title}><div className="gallery-photo" style={{ backgroundImage: `url(${item.image})` }} /><div className="gallery-label"><span>{item.category}</span><b>{item.title}</b><small>{item.meta}</small></div></article>)}</div></section></>
}

export function UpdatesContent() {
  return <><PageHero eyebrow="05 // SITREP" title="STAY" accent="INFORMED." copy="The latest from the field, the training floor, and the people who make the mission possible." image="/images/tactical-desert.png" /><section className="section-pad paper-section reveal"><SectionKicker number="06" label="LATEST SIGNALS" /><div className="full-update-list">{updates.map(([date, title, text]) => <article key={title}><span>{date}</span><div><h2>{title}</h2><p>{text}</p></div><b>↗</b></article>)}</div></section></>
}

export function AccessContent() {
  return <><PageHero eyebrow="06 // CONTROLLED ENTRY" title="READY WHEN" accent="IT MATTERS." copy="Vanguard access is reserved for people who understand that preparation is a form of respect." image="/images/tactical-close.png" /><section className="section-pad dark-section reveal"><SectionKicker number="07" label="REQUEST ACCESS" /><div className="access-grid"><div><h2>STEP INTO<br /><em>THE ARCHIVE.</em></h2><p className="lead">This is a fictional roleplay division. Use the channel below to request information, enlistment, or collaboration.</p></div><a className="button button-primary" href="mailto:access@vanguard.local">OPEN SECURE CHANNEL <span>↗</span></a></div></section></>
}
