import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Sign Up!',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/site-prev.jpg`,
  },
  input: {
    text: 'Your Email',
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
})

export const metadata: Metadata = {
  title: 'Advanced Frame',
  description: 'Another, more advanced frame example',
  openGraph: {
    title: 'Advanced Frame',
    description: 'Another, more advanced frame example',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-prev.jpg`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <div>
      <h1>Advanced Frame 1</h1>
      <p>{metadata.description}</p>
    </div>
  )
}