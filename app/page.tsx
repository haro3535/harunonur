import Image from 'next/image'
import Greeting from './home_assets/greeting'

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <Greeting />
      <div className='w-auto h-1/3 mx-96 border-2 border-black'>
        <div className=''>
          <h1 className='sm:text-5xl'>Header</h1>
        </div>
        <div></div>
        {/* <Image
          src={'/image1.jpg'}
          className='object-cover'
          fill={true}
          alt='Resim'
          /> */}
      </div>
    </main>
  )
}
