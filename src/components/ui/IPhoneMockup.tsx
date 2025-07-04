import React from 'react';

interface IPhoneMockupProps {
    size?: 'small' | 'large';
    icon: string;
    title: string;
    subtitle?: string;
    gradientFrom: string;
    gradientTo: string;
    className?: string;
}

export default function IPhoneMockup({
    size = 'small',
    icon,
    title,
    subtitle,
    gradientFrom,
    gradientTo,
    className = ''
}: IPhoneMockupProps) {
    const isLarge = size === 'large';

    return (
        <div className={`relative ${className}`}>
            {/* iPhone Frame */}
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl border border-gray-800">
                {/* iPhone Screen */}
                <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                    {/* Status Bar */}
                    <div className={`bg-black ${isLarge ? 'h-10 px-6' : 'h-8 px-4'} flex items-center justify-between`}>
                        <div className={`text-white ${isLarge ? 'text-sm' : 'text-xs'}`}>9:41</div>
                        <div className="flex items-center space-x-1">
                            <div className={`${isLarge ? 'w-5' : 'w-4'} h-2 bg-white rounded-sm`}></div>
                            <div className={`${isLarge ? 'w-5' : 'w-4'} h-2 bg-white rounded-sm`}></div>
                            <div className={`${isLarge ? 'w-5' : 'w-4'} h-2 bg-white rounded-sm`}></div>
                        </div>
                    </div>
                    {/* Screen Content */}
                    <div className={`flex-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} ${isLarge ? 'p-6' : 'p-4'} flex items-center justify-center`}>
                        <div className="text-white text-center">
                            <div className={`${isLarge ? 'text-4xl mb-4' : 'text-2xl mb-2'}`}>{icon}</div>
                            <div className={`${isLarge ? 'text-lg font-bold' : 'text-sm font-medium'}`}>{title}</div>
                            {subtitle && (
                                <div className={`${isLarge ? 'text-sm opacity-90' : 'text-xs opacity-90'} mt-2`}>{subtitle}</div>
                            )}
                        </div>
                    </div>
                    {/* Home Indicator */}
                    <div className={`absolute ${isLarge ? 'bottom-2 w-36' : 'bottom-1 w-32'} left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full opacity-30`}></div>
                </div>
            </div>
        </div>
    );
}