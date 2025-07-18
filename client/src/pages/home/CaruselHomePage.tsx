import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import img1 from '@/components/images/logo-1.png';
import img2 from '@/components/images/logo-2.png';
import img3 from '@/components/images/logo-3.png';
import Link from 'next/link';

function CaruselHomePage() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='container mx-auto max-w-6xl py-12 max-sm:text-center'>
        <div className='flex items-center justify-end max-md:flex-col max-md:items-start'>
          <div className='flex flex-col space-y-1 text-end'>
            <div id='training'>
              <div className='w-full items-center px-16'>
                <div className='flex gap-4'>
                  <div className='p-4 md:basis-1/2'>
                    <Card>
                      <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                        <div className='w-40 h-40 bg-muted animate-pulse rounded' />
                        <div className='h-6 bg-muted animate-pulse rounded w-32' />
                      </CardContent>
                    </Card>
                  </div>
                  <div className='p-4 md:basis-1/2'>
                    <Card>
                      <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                        <div className='w-40 h-40 bg-muted animate-pulse rounded' />
                        <div className='h-6 bg-muted animate-pulse rounded w-32' />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='container mx-auto max-w-6xl py-12 max-sm:text-center'>
        <div className='flex items-center justify-end max-md:flex-col max-md:items-start '>
          <div className='flex flex-col space-y-1 text-end '>
            <div id='training'>
              <Carousel
                opts={{
                  align: 'start',
                }}
                className='w-full  items-center px-16'
              >
                <CarouselContent>
                  {/* 1 - item */}
                  <CarouselItem className='md:basis-1/2'>
                    <Link href='/courses/adobe-after-effects'>
                    <div className='p-4'>
                      <Card>
                        <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                          <Image
                            src={img1}
                            alt='Dasturlash'
                            width={160}
                            height={160}
                            className='object-contain'
                          />
                          <span className='text-xl font-bold'>
                            Adobe After Effects
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                    </Link>
                  </CarouselItem>

                  {/* 2 - item */}
                  <CarouselItem className='md:basis-1/2'>
                    <Link href='/courses/adobe-premiere-pro'>
                    <div className='p-4'>
                      <Card>
                        <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                          <Image
                            src={img2}
                            alt='Sport'
                            width={160}
                            height={160}
                            className='object-contain'
                          />
                          <span className='text-xl font-bold'>
                            Adobe Premiere Pro
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                    </Link>
                  </CarouselItem>

                  {/* 3 - item */}
                  <CarouselItem className='md:basis-1/2'>
                    <Link href='/courses/adobe-photoshop'>
                    <div className='p-4'>
                      <Card>
                        <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                          <Image
                            src={img3}
                            alt="Til o'ganish"
                            width={160}
                            height={160}
                            className='object-contain'
                          />
                          <span className='text-xl font-bold'>
                            Adobe Photoshop
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                    </Link>
                  </CarouselItem>

                  {/* 4 - item */}
                  <CarouselItem className='md:basis-1/2'>
                    <div className='p-4'>
                      <Card>
                        <CardContent className='flex flex-col items-center justify-center p-6 space-y-3'>
                          <Image
                            src={img1}
                            alt='Video montaj'
                            width={160}
                            height={160}
                            className='object-contain'
                          />
                          <span className='text-xl font-bold'>
                            Adobe After Effects
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className='left-0' />
                <CarouselNext className='right-0' />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaruselHomePage;
