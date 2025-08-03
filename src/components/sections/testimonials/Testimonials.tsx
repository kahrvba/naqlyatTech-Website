import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import Image from 'next/image';

export default function AppShowcase() {
    return (
        <section id="app-showcase" className="hidden md:block w-full relative">
            {/* Top: Dark background with text/buttons */}
            <div className="bg-secondary-black w-full min-h-[75vh] pt-8 md:pt-12 pb-10">
                <div className="container mx-auto px-4 md:px-5 py-6 md:py-10 flex flex-col md:flex-row items-start justify-between">
                    {/* Left: Heading and buttons */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 text-center md:text-left">
                            Loreum ipsum<br />Loreum ipsum Loreum
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <button className="flex items-center justify-center md:justify-start bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image src="/images/apple.png" alt="App Store" width={24} height={24} className="mr-3" />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">Available on the</div>
                                    <div className="text-sm font-medium">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center justify-center md:justify-start bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image src="/images/playstore.png" alt="Google Play" width={24} height={24} className="mr-3" />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">Available on the</div>
                                    <div className="text-sm font-medium">Play Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Right: Orange line and paragraph */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center">
                        <div className="flex items-center">
                            <span className="hidden md:inline-block w-2 h-10 bg-text-orange rounded-full mr-3"></span>
                            <div className="text-white/70 text-sm md:text-md leading-relaxed text-center md:text-left">
                                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum Loreum ipusum Loreum Loreum ipusum Loreum
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider between sections */}
            <div className="w-full h-8 bg-transparent"></div>
            {/* Center phone overlay */}
            <div className="absolute left-1/2 top-[60%] z-20 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                {/* Overlay Phones with minimized height for card and iPhone */}
                <div className="hidden lg:flex flex-row justify-center items-center gap-8">
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col pt-20 items-center h-[600px] w-[400px] overflow-hidden">
                        <h2 className="text-black font-bold mt-2 text-center text-xl">Loreum ipsum Loreum</h2>
                        <p className="text-gray font-light text-xs text-center pr-10 pl-10 mt-1">Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum</p>
                        <IPhoneMockup
                            size="small"
                            icon="🚛"
                            title="Main App"
                            subtitle="Track & Manage"
                            gradientFrom="from-orange"
                            gradientTo="to-text-orange"
                            className="transform hover:scale-105 transition-transform duration-300 h-[600px] min-h-0"
                        />
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center h-[600px] w-[400px] overflow-hidden relative pt-0 pb-6">
                        <div className="absolute -top-60 left-1/2 transform -translate-x-1/2">
                            <IPhoneMockup
                                size="small"
                                icon="🚛"
                                title="Main App"
                                subtitle="Track & Manage"
                                gradientFrom="from-orange"
                                gradientTo="to-text-orange"
                                className="transform hover:scale-105 transition-transform duration-300 h-[600px] min-h-0"
                            />
                        </div>
                        <div className="mt-auto w-full flex flex-col items-center">
                            <h2 className="text-black font-bold mt-2 text-center text-xl">Loreum ipsum Loreum</h2>
                            <p className="text-gray font-light text-xs text-center pr-10 pl-10 mt-1">Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col pt-20 items-center h-[600px] w-[400px] overflow-hidden">
                        <h2 className="text-black font-bold mt-2 text-center text-xl">Loreum ipsum Loreum</h2>
                        <p className="text-gray font-light text-xs text-center pr-10 pl-10 mt-1">Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum</p>
                        <IPhoneMockup
                            size="small"
                            icon="🚛"
                            title="Main App"
                            subtitle="Track & Manage"
                            gradientFrom="from-orange"
                            gradientTo="to-text-orange"
                            className="transform hover:scale-105 transition-transform duration-300 h-[600px] min-h-0"
                        />
                    </div>
                </div>

                {/* Mobile View - Single Card */}
                <div className="lg:hidden flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center py-8 px-4 max-w-[320px]">
                        <h2 className="text-black font-bold mt-2 text-center text-lg">Loreum ipsum Loreum</h2>
                        <p className="text-gray font-light text-xs text-center mt-1 mb-6">Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum</p>
                        <IPhoneMockup
                            size="small"
                            icon="🚛"
                            title="Main App"
                            subtitle="Track & Manage"
                            gradientFrom="from-orange"
                            gradientTo="to-text-orange"
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
            {/* Bottom: White background with phone cards */}
            <div className="bg-white h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative z-10"></div>
        </section>
    );
}