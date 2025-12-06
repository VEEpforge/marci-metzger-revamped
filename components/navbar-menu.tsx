import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navlinks } from "@/assets/constants"
import Link from "next/link"

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
        <div className="flex flex-col gap-0 p-4 justify-center h-full">
          {
            navlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[clamp(24px,4vw,36px)] font-bold uppercase"
              >
                {link.label}
              </Link>
            ))
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMenu