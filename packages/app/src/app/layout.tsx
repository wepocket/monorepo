import type { Metadata, Viewport } from 'next'
import { PropsWithChildren } from 'react'
import { SITE_DESCRIPTION, SITE_INFO, SITE_NAME, SITE_URL, SOCIAL_TWITTER } from '@/utils/site'
import { Layout } from '@/components/Layout'
import { headers } from 'next/headers'
import { Providers } from '@/context'
import '../assets/globals.css'

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} · ${SITE_INFO}`,
    template: `${SITE_NAME} · %s`,
  },
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: '/opengraph-image',
  },
  twitter: {
    card: 'summary_large_image',
    site: SOCIAL_TWITTER,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: '/opengraph-image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default async function RootLayout(props: PropsWithChildren) {
  const headersList = await headers()
  const cookies = headersList.get('cookie')

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href={`/img/favicon.svg`} />
      </head>

      <body>
        <Providers cookies={cookies}>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
