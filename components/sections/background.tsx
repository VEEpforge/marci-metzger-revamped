import { intro_featured_photo } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'

const stats = [
  {
    stat: "#1",
    label: "Pahrump Residential Sales"
  },
  {
    stat: "90",
    label: "clients in 2021"
  },
  {
    stat: "$28.5M",
    label: "in sales in 2021"
  }
];

const Background = () => {
  return (
    <section id="background" className="w-full bg-background px-[clamp(16px,4vw,40px)] py-[clamp(16px,4vw,80px)]">
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col-reverse justify-center lg:grid lg:grid-cols-12'>
          <div className='col-span-4 col-start-5 flex flex-col gap-4 font-bold'>
            <Image src={intro_featured_photo} alt="Intro Featured" />
          </div>
          <div className='col-span-4 flex items-start justify-end'>
            <h2 className='font-bold'>[INTRO]</h2>
          </div>
        </div>
        <div className='flex flex-col justify-center lg:grid lg:grid-cols-12'>
          <div className='col-span-4 flex items-starat justify-start'>
            <h2 className='text-[clamp(20px,4vw,36px)] font-bold'>GET IT SOLD</h2>
          </div>
          <div className='col-span-4 col-start-5 flex flex-col gap-4 font-bold'>
            {/* <p className='uppercase text-right'>[Proven Results, Year After Year]</p> */}
            <p>Our commitment is simple: deliver record‑breaking results while raising the bar every single year. When you work with us, you’re backed by a team that never stops learning, improving, and winning for our clients.</p>
            {/* <p className='uppercase text-right'>[Don’t Just List It… Sell It Fast & High]</p> */}
            <p>We don’t settle for “just listed.” We market your property across every channel, ensuring maximum exposure. The result? More buyers, stronger offers, and top dollar for your home.</p>
            {/* <p className='uppercase text-right'>[Your Guide to Buying Smart]</p> */}
            <p>Buying a home should feel exciting, not overwhelming. With us, you get: 📊 expert market analysis, 🛠️ renovation recommendations, 📞 trusted contractors on call, and 🤝 a dedicated pro by your side. We simplify the process so you can focus on finding the perfect home.</p>
          </div>
          <div className='col-span-3 col-start-10 flex flex-col items-start justify-start'>
            <Separator className='mb-2' />
            {stats.map((stat, index) => (
              <div key={index} className='w-full font-bold uppercase'>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className='w-full'>
                    <h2 className='text-[clamp(20px,4vw,36px)] font-bold'>{stat.stat}</h2>
                  </div>
                  <div className='w-full'>
                    <p>{stat.label}</p>
                  </div>
                </div>
                {index < stats.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
            <Separator className='mt-2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background