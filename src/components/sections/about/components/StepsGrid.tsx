'use client';

import React from 'react';
import { StepItem } from './StepItem';
import { Step } from '../types';

interface StepsGridProps {
    steps: Step[];
    currentStep: number;
}

export function StepsGrid({ steps, currentStep }: StepsGridProps) {
    const positions: Array<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'> = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right'
    ];

    return (
        <div className="grid grid-cols-2 gap-[15rem] sm:gap-[20rem] md:gap-[25rem] h-[400px] md:h-[500px]">
            {steps.map((step, index) => (
                <StepItem
                    key={step.number}
                    step={step}
                    position={positions[index]}
                    isActive={currentStep === index}
                />
            ))}
        </div>
    );
}
