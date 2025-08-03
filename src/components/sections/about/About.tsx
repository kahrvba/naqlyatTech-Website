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
    const [isMobile, setIsMobile] = useState(false);

    const steps: Step[] = [
        {
            number: '1',
            title: 'Place Order',
            description: 'Select your delivery options and place your order with our easy-to-use interface.',
            image: '/props/screen1.png'
        },
        {
            number: '2',
            title: 'Track Delivery',
            description: 'Monitor your shipment in real-time with our advanced tracking system.',
            image: '/props/screen2.png'
        },
        {
            number: '3',
            title: 'Rate Service',
            description: 'Share your experience and help us improve our service quality.',
            image: '/props/screen3.png'
        },
        {
            number: '4',
            title: 'View History',
            description: 'Access your complete delivery history and manage your account.',
            image: '/props/screen4.png'
        }
    ];

    const screens: Screen[] = steps.map(step => ({
        image: step.image,
        title: step.title,
        subtitle: step.description
    }));

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
        const section = sectionRef.current;

        if (!section || isMobile) return;

        // Pin the section and create scroll-triggered animations for non-mobile only
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=1200vh', // 3x viewport height for smooth scrolling
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
    }, [currentStep, steps.length, isMobile]);

    // For mobile, add manual step navigation
    const goToStep = (stepIndex: number) => {
        setCurrentStep(stepIndex);
    };

    return (
        <section ref={sectionRef} id="how-it-works" className="min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white w-full py-12 md:py-16 relative">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Experience our seamless delivery process designed to make your life easier with every step.
                    </p>
                </div>

                {/* Phone with Steps - Centered Layout */}
                <div className="relative max-w-6xl mx-auto h-[400px] sm:h-[500px] md:h-[650px]">
                    {/* Independent Orange Circle Background (responsive size) */}
                    <div className="w-60 h-60 md:w-100 md:h-100 rounded-full bg-orange absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

                    {/* StepsGrid renders steps absolutely (hidden on very small screens) */}
                    <div className="hidden sm:block">
                        <StepsGrid steps={steps} currentStep={currentStep} />
                    </div>

                    {/* CenterPhone renders the iPhone */}
                    <CenterPhone screens={screens} currentScreen={currentStep} />
                </div>

                {/* Progress Indicator / Step Navigation */}
                <div className="flex flex-col items-center mt-8">
                    {/* Step Titles for Mobile (only visible on mobile) */}
                    {isMobile && (
                        <div className="text-center mb-6">
                            <h3 className="text-lg font-bold mb-2">{steps[currentStep].title}</h3>
                            <p className="text-sm text-gray">{steps[currentStep].description}</p>
                        </div>
                    )}

                    {/* Step Dots */}
                    <div className="flex space-x-4">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToStep(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-orange scale-125' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to step ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}