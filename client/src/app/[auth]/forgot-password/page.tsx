'use client';

import Navbar from '@/components/shared/navbar';
import { SignIn } from '@clerk/nextjs';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

function ForgotPassword() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-[190px]'>
        <h2 className='text-xl font-bold'>Forgot Password</h2>
        <p className='text-muted-foreground'>
          Remember your password?{' '}
          <Link href={'/auth/login'}>
            <span className='text-blue-500 cursor-pointer hover:underline'>
              Sign in
            </span>
          </Link>
        </p>

        <div className='my-3'>
          <Separator />
        </div>

        <SignIn
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

export default ForgotPassword;
