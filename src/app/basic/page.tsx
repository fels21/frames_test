import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Frame',
  metadataBase: new URL('https://frames-test-lilac.vercel.app/'),
  description: 'A Farcaster Frame Demo',
  openGraph: {
    title: 'Basic Frame',
    description: 'A Farcaster Frame Demo',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-prev.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/site-prev.jpg`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1`,
    'fc:frame:button:1': 'Start',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Basic frame</h1>
      <p>{metadata.description}</p>
      <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/site-prev.jpg`} alt="Site Preview" />
    </div>
  )
}