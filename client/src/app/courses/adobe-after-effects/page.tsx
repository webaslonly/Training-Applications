import Navbar from "@/components/shared/navbar";



function AdobeAfterEffectsPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='container mx-auto mt-8 grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-16 max-sm:text-center pt-24'>
        <div className=''>
          <h1 className='font-space-grotesk text-4xl font-bold'>Adobe After Effects</h1>
        </div>
      </div>

    </>
  )
}

export default AdobeAfterEffectsPage
