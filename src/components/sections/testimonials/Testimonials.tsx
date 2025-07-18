import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import Image from 'next/image';

export default function AppShowcase() {
    return (
        <section id="app-showcase" className="w-full relative">
            {/* Top: Dark background with text/buttons */}
            <div className="bg-secondary-black w-full min-h-[75vh] pt-12 pb-10">
                <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-start justify-between">
                    {/* Left: Heading and buttons */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Loreum ipsum<br />Loreum ipsum Loreum</h2>
                        <div className="flex flex-row gap-4 mb-6">
                            <button className="flex items-center bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image src="/images/apple.png" alt="App Store" width={24} height={24} className="mr-3" />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">Available on the</div>
                                    <div className="text-sm font-medium">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image src="/images/playstore.png" alt="Google Play" width={24} height={24} className="mr-3" />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">Available on the</div>
                                    <div className="text-sm font-medium">Play Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Right: Orange line and paragraph */}
                    <div className="flex-1 flex flex-col items-start justify-center mt-8 md:mt-0">
                        <div className="flex items-center">
                            <span className="inline-block w-2 h-10 bg-text-orange rounded-full mr-3"></span>
                            <div className="text-white/70 text-md leading-relaxed">
                                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum Loreum ipusum Loreum Loreum ipusum Loreum
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider between sections */}
            <div className="w-full h-8 bg-transparent"></div>
            {/* Center phone overlay */}
            <div className="absolute left-1/2 top-[40%] z-20 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-row justify-center items-center gap-8">
                {/* Overlay Phones with minimized height for card and iPhone */}
                <div className="bg-white rounded-2xl shadow-lg flex flex-col pt-20 items-center h-[500px] overflow-hidden">
                    <h4 className="text-black font-semibold mt-2 text-center text-sm">Loreum ipsum Loreum</h4>
                    <p className="text-gray font-light text-xs text-center mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
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
                <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center h-[700px] min-h-0">
                    <IPhoneMockup
                        size="small"
                        icon="🚛"
                        title="Main App"
                        subtitle="Track & Manage"
                        gradientFrom="from-orange"
                        gradientTo="to-text-orange"
                        className="transform hover:scale-105 transition-transform duration-300 h-[600px] min-h-0"
                    />
                    <h4 className="text-black font-semibold mt-2 text-center text-sm">Loreum ipsum Loreum</h4>
                    <p className="text-gray font-light text-xs text-center mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg flex flex-col pt-20 items-center h-[500px] overflow-hidden">
                    <h4 className="text-black font-semibold mt-2 text-center text-sm">Loreum ipsum Loreum</h4>
                    <p className="text-gray font-light text-xs text-center mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
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
            {/* </div> */}
            {/* Bottom: White background with phone cards */}
            <div className="bg-white  min-h-screen w-full relative z-10">
                {/* <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-start gap-8">
                     <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center">
                        <h4 className="text-black font-semibold mb-2 text-center">Loreum ipsum Loreum</h4>
                        <p className="text-gray font-light text-xs text-center mb-4 max-w-[200px]">Loreum ipusum Loreum Loreum ipusum Loreum</p>
                        <IPhoneMockup
                            size="small"
                            title="Dashboard"
                            gradientFrom="from-orange/20"
                            gradientTo="to-orange"
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                     <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center">
                        <h4 className="text-black font-semibold mb-2 text-center">Loreum ipsum Loreum</h4>
                        <IPhoneMockup
                            size="small"
                            icon="⚙️"
                            title="Settings"
                            gradientFrom="from-text-orange"
                            gradientTo="to-red"
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-gray font-light text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}