import React from 'react';
import { LeftSidebar } from './components/LeftSidebar';
import { FeaturesGrid } from './components/FeaturesGrid';
import { Feature } from './types';

export default function Features() {
    // Features data
    const features: Feature[] = [
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
        {
            id: 5,
            icon: "05",
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
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