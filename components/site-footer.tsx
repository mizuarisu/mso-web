import Link from 'next/link'

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-identity"><Link href="/" className="footer-brand"><img src="/images/division-emblem.webp" alt="" /><span><b>MARINE</b><small>SPECIAL OPERATIONS</small></span></Link><p>The marine powerful unit. We execute difficult missions with discipline, discretion, and decisive action.</p><strong>WEBSITE CREDITS: <em>lattearts</em></strong></div>
      <div><h3>COMPANY</h3><Link href="/#divisions">1st Brigade</Link><Link href="/#divisions">2nd Brigade</Link><Link href="/#divisions">Orleans</Link><Link href="/#divisions">Stallion</Link></div>
      <div><h3>LINKS</h3><Link href="/honorary">Honorary</Link><Link href="/gallery">Gallery</Link><Link href="/access">Access</Link><Link href="/updates">Updates</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 CUSA | MARINE SPECIAL OPERATIONS.</span></div>
  </footer>
}
