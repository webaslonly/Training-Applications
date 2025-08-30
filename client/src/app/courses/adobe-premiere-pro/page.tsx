'use client';

import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

function AdobePremiereProPage() {
  const { t } = useLanguage();

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='container mx-auto mt-8 grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-16 max-sm:text-center pt-24'>
        <div className=''>
          <h1 className='font-space-grotesk text-4xl font-bold'>{t('adobePremierePro.title')}</h1>
          <p className='text-gray-500'>{t('adobePremierePro.description')}</p>
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
        <h2 className="text-2xl font-bold mb-4">{t('adobePremierePro.whatYouWillLearn')}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Video editing and cutting</li>
          <li>Audio synchronization and mixing</li>
          <li>Transitions and effects</li>
          <li>Export and rendering</li>
        </ul>
      </div>
        
      </div>
    </>
  )
}

export default AdobePremiereProPage
