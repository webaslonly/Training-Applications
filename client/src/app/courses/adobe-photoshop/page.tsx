'use client';

import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

function AdobePhotoshopPage() {
  const { t } = useLanguage();

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='container mx-auto mt-8 grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-16 max-sm:text-center pt-24'>
        <div className=''>
          <h1 className='font-space-grotesk text-4xl font-bold'>{t('adobePhotoshop.title')}</h1>
          <p className='text-gray-500'>{t('adobePhotoshop.description')}</p>
        </div>

        <div className='flex justify-center mt-8'>
        <a href="https://youtu.be/4TtOuiRSC0Y?si=IRwmFfRAPqsJyhIc" target="_blank">
          <Button variant="outline">
            {t('common.watch')} {t('common.video')} {'(RU)'}
          </Button>
        </a>
        <a href="https://youtu.be/uRdfvpQ5rcQ?si=AqRVToG15AIAA0rn" target="_blank">
          <Button variant="outline">
            {t('common.watch')} {t('common.video')} {'(EN)'}
          </Button>
        </a>
      </div>

      <br />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t('adobePhotoshop.whatYouWillLearn')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Photo editing and retouching</li>
          <li>Digital art and illustration</li>
          <li>Layer management and blending</li>
          <li>Color correction and manipulation</li>
        </ul>
      </div>
        
      </div>
    </>
  )
}

export default AdobePhotoshopPage
