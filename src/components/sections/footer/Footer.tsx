import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col space-y-12">
                    {/* Logo and Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <span className="text-xl font-bold text-white">Logo.</span>
                        </div>
                        <nav>
                            <ul className="flex flex-wrap justify-center space-x-6">
                                {['Home', 'Features', 'Why Us', 'How it works'].map((item) => (
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

                        {/* App Store Buttons */}
                        <div className="flex space-x-3 mt-6 md:mt-0">
                            <button className="flex items-center bg-black text-white px-2 py-1 rounded-md">
                                <span className="mr-1">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0625 10.5517C13.0392 8.15675 15.0142 7.04425 15.0942 6.99675C14.0258 5.45175 12.365 5.2655 11.7675 5.2515C10.2883 5.11217 8.85583 6.18217 8.10917 6.18217C7.3445 6.18217 6.18 5.2655 4.9195 5.2935C3.3325 5.3215 1.86333 6.18967 1.04833 7.566C-0.63917 10.3618 0.64417 14.4943 2.26667 16.8427C3.0705 17.9972 4.01667 19.3062 5.25667 19.2502C6.4595 19.1942 6.93 18.4545 8.3815 18.4545C9.81433 18.4545 10.2558 19.2502 11.515 19.2222C12.81 19.194 13.6343 18.0372 14.41 16.8707C15.3327 15.5292 15.7108 14.2107 15.7248 14.1407C15.6963 14.1267 13.0882 13.0492 13.0625 10.5517Z" fill="white" />
                                        <path d="M10.6608 3.52417C11.2933 2.73667 11.7153 1.65667 11.5847 0.56167C10.6563 0.59667 9.50134 1.1865 8.84134 1.9565C8.25384 2.632 7.74534 3.74 7.89084 4.80917C8.93334 4.88917 10.0003 4.298 10.6608 3.52417Z" fill="white" />
                                    </svg>
                                </span>
                                <div className="text-left">
                                    <div className="text-[8px] leading-none">Download on the</div>
                                    <div className="font-medium text-xs">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center bg-black text-white px-2 py-1 rounded-md">
                                <span className="mr-1">
                                    <svg width="16" height="18" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.928 10.82L4.747 19.002L16.044 10.82L4.747 2.63798L12.928 10.82Z" fill="white" stroke="white" strokeWidth="0.5" />
                                        <path d="M12.928 10.82H4.747H16.044H12.928Z" fill="white" stroke="white" strokeWidth="0.5" />
                                        <path d="M4.747 2.63798V19.002V2.63798Z" fill="white" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                </span>
                                <div className="text-left">
                                    <div className="text-[8px] leading-none">GET IT ON</div>
                                    <div className="font-medium text-xs">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-dark-grey pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-light-grey text-xs mb-4 md:mb-0">
                                &copy; {new Date().getFullYear()} All rights reserved.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-light-grey text-xs hover:text-white">Privacy Policy</a>
                                <a href="#" className="text-light-grey text-xs hover:text-white">Terms of Service</a>
                                <a href="#" className="text-light-grey text-xs hover:text-white">Cookies Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}