import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { menu_feature, navlinks } from "@/assets/constants"
import Link from "next/link"
import Image from "next/image"

const NavbarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="lg">MENU</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full max-h-full">
        <SheetHeader>
          <SheetTitle className="text-[clamp(24px,4vw,48px)] font-bold">MERCI METZGER</SheetTitle>
        </SheetHeader>
        <div className="flex flex-row lg:grid lg:grid-cols-12 gap-4 h-full p-[clamp(16px,4vw,40px)]">
          <div className="col-span-6 flex flex-col gap-0 justify-center h-full">
            {navlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[clamp(24px,4vw,36px)] font-bold uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-col col-span-6 items-center justify-center">
            <Image src={menu_feature.image} alt={menu_feature.label} className="w-full h-auto" />
            <div className="flex flex-row justify-between w-full font-bold uppercase">
              <p>{menu_feature.label}</p>
              <Link href={menu_feature.link} className="hover:underline hover:underline-offset-4">VIEW PROPERTY</Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMenu