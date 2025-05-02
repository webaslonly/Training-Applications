import React from 'react'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FaRegHeart, FaRegMoon } from 'react-icons/fa'
import { Button } from '../ui/button'
import { ModeToggle } from './mode.toggle'

function Navbar() {
  return (
    <>
    <header className='flex justify-between pt-[27px] px-[40px] text-center items-center'>
        
        <div className="logo">
            <h1 className='text-[37px] font-semibold text-center'>{('</LOGO>')}</h1>
        </div>

        <ul className='flex gap-5 text-[16px] font-semibold text-center pr-[90px]'>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
        </ul>

        <div className='flex gap-5'>
            <Button variant={'outline'}><HiMiniMagnifyingGlass /></Button>
            <Button variant={'outline'}><FaRegHeart /></Button>
            <ModeToggle/>
            <Select>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="light">English</SelectItem>
                <SelectItem value="dark">O'zbekcha</SelectItem>
                <SelectItem value="system">Русский</SelectItem>
                </SelectContent>
            </Select>
            <Button variant={'outline'}>Log In</Button>
        </div>

    </header>
    </>
  )
}

export default Navbar
