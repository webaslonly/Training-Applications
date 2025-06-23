"use client"

import * as React from "react"
import { useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"



export function ModeToggle() {
  const { setTheme } = useTheme()
  const [openModeTogle, setOpenModeTogle] = useState(false)

  return (
    <div>
      {openModeTogle ? (
        <Button 
         className="h-[32px] w-[32px]"
         onClick={() => {
          setOpenModeTogle(false);
          setTheme('light')
         }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
        </Button>
      ) : (
        <Button
        className="h-[32px] w-[32px]"
        onClick={() => {
         setOpenModeTogle(true);
         setTheme('system')
        }}
         >
          <Moon className=" h-[1.2rem] w-[1.2rem]  transition-all " />
        </Button>
      )}
    </div>
  )
}