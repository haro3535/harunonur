import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full py-2 space-y-6 divide-y-2'>

        <div className='w-fit block py-8 space-y-4 px-4 my-8'>
          <p className='text-5xl'>My projects</p>
          <p className='text-lg'>You can see more on Github</p>
          <a href="https://github.com/haro3535" title='/haro3535' className='absolute underline decoration-2 hover:opacity-70'><p className=''>Github</p></a>
        </div>

        <div className='w-full space-y-6 items-center pt-8'>
          <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-full h-auto lg:flex border-2 rounded-3xl'>
              <div className='w-full lg:w-2/6 h-auto relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl '
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full lg:w-4/6 h-auto space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>The Syllabus App</p>
                <p className='text-md py-4'>
                  The Syllabus App is a Windows desktop application designed for creating, editing, 
                  deleting, comparing, and importing/exporting versions of course syllabi, 
                  with a focus on version control. Implemented in Java, the application will be installed on target 
                  computers via an installer, eliminating the need for additional programs. 
                  Its primary purpose is to streamline the management of course syllabus documents within the university, 
                  addressing challenges related to changes and updates by offering efficient data entry, robust version control, 
                  and simplified documentation processes.
                  </p>
                <div className='w-full flex justify-end '>
                  <a href="https://github.com/egedenizz/SE302-syllabusApp" rel='noopener' title='syllabusApp' target='_blank' className='w-fit  mt-4 hover:opacity-70'>
                    Go to project -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-full h-auto lg:flex border-2 rounded-3xl'>
              <div className='w-full lg:w-2/6 h-auto relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl '
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full lg:w-4/6 h-auto space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Header</p>
                <p className='text-md py-4'>
                  The Syllabus App is a Windows desktop application designed for creating, editing, 
                  deleting, comparing, and importing/exporting versions of course syllabi, 
                  with a focus on version control. Implemented in Java, the application will be installed on target 
                  computers via an installer, eliminating the need for additional programs. 
                  Its primary purpose is to streamline the management of course syllabus documents within the university, 
                  addressing challenges related to changes and updates by offering efficient data entry, robust version control, 
                  and simplified documentation processes.
                  </p>
                <div className='w-full flex justify-end '>
                  <a href="https://github.com/egedenizz/SE302-syllabusApp" rel='noopener' title='syllabusApp' target='_blank' className='w-fit  mt-4 hover:opacity-70'>
                    Go to project -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-full h-auto lg:flex border-2 rounded-3xl'>
              <div className='w-full lg:w-2/6 h-auto relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl '
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
              <div className='w-full lg:w-4/6 h-auto space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Header</p>
                <p className='text-md py-4'>
                  The Syllabus App is a Windows desktop application designed for creating, editing, 
                  deleting, comparing, and importing/exporting versions of course syllabi, 
                  with a focus on version control. Implemented in Java, the application will be installed on target 
                  computers via an installer, eliminating the need for additional programs. 
                  Its primary purpose is to streamline the management of course syllabus documents within the university, 
                  addressing challenges related to changes and updates by offering efficient data entry, robust version control, 
                  and simplified documentation processes.
                  </p>
                <div className='w-full flex justify-end '>
                  <a href="https://github.com/egedenizz/SE302-syllabusApp" rel='noopener' title='syllabusApp' target='_blank' className='w-fit  mt-4 hover:opacity-70'>
                    Go to project -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
