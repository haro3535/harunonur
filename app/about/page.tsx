import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center'>
        <div className=' w-2/3 min-w-[920px] border-2  py-2 space-y-6'>
          <div id='card' className='w-full flex items-center border-b-2 py-8'>
            <div className='w-1/2 px-16 min-w-64 flex justify-end'>
              <div className='w-64 h-64 rounded-full relative'>
                <Image
                  alt='pp'
                  className='object-cover rounded-full'
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
            </div>
            <div className='h-32 border-2 border-black'></div>
            <div className='w-1/2 min-w-64 py-6 px-16 flex flex-col space-y-1'>
              <p className='text-md font-bold'>Name</p>
              <p id='name' className='ml-4 text-xl'>Harun Onur</p>
              <p className='text-md font-bold'>Education</p>
              <p id='education' className='ml-4 text-xl'>İzmir Ekonomi Üniversitesi</p>
              <p className='text-md font-bold'>Position</p>
              <p id='position' className='ml-4 text-xl'>Student</p>
            </div>
          </div>

          <div id='myAbout' className='w-full flex justify-center items-center p-4'>
            <div>
              <p>Burada hakimda kismi olacak</p>
            </div>
          </div>
        </div>
    </div>
  )
}