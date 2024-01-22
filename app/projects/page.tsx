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
            <div className='w-full h-auto xl:flex border-2 rounded-3xl'>
              <div className='w-full xl:w-2/6 h-80 xl:h-auto relative'>
                <Image
                  alt='Photo'
                  className='object-fit rounded-t-3xl xl:rounded-r-none xl:rounded-l-3xl'
                  fill={true}
                  src={'/syllabusApp.jpg'}
                  />
              </div>
              <div className='w-full xl:w-4/6 h-auto space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>The SyllabusApp</p>
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
            <div className='w-full h-auto xl:flex border-2 rounded-3xl'>
              <div className='w-full xl:w-2/6 xl:h-auto h-80 relative'>
                <Image
                  alt='Photo'
                  className='object-cover rounded-t-3xl xl:rounded-r-none xl:rounded-l-3xl '
                  fill={true}
                  src={'/team6Dictionary.jpg'}
                  />
              </div>
              <div className='w-full xl:w-4/6 h-auto space-y-4 py-4 px-4 divide-y-2'>
                <p className='text-3xl'>Team6 Dictionary</p>
                <p className='text-md py-4'>
                The Team6 Dictionary is a Windows desktop application designed for searching, editing, deleting, and creating words/sentences within dictionaries. 
                Developed in Java, the application is installed on target computers through a dedicated installer, eliminating the need for additional programs. 
                Its primary functionality is to locate a specified word or sentence within the application without requiring an internet connection.
                  </p>
                <div className='w-full flex justify-end '>
                  <a href="https://github.com/haro3535/CE-216" rel='noopener' title='Team6 Dictionary' target='_blank' className='w-fit  mt-4 hover:opacity-70'>
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
