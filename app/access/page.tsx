import { PageHero } from '@/components/route-content'
import { TacticalShell } from '@/components/tactical-shell'
import { AuthForm } from '@/components/auth-form'

export default function AccessPage() { return <TacticalShell><PageHero eyebrow="06 // CONTROLLED ENTRY" title="SECURE" accent="LOGIN." copy="Administrator access is reserved for authorized Vanguard personnel." image="/images/tactical-close.png" /><section className="section-pad dark-section auth-section"><div className="auth-panel"><p className="section-kicker"><i /> AUTHENTICATION GATE</p><h2>ENTER THE<br /><em>ARCHIVE.</em></h2><AuthForm /></div></section></TacticalShell> }
