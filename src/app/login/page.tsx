"use client"

import Navbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Login() {
  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div className='flex flex-col pt-[180px]'>
        <h2 className='text-xl font-bold'>Login</h2>
        <p className='text-muted-foreground'>
				  Don't have an account?{' '}
				  <span className='text-blue-500 cursor-pointer hover:underline'>
					    Sign up
				  </span>
        </p>

        <div className='my-3'>
				  <Separator />
			  </div>
        
        <Form>
          <FormField
            name="..."
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
          
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>

      </div>
    </>
  )
}

export default Login
