import Image from "next/image"
import home_png from '@/components/images/2.png'
import { Button } from "@/components/ui/button"
import CaruselHomePage from "./CaruselHomePage"
import { useState } from "react";
import Link from "next/link";


function Home() {

  const [isAuth, setIsAuth] = useState(false);

  return (


    <>
      {/* Home page 1 */}
      <div className='container mx-auto mt-8 grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-16 max-sm:text-center pt-24'>
        <div className='items-center mt-[108px]'>
          <h1 className='font-semibold text-7xl '>
            Initial training <br /><span className='text-[#0c14a3]'>start</span> <span className='text-[#3a0ca3]'>here</span>
          </h1>
          <p className='text-muted-foreground max-sm:text-sm font-semibold'>
            All good and reliable training for Ae, Pr and Ps is here
          </p>

          <div className="pt-[100px]">
            <Button variant={'find'}>
              Find Trainings
            </Button>
          </div>
        </div>

        <div className=''>
          <Image
            src={home_png}
            width={600}
            height={600}
            alt="Picture of the author"
            className=''
          />
        </div>
      </div>


      {/* Home page 2 */}



      <div className='container mx-auto max-w-6xl py-12 max-sm:text-center'>
        <div className='flex items-center justify-end max-md:flex-col max-md:items-start '>
          <div className='flex flex-col space-y-1 text-end '>
            <h1 className="font-space-grotesk text-3xl font-bold max-sm:text-lg">Browse of our free training</h1>
            <p className='text-muted-foreground max-sm:text-sm font-semibold'>The training you will need</p>
          </div>
        </div>
      </div>



      {isAuth ?
        <div>
          <CaruselHomePage />
        </div> :
        <div className="flex justify-center items-center ">
          <Link href={'/auth/login'}>
            <Button variant={'find'} className=''>Log In to start learning</Button>
          </Link>
        </div>
      }




    </>
  )
}

export default Home