import Link from 'next/link'

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-identity"><Link href="/" className="footer-brand"><img src="/images/division-emblem.webp" alt="" /><span><b>MARINE</b><small>SPECIAL OPERATIONS</small></span></Link><p>The marine powerful division. We execute difficult missions with discipline, discretion, and decisive action.</p><strong>WEBSITE CREDITS: <em>Iattearts</em></strong></div>
      <div><h3>DIVISIONS</h3><Link href="/divisions">ASF</Link><Link href="/divisions">75TH RR</Link><Link href="/divisions">JFKSWCS</Link><Link href="/divisions">TFD</Link></div>
      <div><h3>LINKS</h3><Link href="/honorary">Honorary</Link><Link href="/gallery">Gallery</Link><Link href="/access">Access</Link><Link href="/updates">Updates</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 CUSA | MARINE SPECIAL OPERATIONS.</span></div>
  </footer>
}
