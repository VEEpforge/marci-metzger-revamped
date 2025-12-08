import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'
import { services_photo, services_photo_2 } from '@/assets'

const services = [
  {
    value: "item-1",
    title: "(01) Real Estate, Done Right",
    description: "Buying, selling, or investing — we make the process seamless. From first‑time buyers to seasoned investors, our team delivers a stress‑free experience backed by proven results. With us, you’ll feel confident every step of the way."
  },
  {
    value: "item-2",
    title: "(02) Residential & Commercial Expertise",
    description: "From cozy condos to luxury estates, fixer‑uppers to prime commercial spaces — we handle it all. Our deep community roots mean we know where value lives, helping you invest wisely and secure the property that fits your vision and budget."
  },
  {
    value: "item-3",
    title: "(03) Trusted Guidance & Expertise",
    description: "Questions about financing, affordability, or loan options? We connect you with trusted professionals and provide clear, timely answers. Our priority is ensuring you feel informed, empowered, and ready to make the best decisions for your future."
  }
]

const Services = () => {
  return (
    // <section id="services" className="w-full bg-background p-[clamp(16px,4vw,40px)]">
    //   <div className='grid grid-cols-12 gap-4'>
    //     <div className='col-span-8 flex flex-col font-bold'>
    //       {services.map((service, index) => (
    //         <div key={index} className='mb-8'>
    //           <div className='flex flex-row'>
    //             <div className='w-1/2'>
    //               <h2 className='text-[clamp(20px,4vw,36px)] font-bold leading-tight tracking-tight'>{service.title}</h2>
    //             </div>
    //             <div className='w-1/2'>
    //               <p>
    //                 {service.description}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="services" className="w-full bg-background px-[clamp(16px,4vw,40px)] pt-[clamp(40px,10vw,80px)]">
      <div className='grid grid-cols-12 gap-4'>
        <div className='hidden lg:col-span-4 lg:flex flex-col'>
          <h2 className='font-bold'>[SERVICES]</h2>
          {/* <div>
            <Image src={services_photo_2} alt="Services" />
            <h2 className='font-bold text-right'>123 OVATION @ MOUNTAIN FALLS</h2>
          </div> */}
        </div>
        <div className='col-span-7 col-start-6 flex flex-col font-bold'>
          <div>
            <Image src={services_photo} alt="Services" className='' />
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            // defaultValue="item-1"
          >
            {services.map((service, index) => (
              <AccordionItem key={index} value={service.value}>
                <AccordionTrigger className='text-[clamp(20px,4vw,36px)] font-bold leading-tight tracking-tight'>{service.title}</AccordionTrigger>
                <AccordionContent>
                  <p className='text-base font-semibold'>
                    {service.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Services