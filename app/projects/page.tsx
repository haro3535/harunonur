import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-auto mx-96'>
      <p className='text-5xl'>My projects</p>
      <p className='text-lg'>You can see more on Github</p>
      <a href="https://github.com/haro3535">Github</a>
      <div className='w-full py-8 '>
        <div className='w-full flex justify-center border-2 rounded-lg'>
          <div className='w-4/6 h-80 space-y-4 border-2'>
            <p className='text-3xl'>Header</p>
            <p className='text-lg'> Merhabalar</p>
          </div>
          <div className='w-2/6 h-80 relative'>
            <Image
              alt='Photo'
              className='object-cover'
              fill={true}
              src={'/image1.jpg'}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
