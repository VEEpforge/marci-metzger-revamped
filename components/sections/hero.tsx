import React from 'react'
import Link from 'next/link'

const hero_content = {
  subheadline1: "THE RIDGE REALTY GROUP",
  subheadline2: "PAHRUMP REALTOR",
  description: "Whether buying or selling, you'll have a dedicated expert guiding every step — so you can move forward with confidence.",
}

const property_highlight = {
  label: 'PROPERTY HIGHLIGHT',
  name: '4935 E CACTUS CANYON',
  year: 'BUILT IN 2018',
  view: 'VIEW PROPERTY',
}

const Hero = () => {
  return (
    <section className="max-w-screen w-full min-h-screen h-screen text-background">
      <div className='px-[clamp(16px,4vw,40px)] flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-4 mt-[clamp(8px,2vw,20px)] font-semibold'>
          <div className='h-[clamp(24px,4vw,48px)]'></div>
          <div >
            <h2>{hero_content.subheadline1}</h2>
            <h2>[{hero_content.subheadline2}]</h2>
          </div>
        </div>
        <div>
          
        </div>
        <div className="grid grid-cols-12 gap-4 text-background mb-[clamp(8px,2vw,20px)]">
          <div className="col-span-6">
            <p className='text-[clamp(20px,4vw,36px)] leading-tight font-semibold tracking-tight'>{hero_content.description}</p>
          </div>
          <div className='col-span-6 flex items-end justify-end flex-col text-right'>
            <p className='font-bold'>[{property_highlight.label}]</p>
            <p className='font-semibold'>{property_highlight.name}</p>
            <p className='font-semibold'>{property_highlight.year}</p>
            <Link href="#" className="font-semibold hover:underline hover:underline-offset-4">{property_highlight.view}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero