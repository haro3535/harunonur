import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full  border-2  py-2 space-y-6'>
        <p className='text-5xl'>My projects</p>
        <p className='text-lg'>You can see more on Github</p>
        <a href="https://github.com/haro3535">Github</a>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className='w-3/4 border-2 rounded-3xl'>
            <div className='w-full h-80 relative'>
              <Image
                alt='Photo'
                className='object-cover rounded-t-3xl'
                fill={true}
                src={'/image1.jpg'}
                />
            </div>
            <div className='w-full h-60 space-y-4'>
              <p className='text-3xl'>Header</p>
              <p className='text-lg'> Merhabalar</p>
            </div>
          </div>
          <div className='w-3/4 border-2 rounded-3xl'>
            <div className='w-full h-80 relative'>
              <Image
                alt='Photo'
                className='object-cover rounded-t-3xl'
                fill={true}
                src={'/image1.jpg'}
                />
            </div>
            <div className='w-full h-60 space-y-4'>
              <p className='text-3xl'>Header</p>
              <p className='text-lg'> Merhabalar</p>
            </div>
          </div>
          <div className='w-3/4 border-2 rounded-3xl'>
            <div className='w-full h-80 relative'>
              <Image
                alt='Photo'
                className='object-cover rounded-t-3xl'
                fill={true}
                src={'/image1.jpg'}
                />
            </div>
            <div className='w-full h-60 space-y-4'>
              <p className='text-3xl'>Header</p>
              <p className='text-lg'> Merhabalar</p>
            </div>
          </div>
          <div className='w-3/4 border-2 rounded-3xl'>
            <div className='w-full h-80 relative'>
              <Image
                alt='Photo'
                className='object-cover rounded-t-3xl'
                fill={true}
                src={'/image1.jpg'}
                />
            </div>
            <div className='w-full h-60 space-y-4'>
              <p className='text-3xl'>Header</p>
              <p className='text-lg'> Merhabalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
