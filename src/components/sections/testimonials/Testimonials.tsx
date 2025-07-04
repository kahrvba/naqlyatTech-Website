import React from 'react';

export default function AppShowcase() {
    return (
        <section id="app-showcase" className="py-16 md:py-24 bg-gray w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lorem Ipsum</h2>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-orange">Lorem Ipsum Lorem</h3>
                    <p className="text-light-grey max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex justify-center mt-6 space-x-4">
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

                {/* iPhone Showcase */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 max-w-none">
                    {/* Left iPhone */}
                    <div className="w-full md:w-1/4 max-w-[220px]">
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <h4 className="text-black font-semibold mb-4 text-center">Lorem Ipsum Lorem</h4>
                            {/* iPhone Frame */}
                            <div className="bg-black rounded-[2.5rem] p-2 shadow-lg">
                                {/* iPhone Screen */}
                                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                                    {/* Status Bar */}
                                    <div className="bg-black h-6 flex items-center justify-between px-3">
                                        <div className="text-white text-xs">9:41</div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                    {/* Screen Content */}
                                    <div className="flex-1 bg-gradient-to-br from-light-orange to-orange p-3 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-xl mb-2">📊</div>
                                            <div className="text-xs font-medium">Dashboard</div>
                                        </div>
                                    </div>
                                    {/* Home Indicator */}
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-black rounded-full opacity-30"></div>
                                </div>
                            </div>
                            <p className="text-gray text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>

                    {/* Center iPhone - Larger */}
                    <div className="w-full md:w-1/3 max-w-[280px]">
                        <div className="relative">
                            {/* iPhone Frame */}
                            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                                {/* iPhone Screen */}
                                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                                    {/* Status Bar */}
                                    <div className="bg-black h-10 flex items-center justify-between px-6">
                                        <div className="text-white text-sm">9:41</div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-5 h-2 bg-white rounded-sm"></div>
                                            <div className="w-5 h-2 bg-white rounded-sm"></div>
                                            <div className="w-5 h-2 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                    {/* Screen Content */}
                                    <div className="flex-1 bg-gradient-to-br from-orange to-text-orange p-6 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-5xl mb-4">🚛</div>
                                            <div className="text-xl font-bold mb-2">Main App</div>
                                            <div className="text-sm opacity-90">Track & Manage</div>
                                        </div>
                                    </div>
                                    {/* Home Indicator */}
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-black rounded-full opacity-30"></div>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-center mt-4">Lorem Ipsum Lorem</h4>
                        <p className="text-light-grey text-xs text-center">Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    {/* Right iPhone */}
                    <div className="w-full md:w-1/4 max-w-[220px]">
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <h4 className="text-black font-semibold mb-4 text-center">Lorem Ipsum Lorem</h4>
                            {/* iPhone Frame */}
                            <div className="bg-black rounded-[2.5rem] p-2 shadow-lg">
                                {/* iPhone Screen */}
                                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                                    {/* Status Bar */}
                                    <div className="bg-black h-6 flex items-center justify-between px-3">
                                        <div className="text-white text-xs">9:41</div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                    {/* Screen Content */}
                                    <div className="flex-1 bg-gradient-to-br from-text-orange to-red p-3 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-xl mb-2">⚙️</div>
                                            <div className="text-xs font-medium">Settings</div>
                                        </div>
                                    </div>
                                    {/* Home Indicator */}
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-black rounded-full opacity-30"></div>
                                </div>
                            </div>
                            <p className="text-gray text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}