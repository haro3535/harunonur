import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full py-2 space-y-6 divide-y-2'>

        <div className='w-full py-8 space-y-6 px-4'>
          <p className='text-5xl'>My projects</p>
          <p className='text-lg'>You can see more on Github</p>
          <a href="https://github.com/haro3535" title='/haro3535' className='underline decoration-2 hover:opacity-70'><p className='mt-2'>Github</p></a>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 gap-y-16 lg:gap-y-20 items-center pt-8'>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full md:w-10/12 border-2 rounded-3xl'>
              <div className='w-full h-80 relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl'
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full h-60 space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Header</p>
                <p className='text-lg'>Merhabalar</p>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full md:w-10/12 border-2 rounded-3xl'>
              <div className='w-full h-80 relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl'
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full h-60 space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Header</p>
                <p className='text-lg'>Merhabalar</p>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full md:w-10/12 border-2 rounded-3xl'>
              <div className='w-full h-80 relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl'
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full h-60 space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Header</p>
                <p className='text-lg'>Merhabalar</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
