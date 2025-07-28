
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY <= 0);
        };
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', scrollListener, { passive: true });
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    // Close menu on route change or scroll
    useEffect(() => {
        if (!menuOpen) return;
        const closeMenu = () => setMenuOpen(false);
        window.addEventListener('resize', closeMenu);
        window.addEventListener('scroll', closeMenu);
        return () => {
            window.removeEventListener('resize', closeMenu);
            window.removeEventListener('scroll', closeMenu);
        };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className={`py-4 px-2 bg-gray md:py-6`}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Image src="/images/logo.svg" alt="Logo" width={60} height={60} className="w-12 h-12 md:w-[70px] md:h-[70px]" />
                        </div>

                        {/* Desktop nav */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                {['Home', 'Features', 'Why Us', 'How It works'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-white hover:text-orange transition-colors font-medium text-sm"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Desktop button */}
                        <div className="hidden md:block">
                            <button className="bg-orange text-white px-6 py-2 rounded-3xl text-sm font-medium hover:bg-opacity-90 transition-all">
                                Download Now
                            </button>
                        </div>

                        {/* Hamburger icon for mobile */}
                        <button
                            className="md:hidden text-white focus:outline-none z-50"
                            aria-label="Open menu"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setMenuOpen(false)}
                ></div>
                {/* Mobile menu */}
                <nav
                    className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-gray z-50 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
                    aria-label="Mobile menu"
                >
                    <div className="flex flex-col h-full p-6">
                        <div className="flex items-center justify-between mb-8">
                            <Image src="/images/logo.svg" alt="Logo" width={50} height={50} className="w-10 h-10" />
                            <button
                                className="text-white focus:outline-none"
                                aria-label="Close menu"
                                onClick={() => setMenuOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-6">
                            {['Home', 'Features', 'Why Us', 'How It works'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-white hover:text-orange transition-colors font-medium text-lg"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-orange text-white px-6 py-3 rounded-3xl text-base font-medium hover:bg-opacity-90 transition-all">
                                Download Now
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}