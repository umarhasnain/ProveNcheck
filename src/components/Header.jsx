"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all border-b-1 border-gray-500 p-3 duration-300 ${
          scrolled ? "bg-black text-white shadow" : "text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left Menu */}
          <div className="hidden md:flex gap-8  text-md">
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/imgs/logo.png" // <- Place your image in /public folder with this name
              alt="Vehicles Crafter Logo"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex gap-8 font-semibold text-md">
            <Link href="/packages">Packages</Link>
            <Link href="#contact">Contact Us</Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenu(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed top-0 left-0 w-72 h-full bg-white z-[9999] p-6 shadow-lg transition-transform">
          <div className="flex justify-between items-center mb-8">
            <Image src="/assets/imgs/logo-mobile.png" alt="Logo" width={130} height={30} />
            <button onClick={() => setMobileMenu(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 font-semibold">
            <Link href="/">HOME</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#services">SERVICES</Link>
            <Link href="/packages">PACKAGES</Link>
            <Link href="#contact">CONTACT US</Link>
          </nav>

          <div className="mt-10 flex">
            <Image
              src="/assets/imgs/email.svg"
              alt="Email"
              width={28}
              height={28}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
