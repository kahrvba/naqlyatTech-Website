'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CenterPhone } from './components/CenterPhone';
import { StepsGrid } from './components/StepsGrid';
import { Step, Screen } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const steps: Step[] = [
        {
            number: '1',
            title: 'Place Order',
            description: 'Select your delivery options and place your order with our easy-to-use interface.',
            image: '/images/step1.png'
        },
        {
            number: '2',
            title: 'Track Delivery',
            description: 'Monitor your shipment in real-time with our advanced tracking system.',
            image: '/images/step2.png'
        },
        {
            number: '3',
            title: 'Rate Service',
            description: 'Share your experience and help us improve our service quality.',
            image: '/images/step3.png'
        },
        {
            number: '4',
            title: 'View History',
            description: 'Access your complete delivery history and manage your account.',
            image: '/images/step4.png'
        }
    ];

    const screens: Screen[] = steps.map(step => ({
        image: step.image,
        title: step.title,
        subtitle: step.description
    }));

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        // Pin the section and create scroll-triggered animations
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=300vh', // 3x viewport height for smooth scrolling
                scrub: 1,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    // Calculate current step based on scroll progress
                    const progress = self.progress;
                    const stepIndex = Math.floor(progress * steps.length);
                    const clampedIndex = Math.min(stepIndex, steps.length - 1);

                    if (clampedIndex !== currentStep) {
                        setCurrentStep(clampedIndex);
                    }
                }
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [currentStep, steps.length]);

    return (
        <section ref={sectionRef} id="how-it-works" className="min-h-screen flex items-center justify-center bg-white w-full py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Experience our seamless delivery process designed to make your life easier with every step.
                    </p>
                </div>

                {/* Phone with Steps - Centered Layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Center Phone */}
                    <CenterPhone screens={screens} currentScreen={currentStep} />

                    {/* Steps Grid */}
                    <StepsGrid steps={steps} currentStep={currentStep} />
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                        {steps.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-orange' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}