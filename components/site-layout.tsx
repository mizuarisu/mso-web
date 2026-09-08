import { ReactNode } from 'react'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><div className="route-content">{children}</div><SiteFooter /></>
}
