import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full min-h-screen px-80">
      <div className='w-full border-2 border-black'>
        <div>
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
      <p>merhaba</p>
    </main>
  )
}
