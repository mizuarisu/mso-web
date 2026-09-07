import Link from 'next/link'

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-identity"><Link href="/" className="footer-brand"><img src="/images/division-emblem.webp" alt="" /><span><b>VANGUARD</b><small>SPECIAL OPERATIONS DIVISION</small></span></Link><p>The premier fictional special operations division. We execute difficult missions with discipline, discretion, and decisive action.</p><strong>WEBSITE CREDITS: <em>VANGUARD CREATIVE CELL</em></strong></div>
      <div><h3>DIVISIONS</h3><Link href="/divisions">ASF</Link><Link href="/divisions">75TH RR</Link><Link href="/divisions">JFKSWCS</Link><Link href="/divisions">TFD</Link></div>
      <div><h3>LINKS</h3><Link href="/honorary">Honorary</Link><Link href="/gallery">Gallery</Link><Link href="/access">Access Request</Link><Link href="/updates">Situation Reports</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 VANGUARD SPECIAL OPERATIONS. ALL RIGHTS RESERVED.</span><span>TERMS OF SERVICE &nbsp;&nbsp; PRIVACY POLICY</span></div>
  </footer>
}
