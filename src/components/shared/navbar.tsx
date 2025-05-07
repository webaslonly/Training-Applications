"use client"

import React from 'react'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FaRegHeart, FaRegMoon } from 'react-icons/fa'
import { Button } from '../ui/button'
import { ModeToggle } from './mode.toggle'
import Link from 'next/link'



function Navbar() {
  return (
    <>
    <header className='flex justify-between pt-[27px] px-[90px] text-center items-center fixed top-0 w-full bg-background'>
        
        <Link href={'/'}>
            <div className="logo">
                <h1 className='text-[37px] font-semibold text-center'>{('</LOGO>')}</h1>
            </div>
        </Link>

        <ul className='flex gap-5 text-[16px] font-semibold text-center pr-[90px]'>
            <Button variant={'li'}>Home</Button>
            <Button variant={'li'}>About</Button>
            <Button variant={'li'}>Courses</Button>
        </ul>

        <div className='flex gap-5'>
            <Button variant={'outline'}><HiMiniMagnifyingGlass /></Button>
            <Button variant={'outline'}><FaRegHeart /></Button>
            <ModeToggle/>
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
            <Link href={'/login' }>
                <Button variant={'log'} className='rounded-full font-bold'>Log In</Button>
            </Link>
        </div>

    </header>
    </>
  )
}

export default Navbar
