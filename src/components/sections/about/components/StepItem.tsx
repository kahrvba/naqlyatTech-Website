'use client';

import React, { useRef, useEffect } from 'react';
import { Step } from '../types';
import gsap from 'gsap';

interface StepItemProps {
    step: Step;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    isActive: boolean;
}

export function StepItem({ step, position, isActive }: StepItemProps) {
    const stepRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stepEl = stepRef.current;
        if (!stepEl) return;

        // Initial animation
        gsap.fromTo(stepEl,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        );
    }, []);

    useEffect(() => {
        const stepEl = stepRef.current;
        if (!stepEl) return;

        // Active state animation
        gsap.to(stepEl, {
            scale: isActive ? 1.05 : 1,
            opacity: isActive ? 1 : 0.7,
            duration: 0.3
        });
    }, [isActive]);

    const getPositionClasses = () => {
        switch (position) {
            case 'top-left':
                return 'flex justify-end items-start pt-8 pr-8';
            case 'top-right':
                return 'flex justify-start items-start pt-8';
            case 'bottom-left':
                return 'flex justify-end items-end pb-8 pr-8';
            case 'bottom-right':
                return 'flex justify-start items-end pb-8 pl-8';
        }
    };

    const getContentClasses = () => {
        return position.includes('left') ? 'max-w-xs text-right' : 'max-w-xs';
    };

    const getFlexClasses = () => {
        return position.includes('left') ? 'flex items-center justify-end mb-2' : 'flex items-center mb-2';
    };

    const getNumberClasses = () => {
        return position.includes('left') ? 'ml-2' : 'mr-2';
    };

    return (
        <div ref={stepRef} className={getPositionClasses()}>
            <div className={getContentClasses()}>
                <div className={getFlexClasses()}>
                    {position.includes('left') && (
                        <h3 className="font-semibold mr-2">{step.title}</h3>
                    )}
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg ${isActive ? 'bg-orange text-white' : 'bg-light-orange text-orange'
                        } ${getNumberClasses()}`}>
                        {step.number}
                    </div>
                    {position.includes('right') && (
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                    )}
                </div>
                <p className="text-lg text-gray-600">
                    {step.description}
                </p>
            </div>
        </div>
    );
}
