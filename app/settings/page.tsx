import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { listContent } from '@/app/actions/content'
import { SettingsEditor } from '@/components/settings-editor'
import { TacticalShell } from '@/components/tactical-shell'
import { PageHero } from '@/components/route-content'

export default async function SettingsPage() { const session = await auth.api.getSession({ headers: await headers() }); if (!session?.user) redirect('/access'); if ((session.user as { role?: string }).role !== 'admin') redirect('/'); const entries = await listContent(); return <TacticalShell><PageHero eyebrow="07 // ADMINISTRATOR CONTROL" title="CONTENT" accent="CONTROL." copy="Manage the live Vanguard archive, briefings, divisions, command records, gallery, and honorary entries." image="/images/tactical-training.png" /><section className="section-pad paper-section"><SettingsEditor initial={entries} /></section></TacticalShell> }
