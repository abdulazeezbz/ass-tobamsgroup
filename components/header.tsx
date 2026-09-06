"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Button from "./button";
import MenuLinks from "./menuLinks";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-primary-light bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <section className="flex flex-row items-center justify-between px-4 sm:px-8 lg:px-10 py-3 lg:py-0">
        <div>
          <Image
            width={165}
            height={64}
            src="/images/secondaryLogo.png"
            alt="Tobams Group Logo"
            priority
            className="w-[125px] sm:w-[145px] lg:w-[165px] h-auto"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex flex-row items-center gap-4">
          <Button
            text="Account"
            leftIcon={<User size={19} />}
            rightIcon={<ChevronDown size={16} />}
            leftIconClassName="w-7 h-7 bg-[#DDD0DA] rounded-full text-primary"
            rightIconClassName="text-white"
            className="bg-primary text-white h-[48px] px-3.5 hover:bg-primary/85 rounded-md"
          />
          <Button
            text="Take Assessment"
            className="bg-secondary text-white h-[48px] px-6 hover:bg-secondary/85 rounded-md"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 mt-[-1px] rounded-md text-white hover:bg-black/75 transition-colors bg-[#151515] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </section>

      {/* Desktop Menu Navigation */}
      <section className="hidden md:block border-t border-gray-100">
        <MenuLinks />
      </section>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-6 flex flex-col gap-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <MenuLinks />
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <Button
              text="Account"
              leftIcon={<User size={19} />}
              rightIcon={<ChevronDown size={16} />}
              leftIconClassName="w-7 h-7 bg-[#DDD0DA] rounded-full text-primary"
              rightIconClassName="text-white"
              className="bg-primary text-white h-[46px] w-full justify-between px-4 rounded-md"
            />
            <Button
              text="Take Assessment"
              className="bg-secondary text-white h-[46px] w-full justify-center rounded-md"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
