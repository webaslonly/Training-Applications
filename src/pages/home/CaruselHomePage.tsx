import Image from 'next/image'
import Link from 'next/link'
import l1 from '@/components/images/logo-1.png'
import l2 from '@/components/images/logo-3.png'
import l3 from '@/components/images/logo-2.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function CaruselHomePage() {
    return (
        <>

            <div className='container mx-auto max-w-6xl r max-sm:text-center'>
                <div className='relative mt-6 hidden w-full justify-center md:flex' role="region" aria-roledescription="carousel">
                    <div className='overflow-hidden'>
                        <div className='flex -ml-4 w-full '>

                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
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
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
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
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                                        <div className='min-w-0 shrink-0 grow-0 basis-full pl-4 w-full max-md:basis-1/2 lg:basis-1/2' role="group" aria-roledescription="slide">
                                            <Link href={'/'}>
                                                <div className='rounded-lg border bg-card text-card-foreground shadow-sm group w-full'>
                                                    <div className='p-6 pt-1 relative h-64 w-full '>
                                                        <Image
                                                            src={l3}
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
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/2">
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
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>


                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CaruselHomePage
