'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { siteContent } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getAdminId() { const session = await auth.api.getSession({ headers: await headers() }); if (!session?.user || (session.user as { role?: string }).role !== 'admin') throw new Error('Unauthorized'); return session.user.id }
export async function listContent() { await getAdminId(); return db.select().from(siteContent).orderBy(desc(siteContent.updatedAt)) }
export async function saveContent(input: { id?: number; kind: string; title: string; slug: string; summary: string; body: string }) { const userId = await getAdminId(); if (input.id) await db.update(siteContent).set({ kind: input.kind, title: input.title, slug: input.slug, summary: input.summary, body: input.body, updatedAt: new Date() }).where(eq(siteContent.id, input.id)); else await db.insert(siteContent).values({ ...input, createdBy: userId }); revalidatePath('/settings') }
export async function deleteContent(id: number) { await getAdminId(); await db.delete(siteContent).where(eq(siteContent.id, id)); revalidatePath('/settings') }
