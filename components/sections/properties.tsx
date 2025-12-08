import { listings } from '@/assets/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Properties = () => {
  return (
    <section id="properties" className="w-full bg-background p-[clamp(16px,4vw,40px)]">
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold'>[PROPERTIES]</h2>
        <div className='flex flex-row justify-between'>
          <h2 className='text-[clamp(20px,4vw,36px)] font-bold'>Find Your Dream Home...</h2>
          <h2 className='text-[clamp(20px,4vw,36px)] font-bold'>(04)</h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 font-bold">
          {listings.map((listing) => (
            <div key={listing.id} className={listing.classname}>
              <Image src={listing.image} alt={listing.location} className='w-full'/>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-2 uppercase'>
                  <p>({listing.id})</p>
                  <p>{listing.location}</p>
                </div>
                <div>
                  <Link href={listing.link} target="_blank" className='hover:underline hover:underline-offset-4 transition flex -flex-row'>
                    <p>VIEW PROPERTY</p>
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center'>
          <Link href="https://www.zillow.com/profile/marcimetzger/#forSaleListings" target="_blank">
            <Button size='lg'>EXPLORE MORE PROPERTIES</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Properties