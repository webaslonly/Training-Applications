import Image from "next/image"
import home_png from '@/components/images/2.png'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import l1 from '@/components/images/logo-1.png'
import l2 from '@/components/images/logo-3.png'


function Home() {
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
        <div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
          <div className='flex flex-col space-y-1'>
            <h1 className="font-space-grotesk text-3xl font-bold max-sm:text-lg">Browse of our free training</h1>
            <p className='text-sm text-muted-foreground'>The training you will need</p>
          </div>
        </div>

        <div className='relative mt-6 hidden w-full justify-center md:flex' role="region" aria-roledescription="carousel">
          <div className='overflow-hidden'>
            <div className='flex -ml-4 w-full '>

              <div className='min-w-0 shrink-0 grow-0 basis-full pl-4 w-full max-md:basis-1/2 lg:basis-1/2' role="group" aria-roledescription="slide">
                <Link href={'/'}>
                  <div className='rounded-lg border bg-card text-card-foreground shadow-sm group w-full'>
                    <div className='p-6 pt-1 relative h-64 w-full '>
                      <Image
                        src={l1}
                        width={290}
                        height={290}
                        alt="Picture of the author"
                        className='object-cover duration-700 ease-in-out transition-all scale-100 blur-0 grayscale-0 max-sm:size-0 '
                      />
                    </div>

                    <div className='my-4 flex flex-col space-y-2 px-2 pt-4'> 
                      <h2 className='font-space-grotesk text-2xl font-bold max-sm:text-lg'>Adobe Affter Efects</h2>
                    </div>

                  </div>
                </Link>
              </div>

              <div className='min-w-0 shrink-0 grow-0 basis-full pl-4 w-full max-md:basis-1/2 lg:basis-1/2' role="group" aria-roledescription="slide">
                <Link href={'/'}>
                  <div className='rounded-lg border bg-card text-card-foreground shadow-sm group w-full'>
                    <div className='p-6 pt-1 relative h-64 w-full '>
                      <Image
                        src={l2}
                        width={290}
                        height={290}
                        alt="Picture of the author"
                        className='object-cover duration-700 ease-in-out transition-all scale-100 blur-0 grayscale-0 max-sm:size-0 flex justify-center '
                      />
                    </div>

                    <div className='my-4 flex flex-col space-y-2 px-2 pt-4'> 
                      <h2 className='font-space-grotesk text-2xl font-bold max-sm:text-lg'>Adobe Photoshop</h2>
                    </div>

                  </div>
                </Link>
              </div>

              <div className='min-w-0 shrink-0 grow-0 basis-full pl-4 w-full max-md:basis-1/2 lg:basis-1/2' role="group" aria-roledescription="slide">
                <Link href={'/'}>
                  <div className='rounded-lg border bg-card text-card-foreground shadow-sm group w-full'>
                    <div className='p-6 pt-1 relative h-64 w-full '>
                      <Image
                        src={l2}
                        width={290}
                        height={290}
                        alt="Picture of the author"
                        className='object-cover duration-700 ease-in-out transition-all scale-100 blur-0 grayscale-0 max-sm:size-0 items-center '
                      />
                    </div>

                    <div className='my-4 flex flex-col space-y-2 px-2 pt-4'> 
                      <h2 className='font-space-grotesk text-2xl font-bold max-sm:text-lg'>Adobe Premiere Pro</h2>
                    </div>

                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home