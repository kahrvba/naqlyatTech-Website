'use client';

import React, { useEffect, useState } from 'react';

export default function Header() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Only show the header when at the very top of the page
            setVisible(window.scrollY <= 0);
        };

        // Use throttled event listener to improve performance
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

    return (
        <header
            className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className={`py-4 px-4 bg-gray`}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-white">Logo.</span>
                        </div>

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

                        <div>
                            <button className="bg-orange text-white px-6 py-2 rounded-3xl text-sm font-medium hover:bg-opacity-90 transition-all">
                                Download Now
                            </button>
                        </div>

                        <button className="md:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}