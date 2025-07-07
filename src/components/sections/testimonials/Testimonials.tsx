import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import Image from 'next/image';

export default function AppShowcase() {
    return (
        <section id="app-showcase" className="py-16 md:py-24 bg-gray w-full">
            <div className="w-full px-4 sm:px-3 lg:px-3">
                {/* Section Title */}
                <div className="text-center justify-start mb-16 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Lorem Ipsum</h2>
                        {/* App Store Buttons */}
                        <div className="flex justify-center mt-6 space-x-4">
                            <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
                                <span className="mr-2">
                                  <Image
                                      src="/images/apple.png"
                                      alt="App Store"
                                      width={20}
                                      height={20}
                                  />
                                </span>
                                <div className="text-left">
                                    <div className="text-xs leading-none">Download on the</div>
                                    <div className="font-medium">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center bg-black text-white px-4 py-2 rounded-md">
                                <span className="mr-2">
                                    <Image
                                        src="/images/playstore.png"
                                        alt="Google Play"
                                        width={20}
                                        height={22}
                                    />
                                </span>
                                <div className="text-left">
                                    <div className="text-xs leading-none">GET IT ON</div>
                                    <div className="font-medium">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-orange">Lorem Ipsum Lorem</h3>
                    <p className="text-light-grey max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>


                </div>

                {/* iPhone Showcase */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 max-w-none">
                    {/* Left iPhone */}
                    <div className="w-full md:w-1/4 max-w-[220px]">
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <h4 className="text-black font-semibold mb-4 text-center">Lorem Ipsum Lorem</h4>
                            <IPhoneMockup
                                size="small"
                                icon="📊"
                                title="Dashboard"
                                gradientFrom="from-orange/20"
                                gradientTo="to-orange"
                            />
                            <p className="text-gray text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    {/* Center iPhone - Larger */}
                    <div className="w-full md:w-1/3 max-w-[280px]">
                        <div className="relative">
                            <IPhoneMockup
                                size="large"
                                icon="🚛"
                                title="Main App"
                                subtitle="Track & Manage"
                                gradientFrom="from-orange"
                                gradientTo="to-text-orange"
                            />
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-center mt-4">Lorem Ipsum Lorem</h4>
                        <p className="text-light-grey text-xs text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                    </div>

                    {/* Right iPhone */}
                    <div className="w-full md:w-1/4 max-w-[220px]">
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <h4 className="text-black font-semibold mb-4 text-center">Lorem Ipsum Lorem</h4>
                            <IPhoneMockup
                                size="small"
                                icon="⚙️"
                                title="Settings"
                                gradientFrom="from-text-orange"
                                gradientTo="to-red"
                            />
                            <p className="text-gray text-xs text-center mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}