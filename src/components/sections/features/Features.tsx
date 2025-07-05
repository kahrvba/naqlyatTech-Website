import React from 'react';

export default function Features() {
    // Features data
    const features = [
        {
            id: 1,
            icon: "01",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            id: 2,
            icon: "02",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            id: 3,
            icon: "03",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            id: 4,
            icon: "04",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
        },
    ];

    return (
        <section id="features" className="py-16 md:py-24 bg-light-grey bg-opacity-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Sidebar - Title and Description */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Features</h2>
                        <div className="w-12 h-1 bg-orange mb-6"></div>
                        <p className="text-gray text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        {/* Feature Card under description */}
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow max-w-sm">
                            <div className="mb-4">
                                <span className="inline-block text-orange text-sm font-bold bg-light-orange bg-opacity-30 py-1 px-2 rounded">
                                    06
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Lorem Ipsum</h3>
                            <p className="text-gray text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Feature Cards Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="mb-4">
                                        <span className="inline-block text-orange text-sm font-bold bg-light-orange bg-opacity-30 py-1 px-2 rounded">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}