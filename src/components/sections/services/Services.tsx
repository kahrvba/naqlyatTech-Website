import React from 'react';

export default function Services() {
    const reasons = [
        {
            id: 1,
            icon: "🚚",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
            highlighted: true
        },
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
        <section id="why-us" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Us ?</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className={`p-6 rounded-lg ${reason.highlighted
                                    ? 'bg-orange text-white shadow-lg transform transition-transform hover:-translate-y-1'
                                    : 'bg-white border border-light-grey bg-opacity-50 hover:border-gray transition-colors'
                                }`}
                        >
                            <div className="text-2xl mb-4">{reason.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                            <p className={`text-sm ${reason.highlighted ? 'text-white' : 'text-gray'}`}>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}