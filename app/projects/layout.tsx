import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 
      'Explore my completed and ongoing projects, each with a unique name, description, and screenshots. Check them out on GitHub too.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='w-10/12 sm:w-2/3'>
        {children}
      </div>
  )
}
