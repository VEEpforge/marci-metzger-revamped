"use client";

import clsx from "clsx"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
    <header className="w-full">
      <div
        className={
          clsx('fixed top-0 left-0 w-full z-30 transition-transform duration-300 px-[clamp(16px,4vw,40px)] ',
            isAtTop ?
              'transform translate-y-0' : 'transform -translate-y-full',
          )}
      >
        <div className="grid grid-cols-12 gap-4 bg-amber-200 mt-[clamp(8px,2vw,20px)]">
          <div className="col-span-9 lg:col-span-6 flex items-center">
            <h1 className="text-[clamp(24px,4vw,36px)] font-bold">MARCI METZGER</h1>
          </div>
          <div className="hidden lg:visible lg:col-span-3 lg:flex lg:items-center">Navlinks</div>
          <div className="col-span-3 flex items-center justify-end">
            <Button>GET IN TOUCH</Button>
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
        <div className="flex items-center justify-end gap-2 mt-[clamp(8px,2vw,20px)]">
          <Button>GET IN TOUCH</Button>
          <Button variant="secondary">MENU</Button>
        </div>
      </div>
    </header>
  )
}


export default Header