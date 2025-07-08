'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface ScreenContent {
    image: string;
    title: string;
    subtitle?: string;
}

interface IPhoneMockupProps {
    size?: 'small' | 'large' | 'extra-large';
    icon?: string;
    title?: string;
    subtitle?: string;
    screens?: ScreenContent[];
    gradientFrom: string;
    gradientTo: string;
    className?: string;
}

export default function IPhoneMockup({
    size = 'small',
    icon,
    title,
    subtitle,
    screens,
    gradientFrom,
    gradientTo,
    className = ''
}: IPhoneMockupProps) {
    const isLarge = size === 'large';
    const isExtraLarge = size === 'extra-large';
    const screenRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!screens || screens.length <= 1) return;

        // Set initial states
        screenRefs.current.forEach((screen, index) => {
            if (!screen) return;
            gsap.set(screen, {
                opacity: index === 0 ? 1 : 0,
                display: index === 0 ? 'flex' : 'none'
            });
        });

        // Create animation timeline
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1
        });

        screenRefs.current.forEach((screen, index) => {
            if (!screen) return;
            const nextIndex = (index + 1) % screens.length;
            const nextScreen = screenRefs.current[nextIndex];

            tl.to(screen, {
                opacity: 0,
                duration: 0.5,
                onStart: () => {
                    if (nextScreen) {
                        gsap.set(nextScreen, { display: 'flex' });
                        gsap.to(nextScreen, { opacity: 1, duration: 0.5 });
                    }
                },
                onComplete: () => {
                    gsap.set(screen, { display: 'none' });
                }
            });
        });

        return () => {
            tl.kill();
        };
    }, [screens]);

    return (
        <div className={`relative ${className}`}>
            {/* iPhone Frame */}
            <div className={`bg-black rounded-[3rem] p-2 shadow-2xl border border-gray-800 ${isExtraLarge ? 'w-80 h-[600px]' :
                    isLarge ? 'w-64 h-[500px]' :
                        'w-48 h-[400px]'
                }`}>
                {/* iPhone Screen */}
                <div className="bg-black rounded-[2.5rem] overflow-hidden h-full w-full relative">
                    {/* Status Bar */}
                    <div className={`bg-black ${isExtraLarge ? 'h-12 px-8' :
                            isLarge ? 'h-10 px-6' :
                                'h-8 px-4'
                        } flex items-center justify-between z-10 relative`}>
                        <div className={`text-white ${isExtraLarge ? 'text-lg' :
                                isLarge ? 'text-sm' :
                                    'text-xs'
                            }`}>9:41</div>
                        <div className="flex items-center space-x-1">
                            <div className={`${isExtraLarge ? 'w-6' :
                                    isLarge ? 'w-5' :
                                        'w-4'
                                } h-2 bg-white rounded-sm`}></div>
                            <div className={`${isExtraLarge ? 'w-6' :
                                    isLarge ? 'w-5' :
                                        'w-4'
                                } h-2 bg-white rounded-sm`}></div>
                            <div className={`${isExtraLarge ? 'w-6' :
                                    isLarge ? 'w-5' :
                                        'w-4'
                                } h-2 bg-white rounded-sm`}></div>
                        </div>
                    </div>

                    {/* Screen Content */}
                    {screens ? (
                        // Animated screens mode
                        screens.map((screen, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) screenRefs.current[index] = el;
                                }}
                                className={`absolute inset-0 flex-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}
                                style={{ top: isExtraLarge ? '3rem' : isLarge ? '2.5rem' : '2rem' }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={screen.image}
                                        alt={screen.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className={`${isExtraLarge ? 'text-2xl font-bold' :
                                                    isLarge ? 'text-lg font-bold' :
                                                        'text-sm font-medium'
                                                }`}>{screen.title}</div>
                                            {screen.subtitle && (
                                                <div className={`${isExtraLarge ? 'text-lg opacity-90 mt-3' :
                                                        isLarge ? 'text-sm opacity-90 mt-2' :
                                                            'text-xs opacity-90 mt-2'
                                                    }`}>{screen.subtitle}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Static mode with icon and title
                        <div className={`flex-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center h-full`}>
                            <div className="text-white text-center">
                                {icon && (
                                    <div className={`${isExtraLarge ? 'text-6xl mb-6' :
                                            isLarge ? 'text-4xl mb-4' :
                                                'text-2xl mb-2'
                                        }`}>{icon}</div>
                                )}
                                {title && (
                                    <div className={`${isExtraLarge ? 'text-2xl font-bold' :
                                            isLarge ? 'text-lg font-bold' :
                                                'text-sm font-medium'
                                        }`}>{title}</div>
                                )}
                                {subtitle && (
                                    <div className={`${isExtraLarge ? 'text-lg opacity-90 mt-3' :
                                            isLarge ? 'text-sm opacity-90 mt-2' :
                                                'text-xs opacity-90 mt-2'
                                        }`}>{subtitle}</div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Home Indicator */}
                    <div className={`absolute ${isExtraLarge ? 'bottom-4 w-44' :
                            isLarge ? 'bottom-2 w-36' :
                                'bottom-1 w-32'
                        } left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full opacity-30 z-10`}></div>
                </div>
            </div>
        </div>
    );
}