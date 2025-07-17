import React from 'react';
import { Feature } from './types';
import {

    Users
} from 'lucide-react';

export default function Features() {
    // Features data with Lucide icons
    const features: Feature[] = [
        {
            id: 1,
            icon: <Users className="w-5 h-5" />,
            title: "Fast Delivery",
            description: "Quick and reliable delivery service to ensure your goods reach their destination on time."
        },
        {
            id: 2,
            icon: <Users className="w-5 h-5" />,
            title: "Real-time Tracking",
            description: "Track your shipments in real-time with our advanced tracking system."
        },
        {
            id: 3,
            icon: <Users className="w-5 h-5" />,
            title: "Route Optimization",
            description: "Smart route planning to ensure the most efficient delivery paths."
        },
        {
            id: 4,
            icon: <Users className="w-5 h-5" />,
            title: "Secure Transport",
            description: "Your goods are protected with our comprehensive security measures."
        },
        {
            id: 5,
            icon: <Users className="w-5 h-5" />,
            title: "Instant Notifications",
            description: "Stay updated with real-time notifications about your shipment status."
        }
    ];

    return (
        <section id="features" className="py-16 m-15 rounded-2xl md:py-24 bg-[#F9F9F9] bg-opacity-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
                    {/* Left Sidebar - Title and Description Only */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">Our Features</h2>
                        <div className="w-35 h-1 bg-orange mb-6"></div>
                        <p className="text-gray text-sm leading-relaxed pr-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </p>

                       
                    </div>

                    {/* Features Grid - Remaining Cards */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                            {features.slice(0, 2).map((feature) => (
                                <div key={feature.id} className="flex">
                                    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full min-h-[250px] flex flex-col w-full">
                                        <div className="mb-6">
                                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-light-orange bg-opacity-30">
                                                <div className="text-orange">
                                                    {feature.icon}
                                                </div>
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                        <p className="text-gray text-sm flex-1 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className="flex gap-5 mt-8">
                    {features.slice(2, 5).map((feature) => (
                        <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full min-h-[250px] flex flex-col w-1/3">
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-light-orange bg-opacity-30">
                                    <div className="text-orange">
                                        {feature.icon}
                                    </div>
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray text-sm flex-1 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}