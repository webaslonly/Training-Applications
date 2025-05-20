import Image from "next/image"
import home_png from '@/components/images/1.png'


function Home() {
  return (
    <>
      <div className='flex pl-[220px] pr-[220px] justify-between pt-[280px]'>
        <div className='items-center'>
          <h1 className='font-semibold text-8xl '>
            Initial training <br /><span className='text-[#0c14a3]'>start</span> <span className='text-[#3a0ca3]'>here</span>
          </h1>
          <p className='text-muted-foreground max-sm:text-sm'>
            All good and reliable training for Ae, Pr and Ps is here
          </p>

          <div className="pt-[100px]">
            <button
              className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"
              ></span>
              <span className="relative text-xl font-semibold">Find Training</span>
            </button>
          </div>
        </div>

        <div className='mb-[190px]'>
          <Image
            src={home_png}
            width={600}
            height={600}
            alt="Picture of the author"
            className='rounded-r-[200px]'
          />
        </div>
      </div>
    </>
  )
}

export default Home
