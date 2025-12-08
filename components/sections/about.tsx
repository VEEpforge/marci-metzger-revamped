import { marci_photo } from "@/assets"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"

const recognition = [
  "Realtor for nearly 3 decades!",
  "Owner of the Ridge Realty Group",
  "Top Pahrump Residential Sales",
  "LV Top 100 Residential Sales 2019",
  "Veteran-Friendly Agent - Veterans United(R)"
]

const About = () => {
  return (
    <section id="about" className="w-full bg-background p-[clamp(16px,4vw,40px)]">      
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4">
        <div className="hidden lg:visible lg:col-span-1 lg:flex items-start">
          <h2 className="font-bold">[ABOUT]</h2>
        </div>
        <div className="col-span-4">
          <Image src={marci_photo} alt="Marci Metzger"  />
        </div>
        <div className="col-span-6 col-start-7 flex flex-col justify-between gap-8">
          <h2 className="font-bold">[MEET MARCI METZGER]</h2>
          <p className='text-[clamp(20px,4vw,36px)] font-bold leading-tight tracking-tight'>
            Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.
          </p>
          <div className="flex flex-col gap-4 font-bold ">
            <p>[RECOGNITION]</p>
            <div className="flex flex-row justify-between">
              <div className="font-bold uppercase">
                <Separator className="mb-2" />
                {recognition.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-row gap-2">
                      <ChevronRight/><p>{item}</p>
                    </div>
                    {index < recognition.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
                <Separator className="mt-2"/>
              </div>
              <div className="flex items-end justify-end">
                <Button size='lg'>LEARN MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About