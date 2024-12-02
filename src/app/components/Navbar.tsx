import React from 'react'
import Link from 'next/link'
// import { Sheet } from 'lucide-react';
// import { SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="bg-slate-400 flex flex-col md:flex-row justify-between h-auto md:h-28 items-center text-xl md:text-3xl px-5 md:px-10 py-4 md:py-0">
      <div className="text-3xl md:text-5xl font-serif mb-4 md:mb-0">Portfolio</div>

      <div>
        <ul className="hidden md:last:flex gap-5 list-none underline items-center">
          <Link className="hover:text-gray-300" href="/">Home</Link>
          <Link className="hover:text-gray-300" href="/About">About</Link>
          <Link className="hover:text-gray-300" href="/Skills">Skill</Link>
          <Link className="hover:text-gray-300" href="/Contact">Contact</Link>
        </ul>
        {/* <Sheet>
          <SheetTrigger className=''>
            <Menu/>
          </SheetTrigger>
          <SheetContent>
            <ul className='flex flex-col gap-2 list-none'>
            <Link className="hover:text-gray-300" href="/">Home</Link>
          <Link className="hover:text-gray-300" href="/About">About</Link>
          <Link className="hover:text-gray-300" href="/Skills">Skill</Link>
          <Link className="hover:text-gray-300" href="/Contact">Contact</Link>
            </ul>
          </SheetContent>
        </Sheet> */}
      </div>
    </div>
  );
}
