import React from 'react';
import { LeftSidebar } from './components/LeftSidebar';
import { FeaturesGrid } from './components/FeaturesGrid';
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
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Sidebar */}
                    <LeftSidebar feature={features[features.length - 1]} />

                    {/* Features Grid */}
                    <FeaturesGrid features={features.slice(0, -1)} />
                </div>
            </div>
        </section>
    );
}