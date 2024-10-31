import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 
      'Discover the story behind the coder! Uncover details about my academic journey, current position, and more. Download my CV in PDF format for a comprehensive overview. Get to know the person behind the code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='w-full lg:w-2/3'>
        {children}
      </div>
  )
}