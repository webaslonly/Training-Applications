'use client';

import Navbar from '@/components/shared/navbar';
import Home from '@/pages/home/page';
import React from 'react';
import { useLanguage } from '@/contexts/language-context';

function Page() {
  const { t, currentLanguage } = useLanguage();

  return (
    <div>
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            {t('home.title')} - {currentLanguage.toUpperCase()}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('common.loading')} - Current language: {currentLanguage}
          </p>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default Page;

