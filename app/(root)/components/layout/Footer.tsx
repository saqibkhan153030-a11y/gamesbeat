"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      
      {/* Top section */}
      <div
        className="
         w-full

          flex
          flex-col-reverse
          md:flex-row
          justify-between
          px-27
          py-4
         
          lg:gap-10
        "
      >
        {/* Left: Links */}
        <div
          className="
            flex
            flex-col
            gap-1
            text-[12.5px]
            text-white
            items-center
            md:items-start
          "
        >
          <FooterLink href="/adventures">ADVENTURES</FooterLink>
          <FooterLink href="/arcade">ARCADE</FooterLink>
          <FooterLink href="/strategy">STRATEGY</FooterLink>
          <FooterLink href="/braintraining">BRAINTRAINING</FooterLink>
          <FooterLink href="/sports">SPORTS</FooterLink>
        </div>

        {/* Right: Logo */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src="/gamesbeatlogo.png"
            alt="Footer Logo"
            className="
              w-[160px]
              sm:w-[180px]
              lg:w-[200px]
              h-auto
              object-contain
            "
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          w-full
          bg-white
          text-black/60
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-start
          gap-2
          text-[15px]
          lg:text-[16.5px]
          text-center
          whitespace-normal
        "
      >
        <span className="md:ml-10">
          © Copyright 2025 - All Rights Reserved
        </span>

        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}

/* Footer Link */
function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="hover:text-blue-400 transition">
      {children}
    </Link>
  );
}
