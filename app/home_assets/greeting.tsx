

export default function Greeting(){
    return(
        <div className='w-full flex justify-center h-[84vh] px-16 py-40 '>
            <div className="w-full md:w-3/4 flex flex-col justify-center md:items-center space-y-8  ">
                <p className="text-5xl md:text-6xl">Welcome to my webpage!</p>
                <p className="text-xl">You can begin exploring by navigating to my other pages.</p>
                <div className="w-full md:w-1/4 flex justify-start space-x-12 md:justify-around ">
                    <a href="/projects" className="rounded-3xl">
                        <div className="rounded-3xl py-2 px-4 border ease-linear border-white  duration-300  hover:border-black/50">
                            <p className="underline">Projects</p>
                        </div>
                    </a>
                    <a href="/about" className="rounded-3xl">
                        <div className="rounded-3xl py-2 px-4 border ease-linear border-white  duration-300  hover:border-black/50">
                            <p className="underline">About</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}