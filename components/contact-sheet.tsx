import { contact_photo } from "@/assets";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

const ContactSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg">GET IN TOUCH</Button>
      </SheetTrigger>
      <SheetContent className="lg:w-1/2 w-full sm:max-w-none">
        <SheetHeader>
          <SheetTitle>[CONTACT US]</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <div className="flex flex-row justify-between w-full">
            <div className="w-1/2 lg:w-1/4 font-semibold text-sm text-secondary-foreground">
              <p>Let us know how we can assist you. To get started, please fill out the form below.</p>
            </div>
            <div className="w-1/4">
              <Image
                src={contact_photo}
                alt="Contact Featured Photo"
              />
              <p className="font-bold uppercase text-sm text-right">2851 Winchester Ave.</p>
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-6">
            <div>
              <h2 className="font-bold">SEND US MESSAGE</h2>
              <Separator />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-name">Name</Label>
              <Input id="sheet-name" defaultValue="Your Name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-email">Email</Label>
              <Input id="sheet-email" defaultValue="Your Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-message">Message</Label>
              <Textarea id="sheet-message" placeholder="Type your message here." />
            </div>
            <div className="flex justify-end">
              <Button type="submit">SEND MESSAGE</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ContactSheet