import { PageHero } from './route-content'
import { SectionKicker } from './tactical-shell'

const honorees = [
  ['01', 'CMDR. BLUEYHAVOC', 'FOUNDING COMMANDER', 'For establishing the doctrine that became the foundation of every Special Operations structure.'],
  ['02', 'CMDR. MIKKY4K', 'INGENIURS', 'For assisting on shaping the Special Operations to what it have become in this day.'],
  ['03', 'CCI. 6ENNSORDD', 'THE WING', 'For supporting and overseeing the MSO back to back from its first release up until his retirement.'],
  ['04', 'LTCMDR. IATTEARTS', 'BRILLIANTS', 'For all of the spectacular changes and implementations throughout her career.'],
]

export function HonoraryContent() {
  return <><PageHero eyebrow="07 // HALL OF FAME" title="THE ONES WHO" accent="SET THE STANDARD." copy="A living record of the people whose discipline, imagination, and service gave Special Operations its shape." image="/images/tactical-close.png" /><section className="section-pad paper-section reveal"><SectionKicker number="08" label="HONORARY LISTING" /><div className="honorary-list">{honorees.map(([number, name, role, text]) => <article key={number}><span>{number}</span><div><p>{role}</p><h2>{name}</h2><span>{text}</span></div><b>HONORED</b></article>)}</div></section><section className="quote-section reveal"><p>“A standard survives when someone chooses to carry it forward.”</p><span>— MSO HONOR ROLL</span></section></>
}
