'use client';

import React, { useEffect, useState } from 'react';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaRegHeart, FaRegMoon } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode.toggle';
import Link from 'next/link';
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs';
import { useLanguage } from '@/contexts/language-context';
import { languageNames, type Language } from '@/lib/i18n';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isSignedIn } = useAuth();
  const { currentLanguage, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  if (!mounted) {
    return (
      <header className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
        <div className='container mx-auto flex h-full max-w-8xl items-center justify-between border-b'>
          <Link href={'/'}>
            <div className='logo'>
              <h1 className='text-[37px] font-semibold text-center'>
                {'</LOGO>'}
              </h1>
            </div>
          </Link>
          <div className='flex gap-5'>
            <Button variant={'outline'} disabled>
              <HiMiniMagnifyingGlass />
            </Button>
            <Button variant={'outline'} disabled>
              <FaRegHeart />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
        <div className='container mx-auto flex h-full max-w-8xl items-center justify-between border-b'>
          <Link href={'/'}>
            <div className='logo'>
              <h1 className='text-[37px] font-semibold text-center'>
                {'</LOGO>'}
              </h1>
            </div>
          </Link>

          <ul className='flex gap-3 text-[16px] font-semibold text-center mr-[200px]'>
            <Link href={'/'}>
              <Button variant={'li'}>{t('nav.home')}</Button>
            </Link>
            <li>
              <Button
                variant={'li'}
                onClick={() => scrollToSection('training')}
              >
                {t('nav.training')}
              </Button>
            </li>
          </ul>

          <div className='flex gap-5'>
            <Button variant={'outline'} title={t('nav.search')}>
              <HiMiniMagnifyingGlass />
            </Button>
            <ModeToggle />
            <Select value={currentLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className='w-[100px] py-5'>
                <SelectValue placeholder={t('nav.language')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='en'>{languageNames.en}</SelectItem>
                <SelectItem value='uz'>{languageNames.uz}</SelectItem>
                <SelectItem value='ru'>{languageNames.ru}</SelectItem>
              </SelectContent>
            </Select>

            {/* Clerk Authentication Components */}
            {mounted && isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                    userButtonPopoverCard:
                      'bg-background border shadow-lg rounded-lg p-2',
                  },
                }}
              />
            ) : (
              <div className='flex gap-2'>
                <SignInButton mode='modal'>
                  <Button variant={'log'} className='rounded-full font-bold'>
                    {t('nav.logIn')}
                  </Button>
                </SignInButton>
                <SignUpButton mode='modal'>
                  <Button
                    variant={'outline'}
                    className='rounded-full font-bold'
                  >
                    {t('nav.signUp')}
                  </Button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
