'use client';

import React, { useRef, useEffect } from 'react';
import IPhoneMockup from '../../../ui/IPhoneMockup';
import gsap from 'gsap';
import { Screen } from '../types';

interface CenterPhoneProps {
    screens: Screen[];
    currentScreen: number;
}

export function CenterPhone({ screens, currentScreen }: CenterPhoneProps) {
    const phoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const phone = phoneRef.current;
        if (!phone) return;

        // Initial animation
        gsap.fromTo(phone,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        );
    }, []);

    return (
        <div ref={phoneRef} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
                {/* Orange Circle Background */}
                <div className="absolute w-[150%] h-[70%] rounded-full bg-orange top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Phone using IPhoneMockup component */}
                <IPhoneMockup
                    size="large"
                    screens={[screens[currentScreen]]}
                    gradientFrom="from-orange"
                    gradientTo="to-text-orange"
                    className="w-full max-w-[240px] mx-auto relative z-10"
                />
            </div>
        </div>
    );
}
