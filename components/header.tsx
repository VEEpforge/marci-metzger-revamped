"use client";

import clsx from "clsx"
import { useEffect, useState } from "react";
import ContactSheet from "./contact-sheet";
import NavbarMenu from "./navbar-menu";
import { navlinks } from "@/assets/constants";
import Link from "next/link";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show hero navbar if scrolling up or near top
      setIsAtTop(currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <header className="w-screen">
      <div
        className={
          clsx('fixed top-0 left-0 w-full z-30 transition-transform duration-300 px-[clamp(16px,4vw,40px)] ',
            isAtTop ?
              'transform translate-y-0' : 'transform -translate-y-full',
          )}
      >
        <div className="grid grid-cols-12 gap-4 mt-[clamp(8px,2vw,20px)] text-background">
          <div className="col-span-9 lg:col-span-6 flex items-center">
            <h1 className="text-[clamp(24px,4vw,48px)] font-bold">MARCI METZGER</h1>
          </div>
          <div className="hidden lg:visible lg:col-span-3 lg:flex lg:items-center">
            {/* Navigation Links could go here */
              <nav className="flex flex-row gap-4 uppercase font-bold">
                {navlinks.slice(1).map((link, index) => (
                  <div key={link.href}>
                  <Link
                    // key={link.href}
                    href={link.href}
                    className="hover:text-secondary hover:underline hover:underline-offset-4 transition"
                  >
                    {link.label}
                  </Link>

                  {index < navlinks.length - 2 && (
                    <span>,</span>
                  )}
                </div>
                ))}
                
              </nav>
            }
          </div>
          <div className="col-span-3 flex items-center justify-end">
            {/* <Button>GET IN TOUCH</Button> */}
            <ContactSheet />
          </div>
        </div>
      </div>

      <div
        className={
          clsx('fixed top-0 left-0 w-full z-30 transition-transform duration-300 px-[clamp(16px,4vw,40px)]',
            !isAtTop ?
              'transform translate-y-0' : 'transform -translate-y-full',
          )}
      >
        <div className="flex items-center justify-end gap-2 mt-[clamp(8px,2vw,20px)] w-full">
          {/* <Button>GET IN TOUCH</Button> */}
          <ContactSheet />
          {/* <Button variant="secondary">MENU</Button> */}
          <NavbarMenu />
        </div>
      </div>
    </header>
  )
}


export default Header