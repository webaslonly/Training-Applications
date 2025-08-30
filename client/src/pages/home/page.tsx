'use client';

import Image from 'next/image';
import home_png from '@/components/images/2.png';
import { Button } from '@/components/ui/button';
import CaruselHomePage from './CaruselHomePage';
import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';

function Home() {
  const [mounted, setMounted] = useState(false);
  const { isSignedIn } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Home page 1 */}
      <div className='container mx-auto mt-8 grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-16 max-sm:text-center pt-24'>
        <div className='items-center mt-[108px]'>
          <h1 className='font-semibold text-7xl '>
            {t('home.title')} <br />
            <span className='text-[#0c14a3]'>{t('home.getStarted')}</span>{' '}
            <span className='text-[#3a0ca3]'>{t('common.here')}</span>
          </h1>
          <p className='text-muted-foreground max-sm:text-sm font-semibold'>
            {t('home.subtitle')}
          </p>

          <div className='pt-[100px]'>
            <Button variant={'find'}>{t('courses.viewCourse')}</Button>
          </div>
        </div>

        <div className=''>
          <Image
            src={home_png}
            width={600}
            height={600}
            alt='Picture of the author'
            className=''
          />
        </div>
      </div>

      {/* Home page 2 */}
      <div className='container mx-auto max-w-6xl py-12 max-sm:text-center'>
        <div className='flex items-center justify-end max-md:flex-col max-md:items-start '>
          <div className='flex flex-col space-y-1 text-end '>
            <h1 className='font-space-grotesk text-3xl font-bold max-sm:text-lg'>
              {t('courses.title')}
            </h1>
            <p className='text-muted-foreground max-sm:text-sm font-semibold'>
              {t('courses.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Authentication-based content */}
      {mounted && (
        <>
          {isSignedIn ? (
            <div>
              <CaruselHomePage />
            </div>
          ) : (
            <div className='flex justify-center items-center '>
              <Link href={'/auth/login'}>
                <Button variant={'find'} className=''>
                  {t('nav.logIn')} {t('common.to')} {t('common.start')} {t('common.learning')}
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Home;
