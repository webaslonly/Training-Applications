import Navbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

function About() {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>

      <div className='container mx-auto flex h-full max-w-8xl items-center justify-between'>

        <div className='pt-36'>
          <div className='text-center'>
            <h1 className='text-6xl font-semibold'>WELCOME TO THIS PROJET</h1>
            <p className='text-muted-foreground max-sm:text-sm font-semibold text-xl pt-1.5' >I welcome you. Thank you for visiting our project.</p>
          </div>
          <div className='text-center text-5xl pt-7'>
            <p>
              With this savvy you can learn the basic things and <br />tools of <span className='text-blue-900'>After Effects,</span> <span className='text-blue-400'>Photoshop</span> and <span className='text-blue-600'>Premiere Pro</span> With this way <br />you can edit your basic videos
            </p>
            <p className='text-muted-foreground max-sm:text-sm font-semibold pt-7'>Click on the <span className='text-purple-800 underline'>"Training"</span> button to open the training</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default About
