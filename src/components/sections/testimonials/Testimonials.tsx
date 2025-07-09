import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import Image from 'next/image';

export default function AppShowcase() {
    return (
        <section id="app-showcase" className="py-16 bg-secondary-black w-full">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Loreum ipsum</h2>
                        <h3 className="text-xl md:text-2xl font-bold text-text-orange">Loreum ipsum Loreum</h3>
                        {/* App Store Buttons */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <button className="flex items-center bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image
                                    src="/images/apple.png"
                                    alt="App Store"
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">Download on the</div>
                                    <div className="text-sm font-medium">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-md transition-colors">
                                <Image
                                    src="/images/playstore.png"
                                    alt="Google Play"
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                />
                                <div className="text-left">
                                    <div className="text-[10px] leading-none opacity-80">GET IT ON</div>
                                    <div className="text-sm font-medium">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        {/* Orange vertical line before the text */}
                        <div className="flex items-center    mb-3 justify-start">
                            <span className="inline-block w-1 h-12 bg-text-orange rounded-full mr-3"></span>
                            <div className="text-white/70 text-xs leading-relaxed max-w-xl">
                                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum Loreum ipusum Loreum Loreum ipusum Loreum                              </div>
                        </div>
                    </div>
                </div>

                {/* iPhone Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
                    {/* Left iPhone */}
                    <div className="bg-white p-2 rounded-2xl">
                        <h4 className="text-black font-semibold mb-4 text-center">Loreum ipsum Loreum</h4>
                            <p className="text-gray items-center font-light text-xs text-center mt-2 mb-4 max-w-[200px] mx-auto">Loreum ipusum Loreum Loreum ipusum Loreum</p>

                        <IPhoneMockup
                            size="small"
                             title="Dashboard"
                            gradientFrom="from-orange/20"
                            gradientTo="to-orange"
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Center iPhone - Larger */}
                    <div className="md:scale-110 md:-mt-8">
                        <div className="relative">
                            <IPhoneMockup
                                size="large"
                                icon="🚛"
                                title="Main App"
                                subtitle="Track & Manage"
                                gradientFrom="from-orange"
                                gradientTo="to-text-orange"
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h4 className="text-white font-semibold text-center mt-6">Loreum ipsum Loreum</h4>
                        <p className="text-white/70 text-xs text-center mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>

                    {/* Right iPhone */}
                    <div className="bg-white p-6 rounded-2xl">
                        <h4 className="text-black font-semibold mb-4 text-center">Loreum ipsum Loreum</h4>
                        <IPhoneMockup
                            size="small"
                            icon="⚙️"
                            title="Settings"
                            gradientFrom="from-text-orange"
                            gradientTo="to-red"
                            className="transform hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-gray text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}