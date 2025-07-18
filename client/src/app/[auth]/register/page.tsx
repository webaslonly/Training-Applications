'use client';

import Navbar from '@/components/shared/navbar';
import { SignUp } from '@clerk/nextjs';
import { Separator } from '@/components/ui/separator';
import './register.css';
import Link from 'next/link';

function Register() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]'>
        <h2 className='text-xl font-bold'>Register</h2>
        <p className='text-muted-foreground'>
          Have an account?{' '}
          <Link href={'/auth/login'}>
            <span className='text-blue-500 cursor-pointer hover:underline'>
              Sign in
            </span>
          </Link>
        </p>

        <div className='my-3'>
          <Separator />
        </div>

        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'btn',
              card: 'bg-background border rounded-lg p-6',
              headerTitle: 'text-xl font-bold',
              headerSubtitle: 'text-muted-foreground',
            },
          }}
        />
      </div>
    </>
  );
}

export default Register;
