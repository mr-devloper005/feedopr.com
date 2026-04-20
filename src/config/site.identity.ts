export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'eimxpghq85',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'feedopr',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Press distribution built for measurable reach',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'feedopr distributes announcements to national syndication partners, trade desks, and digital channels—with analytics you can act on.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'feedopr.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://feedopr.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
