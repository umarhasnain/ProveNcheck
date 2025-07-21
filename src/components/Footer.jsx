"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/assets/imgs/car-logo.png"
              alt="Vehicles Crafter Logo"
              width={80}
              height={70}
            />
            <span className="text-2xl font-light text-white">
              ProveNcheck 
            </span>
          </div>
          <p className="text-sm mb-6">
            ProveNcheck  is an Approved AutoCheck Data Provider.
            <br />
            All logos, trademarks and registered trademarks presented are the
            property of their respective owners.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/imgs/new-site.png"
              alt="AutoCheck Logo"
              width={100}
              height={30}
            />
            <Image
              src="/assets/imgs/1c.webp"
              alt="NMVTIS Logo"
              width={80}
              height={30}
            />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/packages" className="hover:text-white transition">
                Packages
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3 mb-6">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condition" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-white transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="text-blue-500 text-xl" />
            <div>
              <p className="text-sm">To Send Mail</p>
              <a
                href="mailto:info@ ProveNcheck.com"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                info@proveNcheck.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        All Rights Reserved by{" "}
        <Link
          href="/home"
          className="text-blue-500 hover:underline transition"
        >
           ProveNcheck
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
