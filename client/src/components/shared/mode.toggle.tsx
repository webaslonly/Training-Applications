'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        className='border bg-background shadow-xs hover:bg-accent text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
        disabled
      >
        <Moon className='h-[1.2rem] w-[1.2rem] transition-all' />
      </Button>
    );
  }

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <Button
          className='border bg-background shadow-xs hover:bg-accent text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
          onClick={() => setTheme('light')}
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
        </Button>
      ) : (
        <Button
          className='border bg-background shadow-xs hover:bg-accent text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'
          onClick={() => setTheme('dark')}
        >
          <Moon className='h-[1.2rem] w-[1.2rem] transition-all' />
        </Button>
      )}
    </div>
  );
}
