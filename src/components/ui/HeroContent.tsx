import React from 'react';

interface HeroContentProps {
    title: string;
    subtitle: string;
    description: string;
    className?: string;
}

export default function HeroContent({
    title,
    subtitle,
    description,
    className = ''
}: HeroContentProps) {
    return (
        <div className={`text-center mb-16 max-w-3xl mx-auto ${className}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6">
                {subtitle}
            </h2>
            <p className="text-light-grey md:max-w-2xl mx-auto text-sm">
                {description}
            </p>
        </div>
    );
}