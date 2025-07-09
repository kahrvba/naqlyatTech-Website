import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';
import AppStoreButton from '../../ui/AppStoreButton';
import HeroContent from '../../ui/HeroContent';

export default function Hero() {
    return (
        <section id="home" className="relative w-full mb-120">
            {/* Dark Background Section */}
            <div className="  bg-gray pt-16 pb-100 w-full">
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
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[40%] z-30 w-full max-w-6xl px-10">
                <div className="flex justify-between items-end">
                    {/* Left iPhone */}
                    <IPhoneMockup
                        size="small"
                        icon="🎯"
                        title="Features"
                        gradientFrom="from-text-orange"
                        gradientTo="to-orange"
                        className="hidden md:block w-1/5 mb-8 z-10"
                    />

                    {/* Center iPhone (larger) */}
                    <IPhoneMockup
                        size="extra-large"
                        icon="🚚"
                        title="Naqlyat Tech"
                        subtitle="Transportation Solution"
                        gradientFrom="from-orange"
                        gradientTo="to-text-orange"
                        className="w-2/3 md:w-1/3 z-20"
                    />

                    {/* Right iPhone */}
                    <IPhoneMockup
                        size="small"
                        icon="🎯"
                        title="Features"
                        gradientFrom="from-text-orange"
                        gradientTo="to-orange"
                        className="hidden md:block w-1/5 mb-8 z-10"
                    />
                </div>

                {/* App Store Buttons */}
                <div className="flex justify-center mt-12 space-x-4">
                    <AppStoreButton type="appstore" />
                    <AppStoreButton type="playstore" />
                </div>
            </div>
        </section>
    );
}