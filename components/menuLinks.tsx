"use client"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuLinks = () => {
    const navLinks = [
        { name: "About", url: "/#", hasIcon: true },
        { name: "What We Do", url: "/#what-we-do", hasIcon: true },
        { name: "Jobs", url: "/#jobs", hasIcon: true },
        { name: "Projects", url: "/#projects" },
        { name: "TG Academy", url: "/#tg-academy" },
        { name: "Strategic Partnership", url: "/#strategic-partnership" },
        { name: "Pricing", url: "/#pricing" },
        { name: "Book a Consultation", url: "/#book-a-consultation" },
    ]

    // Active link mock (defaults to "/#what-we-do")
    const [activeUrl, setActiveUrl] = useState("/#what-we-do");

    const isActive = (url: string) => {
        return activeUrl === url;
    };

  return (
    <ul className='flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 md:gap-8 py-2 md:py-3 px-2 md:px-4 w-full'>
        {navLinks.map((item, index) => {
            const active = isActive(item.url);
            return (
                <li key={index} className="text-base font-medium leading-7 list-none w-full md:w-auto">
                    <Link
                        href={item.url}
                        onClick={() => setActiveUrl(item.url)}
                        className={`flex items-center justify-between md:justify-start gap-1 font-nunito pb-1 transition-colors w-full md:w-auto ${
                            active
                                ? 'border-b-2 border-primary text-primary font-semibold'
                                : 'text-gray-600 hover:text-primary'
                        }`}
                    >
                        {item.name}
                        {item.hasIcon && <ChevronDown size={18} />}
                    </Link>
                </li>
            );
        })}
    </ul>
  )
}

export default MenuLinks