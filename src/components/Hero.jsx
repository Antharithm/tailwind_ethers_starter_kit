const Hero = () => {
  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">Hero
        <h1 className="text-5xl md:text-6lx lx:text-7lx font-bold tracking-tight mb-12">
            <span className="capitalize">Bring creative projects to life on</span>
            <br />
            <space className="uppercase text-green-600">Genesis.</space>
        </h1>
        <div className="flex justify-center items-center space-x-2">
            <button type='button'
            className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-s leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700'
            >
                Add Project
            </button>
            
            <button type='button'
            className='inline-block px-6 py-2.5 border border-green-600 font-medium text-s leading-tight uppercase text-green-600
            rounded-full shadow-md bg-transparent hover:bg-green-700 hover:text-white'
            >
                Back Projects
            </button> 
        </div>
        
        <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-green-900 leading-5"
                >
                    {0}
                </span>
                <span>Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-green-900 leading-5"
                >
                    {0}
                </span>
                <span>Backings</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-green-900 leading-5"
                >
                    {0} ETH
                </span>
                <span>Donated</span>
            </div>
        </div>
    </div>
  )
}

export default Hero