import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center'>
        <div className='w-full border-2 py-2 space-y-6'>
          <div id='card' className='w-full flex flex-col lg:flex-row items-center border-b-2 py-8'>
            <div className='lg:w-1/2 w-full lg:pr-16 min-w-64 flex lg:justify-end justify-center'>
              <div className='w-64 h-64 rounded-full relative'>
                <Image
                  alt='pp'
                  className='object-cover rounded-full'
                  fill={true}
                  src={'/image1.jpg'}
                  />
              </div>
            </div>
            <div className='lg:h-32 lg:w-0 lg:mt-0 mt-4 w-64 border-2 border-black'></div>
            <div className='lg:w-1/2 w-full min-w-64 py-6 lg:pl-16 flex flex-col lg:items-start items-center space-y-1'>
              <p className='text-md font-bold'>Name</p>
              <p id='name' className='lg:ml-4 text-xl'>Harun Onur</p>
              <p className='text-md font-bold'>Education</p>
              <p id='education' className='lg:ml-4 text-xl'>İzmir Ekonomi Üniversitesi</p>
              <p className='text-md font-bold'>Position</p>
              <p id='position' className='lg:ml-4 text-xl'>Computer Engineering Student</p>
            </div>
          </div>

          <div id='myAbout' className='w-full flex justify-center items-center p-4 border-b-2'>
            <div className='w-full px-6'>
              <p>Hi everyone!</p>
              <br />
              <p>I'm Harun, currently studying Computer Engineering at Izmir University of Economics. 
                I created this website to display my projects and other things I'm involved in. 
                I've always been a curious person, and that curiosity has kept me continuously gaining knowledge.
                <br /> 
                <br />
                Sports have always been a part of my life. I've been into swimming, calisthenics, football, skating, sailing, ice skating, and tennis. 
                I also play the guitar. I wouldn't say I'm really good at it, but I'm probably an intermediate-level guitarist.
                <br />
                <br /> 
                Model rockets and jet engines are my hobbies. I love watching videos about building rockets or jet engines. One day, I hope to build my own rockets and jet engines.
                </p>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center px-10'>
            <p>You can open my CV by clicking the link belove!</p>
            <br />
            <a href="Personal Resume.pdf" className='hover:opacity-50' title='Harun Onur CV' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
            </svg>
            </a>
            <br />
          </div>

          <div id='social-media' className='w-full h-24 flex justify-evenly md:justify-center'>
            <div className='w-1/6 h-full flex flex-col justify-evenly items-center '>
              <a href="https://github.com/haro3535" rel='noopener' title='/haro3535' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-github transition ease-in-out hover:opacity-70 hover:scale-125" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
              <p className='text-sm'>Github</p>
            </div>
            <div className='w-1/6 h-full flex flex-col justify-evenly items-center'>
              <a href="https://www.linkedin.com/in/harunonur/" rel='noopener' title='/in/harunonur' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38"  fill="currentColor" className="bi bi-linkedin transition ease-in-out hover:opacity-70 hover:scale-125" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              <p className='text-sm'>LinkedIn</p>
            </div>
            <div className='w-1/6 h-full flex flex-col justify-evenly items-center'>
              <a href="https://www.instagram.com/harunonr_/" rel='noopener' title='/harunonur' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-instagram transition ease-in-out hover:opacity-70 hover:scale-125" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
              <p className='text-sm'>Instagram</p>
            </div>
          </div>
        </div>
    </div>
  )
}