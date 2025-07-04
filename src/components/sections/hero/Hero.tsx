import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="bg-gray py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Text Content */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Lorem ipsum
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-orange mb-3">
                        Lorem ipsum Lorem
                    </h2>
                    <p className="text-light-grey md:max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                </div>

                {/* Phone Mockups */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="flex justify-center items-end">
                        {/* Left Phone */}
                        <div className="hidden md:block w-1/4 relative -mr-6 mb-8 z-10">
                            <div className="bg-black rounded-3xl overflow-hidden w-full aspect-[9/19] shadow-lg"></div>
                        </div>

                        {/* Center Phone (larger) */}
                        <div className="w-2/3 md:w-1/3 relative z-20">
                            <div className="bg-black rounded-3xl overflow-hidden w-full aspect-[9/19] shadow-xl"></div>
                        </div>

                        {/* Right Phone */}
                        <div className="hidden md:block w-1/4 relative -ml-6 mb-8 z-10">
                            <div className="bg-black rounded-3xl overflow-hidden w-full aspect-[9/19] shadow-lg"></div>
                        </div>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
                            <span className="mr-2">
                                <svg width="20" height="24" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0625 10.5517C13.0392 8.15675 15.0142 7.04425 15.0942 6.99675C14.0258 5.45175 12.365 5.2655 11.7675 5.2515C10.2883 5.11217 8.85583 6.18217 8.10917 6.18217C7.3445 6.18217 6.18 5.2655 4.9195 5.2935C3.3325 5.3215 1.86333 6.18967 1.04833 7.566C-0.63917 10.3618 0.64417 14.4943 2.26667 16.8427C3.0705 17.9972 4.01667 19.3062 5.25667 19.2502C6.4595 19.1942 6.93 18.4545 8.3815 18.4545C9.81433 18.4545 10.2558 19.2502 11.515 19.2222C12.81 19.194 13.6343 18.0372 14.41 16.8707C15.3327 15.5292 15.7108 14.2107 15.7248 14.1407C15.6963 14.1267 13.0882 13.0492 13.0625 10.5517Z" fill="white" />
                                    <path d="M10.6608 3.52417C11.2933 2.73667 11.7153 1.65667 11.5847 0.56167C10.6563 0.59667 9.50134 1.1865 8.84134 1.9565C8.25384 2.632 7.74534 3.74 7.89084 4.80917C8.93334 4.88917 10.0003 4.298 10.6608 3.52417Z" fill="white" />
                                </svg>
                            </span>
                            <div className="text-left">
                                <div className="text-xs leading-none">Download on the</div>
                                <div className="font-medium">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
                            <span className="mr-2">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.928 10.82L4.747 19.002L16.044 10.82L4.747 2.63798L12.928 10.82Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M12.928 10.82H4.747H16.044H12.928Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    <path d="M4.747 2.63798V19.002V2.63798Z" fill="white" stroke="white" strokeWidth="0.5" />
                                </svg>
                            </span>
                            <div className="text-left">
                                <div className="text-xs leading-none">GET IT ON</div>
                                <div className="font-medium">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}