import { ReactNode } from 'react'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { PageTransition } from './page-transition'

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><PageTransition /><div className="route-content">{children}</div><SiteFooter /></>
}
