"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoImg from "../assets/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = (href: string) =>
    `font-bold transition-colors duration-200 ${
      pathname === href ? "text-[#C2F800]" : "text-gray-300 "
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black shadow-md">
      <div className="navbar container mx-auto min-h-[68px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 "
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={LogoImg}
              alt="FITLOG Logo"
              width={42}
              height={42}
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              priority
            />

            <span className="text-xl font-extrabold tracking-wide text-white sm:text-2xl">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-10">
            <Link href="/" className={navLinkClass("/")}>
              Workouts
            </Link>

            <Link href="/MyPlan" className={navLinkClass("/MyPlan")}>
              My Plan
            </Link>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="navbar-end hidden lg:flex">
          <div className="flex items-center gap-2">
            <Link
              href="/MyPlan"
              className="flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              Plan
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-sm font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/Saved"
              className="flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              Saved
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-sm font-bold text-black">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-black px-4 py-5 lg:hidden">
          <div className="container mx-auto space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-lg px-4 py-3 ${navLinkClass("/")}`}
            >
              Workouts
            </Link>

            <Link
              href="/MyPlan"
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-lg px-4 py-3 ${navLinkClass("/MyPlan")}`}
            >
              My Plan
            </Link>

            <div className="my-3 border-t border-gray-800" />

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/MyPlan"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-3 font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white"
              >
                Plan
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-sm font-bold text-black">
                  0
                </span>
              </Link>

              <Link
                href="/Saved"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-3 font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white"
              >
                Saved
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-sm font-bold text-black">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
