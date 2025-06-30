"use client"

import React, { useEffect, useState } from 'react'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaRegHeart, FaRegMoon } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode.toggle'
import Link from 'next/link'




function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          
        }
      };


    return (

        <>
            <header className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>

                <div className='container mx-auto flex h-full max-w-8xl items-center justify-between border-b'>
                    <Link href={'/'}>
                        <div className="logo">
                            <h1 className='text-[37px] font-semibold text-center'>{('</LOGO>')}</h1>
                        </div>
                    </Link>

                    <ul className='flex gap-3 text-[16px] font-semibold text-center mr-[200px]'>
                        <Link href={'/'}><Button variant={'li'} >Home</Button></Link>
                        <li><Button variant={'li'} onClick={() => scrollToSection("training")}>Training</Button></li>
                    </ul>

                    <div className='flex gap-5'>
                        <Button variant={'outline'}><HiMiniMagnifyingGlass /></Button>
                        <Button variant={'outline'}><FaRegHeart /></Button>
                        <ModeToggle />
                        <Select>
                            <SelectTrigger className="w-[100px] py-5">
                                <SelectValue placeholder="Lang" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">EN</SelectItem>
                                <SelectItem value="dark">UZ</SelectItem>
                                <SelectItem value="system">RU</SelectItem>
                            </SelectContent>
                        </Select>
                        <Link href={'/auth/login'}>
                            <Button variant={'log'} className='rounded-full font-bold'>Log In</Button>
                        </Link>
                    </div>
                </div>

            
            </header>
        </>
    )
}

export default Navbar