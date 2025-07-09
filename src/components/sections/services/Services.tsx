import React from 'react';

export default function Services() {
    const mainReason = {
        id: 1,
        icon: "🚚",
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        highlighted: true
    };

    const otherReasons = [
        {
            id: 2,
            icon: "🚚",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
            highlighted: false
        },
        {
            id: 3,
            icon: "🚚",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
            highlighted: false
        },
        {
            id: 4,
            icon: "🚚",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
            highlighted: false
        }
    ];

    return (
        <section id="why-us" className="py-16 md:py-24 bg-white ">
            <div className="container mx-auto px-4">
                {/* Main Layout - Title/Description on left, Cards on right */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Side - Section Title and Description */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 ">Why Us ?</h2>
                        <div className="w-12 h-1 bg-orange mb-6"></div>
                        <p className="text-gray text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    {/* Right Side - Cards Section */}
                    <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
                        {/* Large Highlighted Card */}
                        <div className="lg:w-1/2">
                            <div className="bg-orange text-white p-4 rounded-lg h-full flex flex-col justify-center">
                                <div className="text-3xl mb-2">{mainReason.icon}</div>
                                <h3 className="text-lg font-bold mb-4">{mainReason.title}</h3>
                                <p className="text-white text-xs leading-relaxed">
                                    {mainReason.description}
                                </p>
                            </div>
                        </div>

                        {/* Three Smaller Cards */}
                        <div className="lg:w-2/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {otherReasons.map((reason) => (
                                <div
                                    key={reason.id}
                                    className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <div className="text-center">
                                        <div className="text-orange text-xl mb-3">{reason.icon}</div>
                                        <h3 className="text-sm font-semibold mb-2">{reason.title}</h3>
                                        <p className="text-gray text-xs leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}