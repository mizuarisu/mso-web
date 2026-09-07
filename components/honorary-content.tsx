import { PageHero } from './route-content'
import { SectionKicker } from './tactical-shell'

const honorees = [
  ['01', 'COL. ELIAS VOSS', 'FOUNDING COMMANDER', 'For establishing the doctrine that became the foundation of every Vanguard cell.'],
  ['02', 'MSGT. MARA KLINE', 'MASTER INSTRUCTOR', 'For an uncompromising standard that shaped a generation of operators.'],
  ['03', 'DR. IAN MERCER', 'MISSION SUPPORT', 'For turning field intelligence into the decisive advantage.'],
  ['04', 'CAPT. NOAH REYES', 'OPERATIONAL LEAD', 'For leadership under pressure and a record defined by bringing everyone home.'],
]

export function HonoraryContent() {
  return <><PageHero eyebrow="07 // HALL OF FAME" title="THE ONES WHO" accent="SET THE STANDARD." copy="A living record of the people whose discipline, imagination, and service gave Vanguard its shape." image="/images/tactical-close.png" /><section className="section-pad paper-section reveal"><SectionKicker number="08" label="HONORARY LISTING" /><div className="honorary-list">{honorees.map(([number, name, role, text]) => <article key={number}><span>{number}</span><div><p>{role}</p><h2>{name}</h2><span>{text}</span></div><b>HONORED</b></article>)}</div></section><section className="quote-section reveal"><p>“A standard survives when someone chooses to carry it forward.”</p><span>— VANGUARD HONOR ROLL</span></section></>
}
