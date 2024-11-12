"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/call-for-papers', label: 'Call for Papers' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-blue-200 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-blue-900 flex">
            <Image src="/whiteICMI.png" alt="ICMI logo" width={40} height={40} />
            <span className="ml-2 mt-1">ICMI 2024</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
            
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-b border-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          
          </div>
        )}
      </div>
    </nav>
  );
}
