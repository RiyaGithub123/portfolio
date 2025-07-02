'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-violet-600 tracking-wide">Riya</div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative group transition-colors duration-300"
                >
                  <span className="group-hover:text-violet-600 transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-violet-600 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="#contact">
              <button className="bg-violet-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-violet-700 transition duration-300 shadow-sm">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-gray-800">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner px-6 pt-4 pb-6 overflow-hidden"
          >
            <ul className="space-y-5 text-gray-800 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className="block hover:text-violet-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact">
                  <button
                    className="w-full bg-violet-600 text-white py-2 rounded-md font-semibold hover:bg-violet-700 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
