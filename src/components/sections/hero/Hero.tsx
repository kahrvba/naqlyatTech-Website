import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import AppStoreButton from '../../ui/AppStoreButton';
import HeroContent from '../../ui/HeroContent';

export default function Hero() {
    return (
        <section id="home" className="w-full">
            {/* Dark Background Section */}
            <div className="relative bg-gray justify-center items-center py-20 md:py-40 w-full min-h-[80vh] md:min-h-screen">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    {/* Text Content */}
                    <HeroContent
                        title="Lorem ipsum"
                        subtitle="Lorem ipsum Lorem"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                    />
                </div>
            </div>

            {/* Floating iPhone Overlay - Positioned Absolutely */}
            <div className='h-[50vh] sm:h-[60vh] md:h-[80vh] w-full'>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[30%] sm:top-[60%] z-30 w-full max-w-6xl px-4 sm:px-10">
                    <div className="flex justify-center md:justify-between items-end">
                        {/* Left iPhone */}
                        <IPhoneMockup
                            size="large"
                            icon="🎯"
                            title="Features"
                            gradientFrom="from-text-orange"
                            gradientTo="to-orange"
                            className="hidden md:block w-1/3 mb-8 z-10"
                        />

                        {/* Center iPhone (larger) */}
                        <IPhoneMockup
                            size="extra-large"
                            icon="🚚"
                            title="Naqlyat Tech"
                            subtitle="Transportation Solution"
                            gradientFrom="from-orange"
                            gradientTo="to-text-orange"
                            className="w-full sm:w-2/3 md:w-1/3 z-20"
                        />

                        {/* Right iPhone */}
                        <IPhoneMockup
                            size="large"
                            icon="🎯"
                            title="Features"
                            gradientFrom="from-text-orange"
                            gradientTo="to-orange"
                            className="hidden md:block w-1/3 mb-8 z-10"
                        />
                    </div>
                    {/* App Store Buttons - now directly after phones */}
                    <div className="flex justify-center items-end mt-6 md:mt-12 space-x-4">
                        <AppStoreButton type="appstore" />
                        <AppStoreButton type="playstore" />
                    </div>
                </div>
            </div>
        </section>
    );
}