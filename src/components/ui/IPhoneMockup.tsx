'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

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
    showOverlay?: boolean;
}

export default function IPhoneMockup({
    size = 'small',
    icon,
    title,
    subtitle,
    screens,
    className = '',
    showOverlay = false
}: IPhoneMockupProps) {
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if we're on mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!screens || screens.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentScreenIndex((prev) => (prev + 1) % screens.length);
        }, 3000); // Change screen every 3 seconds

        return () => clearInterval(interval);
    }, [screens]);

    // Get device type based on size
    const getDeviceType = (): "iPhone X" | "iPhone 8" | "iPhone 8 Plus" | "iPhone 5s" | "iPhone 4s" | "Galaxy Note 8" | "Nexus 5" | "Lumia 920" | "Samsung Galaxy S5" | "HTC One" | "iPad Mini" | "MacBook Pro" => {
        switch (size) {
            case 'extra-large':
                return 'iPhone X';
            case 'large':
                return 'iPhone X';
            case 'small':
            default:
                return 'iPhone X';
        }
    };

    // Get scale based on size and device
    const getScale = () => {
        if (isMobile) {
            switch (size) {
                case 'extra-large':
                    return 0.4;
                case 'large':
                    return 0.35;
                case 'small':
                default:
                    return 0.3;
            }
        } else {
            switch (size) {
                case 'extra-large':
                    return 0.8;
                case 'large':
                    return 0.6;
                case 'small':
                default:
                    return 0.45;
            }
        }
    };

    return (
        <div className={`relative ${className}`} style={{ transform: `scale(${getScale()})` }}>
            <DeviceFrameset
                device={getDeviceType()}
                color="black"
                landscape={false}
            >
                {screens ? (
                    // Animated screens mode
                    <div className="relative w-full h-full">
                        {screens.map((screen, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentScreenIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    background: `linear-gradient(to bottom right, var(--orange), var(--text-orange))`
                                }}
                            >
                                <Image
                                    src={screen.image}
                                    alt={screen.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {showOverlay && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="text-lg font-bold">{screen.title}</div>
                                            {screen.subtitle && (
                                                <div className="text-sm opacity-90 mt-2">{screen.subtitle}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    // Static mode with icon and title
                    <div
                        className="flex items-center justify-center h-full w-full"
                        style={{
                            background: `linear-gradient(to bottom right, var(--orange), var(--text-orange))`
                        }}
                    >
                        <div className="text-white text-center">
                            {icon && (
                                <div className="text-4xl mb-4">{icon}</div>
                            )}
                            {title && (
                                <div className="text-lg font-bold">{title}</div>
                            )}
                            {subtitle && (
                                <div className="text-sm opacity-90 mt-2">{subtitle}</div>
                            )}
                        </div>
                    </div>
                )}
            </DeviceFrameset>
        </div>
    );
}