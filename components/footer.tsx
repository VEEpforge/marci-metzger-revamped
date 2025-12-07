import React from 'react'
import { Separator } from './ui/separator'
import { affiliations_images, footer_photo } from '@/assets'
import Image from 'next/image'
import { navlinks } from '@/assets/constants'
import { FaYelp, FaFacebook, FaInstagram, FaLinkedin }from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-background p-[clamp(16px,4vw,40px)]">
      <Separator className="mb-4" />
      <div className='flex flex-col lg:grid lg:grid-cols-12 gap-4'>
        <div className='col-span-3 flex flex-col font-bold'>
          <h1 className='font-bold text-[clamp(20px,4vw,36px)]'>MARCI METZGER</h1>
          <h2>THE RIDGE REALTY GROUP</h2>
          <h2>[PAHRUMP REALTOR]</h2>
          <Image src={footer_photo} alt="Footer Featured" className='mt-4' />
        </div>
        <div className='col-span-3 col-start-5 flex flex-col gap-4'>
          <h2 className='font-bold'>[NAVIGATIONS]</h2>
          <div className='flex flex-col'>
            {navlinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className='hover:underline hover:underline-offset-4 transition font-bold text-[clamp(20px,4vw,36px)]'
                >
                {link.label}
              </a>
            ))}
          </div>
          <h2 className='font-bold'>[AFFILIATIONS]</h2>
          <div className='flex flex-row gap-2'>
            {affiliations_images.map((image, index) => (
              <Image 
                key={index  }
                src={image}
                alt={`Affiliation ${index + 1}`}
                className="w-16"
              />
            ))}
          </div>
        </div>
        <div className='col-span-5 flex flex-col font-bold gap-4'>
          <h2>[INFO]</h2>

          <div>
            <p>ADDR: <span className='font-semibold'>3190 HW-160, Suite F, Pahrump, NV 89048</span></p>
            <p>PHONE: <span className='font-semibold'>(206) 919-6886 / (425) 941-2560</span></p>
            <p>EMAIL: <span className='font-semibold'>marcimetzger@gmail.com</span></p>
            <p>HOURS: <span className='font-semibold'>Open Daily 8:00 AM - 7:00 PM</span></p>
            <p className='italic'>(Appointments outside office hours available upon request. Just call!)</p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2725151674726!2d-115.95782812422377!3d36.18425370217819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1765145713656!5m2!1sen!2sph" className='w-full h-1/2'></iframe>
          
          <h2>[SOCIALS]</h2>
          <div className='flex flex-row gap-4'>
            <FaFacebook size={48} className='hover:text-secondary transition cursor-pointer' />
            <FaInstagram size={48} className='hover:text-secondary transition cursor-pointer' />
            <FaLinkedin size={48} className='hover:text-secondary transition cursor-pointer' />
            <FaYelp size={48} className='hover:text-secondary transition cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer