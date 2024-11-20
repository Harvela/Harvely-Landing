'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    {
      name: 'Accueil',
      link: '/home',
    },
    {
      name: 'Tarifs',
      link: '/tarif',
    },
    {
      name: 'Gallerie',
      link: '/gallery',
    },
    { name: 'Contact', link: '/Contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="z-10000 fixed mb-8 w-full border-b-[2px] border-white/20 bg-back-100 px-8 py-4 md:px-32 md:py-2.5">
      <div className="hidden flex-row items-center justify-between md:flex">
        <div className="flex flex-row items-center gap-2">
          <img
            src="/logo192.png"
            alt="logo1"
            className="h-8 w-auto rounded-[8px] text-white"
          />
          <p className="text-[18px] font-semibold text-white">DugAssistant</p>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={`rounded-[5px] p-2 px-4 text-[14px] font-medium text-white transition duration-300 ${
                router.pathname === navItem.link
                  ? 'bg-black bg-opacity-10'
                  : 'hover:bg-black hover:bg-opacity-10'
              }`}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <a
          href="https://app.dugassistant.com"
          target="_blank"
          className="relative rounded-md border-[2px] border-white px-6 py-2 text-[13px] font-medium text-white shadow-sm shadow-primary-400 hover:border-none hover:bg-black hover:text-primary-500"
        >
          <span>Se connecter</span>
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-row items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <button onClick={toggleMenu} className="text-3xl text-primary-400">
            {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-20 flex h-[100vh] flex-col gap-20">
            <div className="flex flex-col gap-8">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className={`text-[18px] font-medium text-primary-400 ${
                    router.pathname === navItem.link
                      ? 'bg-black bg-opacity-10'
                      : 'hover:bg-black hover:bg-opacity-10'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            <a
              href="https://app.dugassistant.com"
              target="_blank"
              className="relative w-[60%] rounded-md bg-primary-400 p-4 text-center text-[16px] font-medium text-white shadow-sm shadow-primary-400"
              onClick={() => setMenuOpen(false)}
            >
              Se connecter
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
