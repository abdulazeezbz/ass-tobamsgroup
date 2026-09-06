import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MailBadge, Phone } from 'lucide-react';
import Button from './button';

const Footer = () => {
  const whatWeDoLinks = [
    { label: "Sustainability Services", href: "/#sustainability" },
    { label: "Strategy Planning and Implementation", href: "/#strategy" },
    { label: "Tech Talent Solutions", href: "/#talent" },
    { label: "Training and Development", href: "/#training" },
    { label: "IT Consulting Services", href: "/#consulting" },
    { label: "Social Impact", href: "/#social-impact" },
    { label: "Talent Recruitment", href: "/#recruitment" },
  ];

  const companyLinks = [
    { label: "About", href: "/#about" },
    { label: "Jobs", href: "/#jobs" },
    { label: "Projects", href: "/#projects" },
    { label: "Our Founder", href: "/#founder" },
    { label: "Business Model", href: "/#business-model" },
    { label: "The Team", href: "/#team" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Blog", href: "/#blog" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  const solutionLinks = [
    { label: "Tobams Group Academy", href: "/#academy" },
    { label: "Help a Tech Talent", href: "/#help-talent" },
    { label: "Campus Ambassadors Program", href: "/#ambassadors" },
    { label: "Join Our Platform", href: "/#join" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Book a Consultation", href: "/#consultation" },
    { label: "Join Our Slack Community", href: "/#slack" },
  ];

  return (
    <footer className="w-full bg-[#11040E] text-white">
      {/* Top CTA Ribbon */}
      <div className="border-b bg-[#1D0617] border-white/10">
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <span className="text-white/80 text-xs sm:text-sm font-medium">
              Ready to be a part of something extraordinary?
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-nunito text-white">
              Let's work together to create a difference
            </h3>
          </div>

          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Button
              text="Get In Touch"
              className="bg-primary hover:bg-primary/85 text-white border border-white/20 h-[46px] px-8 rounded-md font-semibold text-sm shadow-sm w-full sm:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info & Socials (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <Image
                width={165}
                height={64}
                src="/images/secondaryLogo.png"
                alt="Tobams Group Logo"
                className="w-[145px] sm:w-[165px] h-auto brightness-5 invert"
              />
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Tobams Group is an innovative consultancy firm reshaping the future
              of tech talent development in Africa, specialising in talent
              acquisition, internships, and skill development with a global
              perspective.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/abdulazeezabz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white hover:opacity-85 transition-opacity flex items-center justify-center p-2"
              >
                <Image
                  src="/images/ri_linkedin-fill.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/abdulazeezabz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white hover:opacity-85 transition-opacity flex items-center justify-center p-2"
              >
                <Image
                  src="/images/ri_instagram-fill.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://x.com/abdoulazeez_abz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white hover:opacity-85 transition-opacity flex items-center justify-center p-2"
              >
                <Image
                  src="/images/line-md_twitter-x.png"
                  alt="Twitter / X"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-nunito text-base">
              What We Do
            </h4>
            <ul className="flex flex-col gap-2.5">
              {whatWeDoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-nunito text-base">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold font-nunito text-base">
              Solution
            </h4>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registered Offices & Contact Information Box */}
        <div className="bg-white/6 rounded-2xl p-6 sm:p-8 mt-12 border border-white/5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            {/* Contact Information (Order 1 on mobile, Order 2 on lg) */}
            <div className="order-1 lg:order-2 flex flex-col gap-3">
              <h5 className="font-bold text-white text-sm font-nunito">
                Contact Information
              </h5>
              <div className="flex flex-col gap-3 text-xs text-white/75">
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={20} className="text-secondary shrink-0" />
                  <span>theteam@tobamsgroup.com</span>
                </a>
                <a
                  href="tel:+447886600749"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={20} className="text-secondary fill-secondary shrink-0" />
                  <span>+447886600749</span>
                </a>
              </div>
            </div>

            {/* Registered Offices (Order 2 on mobile, Order 1 on lg) */}
            <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-3 pt-6 lg:pt-0 border-t border-white/10 lg:border-t-0">
              <h5 className="font-bold text-white text-sm font-nunito">
                Registered Offices
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-white/75 leading-relaxed">
                <div>
                  <p className="text-secondary font-semibold mb-1">
                    United Kingdom
                  </p>
                  <p>07451195 (Registered by Company House)</p>
                  <p className="text-white/60 mt-1">
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA.
                  </p>
                </div>

                <div>
                  <p className="text-secondary font-semibold mb-1">Nigeria</p>
                  <p>RC 1040722 (Registered by the Corporate Affairs Commission)</p>
                  <p className="text-white/60 mt-1">
                    4, Musa Close, Anyigba/Kogi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center lg:text-left">
            Copyright © Tobams Group, {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Desktop Legal Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/#terms"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#cookies"
              className="hover:text-white transition-colors"
            >
              Cookies Policy
            </Link>
          </div>

          {/* Mobile Legal Links Layout */}
          <div className="flex lg:hidden flex-col items-center gap-2 text-center">
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/#privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/#cookies"
                className="hover:text-white transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
            <Link
              href="/#terms"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
