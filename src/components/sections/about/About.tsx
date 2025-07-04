import React from 'react';
import IPhoneMockup from '../../ui/IPhoneMockup';

export default function About() {
    // Steps data with number, title and description
    const steps = [
        {
            number: '1',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.'
        },
        {
            number: '2',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.'
        },
        {
            number: '3',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.'
        },
        {
            number: '4',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.'
        }
    ];
    return (
        <section id="how-it-works" className="mt-10 md:pt-15 pb-16 md:pb-24 bg-white w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Phone with Steps - Centered Layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Center Phone - Absolutely positioned in the middle */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                            {/* Orange Circle Background */}
                            <div className="absolute w-[150%] h-[70%] rounded-full bg-orange top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                            {/* Phone using IPhoneMockup component */}
                            <IPhoneMockup
                                size="large"
                                icon="🚚"
                                title="Naqlyat Tech"
                                subtitle="How it works"
                                gradientFrom="from-orange"
                                gradientTo="to-text-orange"
                                className="w-full max-w-[240px] mx-auto relative z-10"
                            />
                        </div>
                    </div>

                    {/* Steps Grid - Positioned around the phone */}
                    <div className="grid grid-cols-2 gap-[20rem] h-[600px] md:h-[600px]">
                        {/* Top Left - Step 1 */}
                        <div className="flex justify-end items-start pt-8 pr-8">
                            <div className="max-w-xs text-right">
                                <div className="flex items-center justify-end mb-2">
                                    <h3 className="font-semibold mr-2">{steps[0].title}</h3>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm bg-orange text-white">
                                        {steps[0].number}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {steps[0].description}
                                </p>
                            </div>
                        </div>

                        {/* Top Right - Step 2 */}
                        <div className="flex justify-start items-start pt-8">
                            <div className="max-w-xs">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm bg-light-orange text-orange mr-2">
                                        {steps[1].number}
                                    </div>
                                    <h3 className="font-semibold">{steps[1].title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {steps[1].description}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Left - Step 3 */}
                        <div className="flex justify-end items-end pb-8 pr-8">
                            <div className="max-w-xs text-right">
                                <div className="flex items-center justify-end mb-2">
                                    <h3 className="font-semibold mr-2">{steps[2].title}</h3>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm bg-light-orange text-orange">
                                        {steps[2].number}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {steps[2].description}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right - Step 4 */}
                        <div className="flex justify-start items-end pb-8 pl-8">
                            <div className="max-w-xs">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm bg-light-orange text-orange mr-2">
                                        {steps[3].number}
                                    </div>
                                    <h3 className="font-semibold">{steps[3].title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {steps[3].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}