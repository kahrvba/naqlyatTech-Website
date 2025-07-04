import React from 'react';

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
        <section id="how-it-works" className="pt-64 md:pt-80 pb-16 md:pb-24 bg-white w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Phone with Steps */}
                <div className="flex flex-col md:flex-row items-center justify-center relative">
                    {/* Center Phone */}
                    <div className="md:w-1/4 relative z-20 mb-12 md:mb-0">
                        <div className="relative">
                            {/* Orange Circle Background */}
                            <div className="absolute w-[120%] h-[40%] rounded-full bg-orange opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                            {/* Phone */}
                            <div className="bg-black rounded-3xl overflow-hidden aspect-[9/19] shadow-xl relative z-10 w-full max-w-[240px] mx-auto"></div>
                        </div>
                    </div>

                    {/* Steps Positioned Around the Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4 max-w-3xl">
                        {steps.map((step, index) => {
                            // Determine positioning based on index
                            const isLeft = index % 2 === 0;
                            const isTop = index < 2;

                            return (
                                <div
                                    key={index}
                                    className={`flex ${isLeft ? 'md:justify-end md:text-right' : 'md:justify-start'} ${isTop ? 'md:self-start' : 'md:self-end'}`}
                                >
                                    <div className="max-w-xs">
                                        <div className={`flex items-center mb-2 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${index === 0 ? 'bg-orange text-white' : 'bg-light-orange text-orange'} mr-2`}>
                                                {step.number}
                                            </div>
                                            <h3 className="font-semibold">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}