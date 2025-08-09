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

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        // Different ScrollTrigger setup for mobile and desktop
        if (isMobile) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: `+=${steps.length * 100}vh`, // One full viewport per step on mobile
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
        } else {
            // Keep the original desktop behavior
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=300vh',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const stepIndex = Math.floor(progress * steps.length);
                        const clampedIndex = Math.min(stepIndex, steps.length - 1);

                        if (clampedIndex !== currentStep) {
                            setCurrentStep(clampedIndex);
                        }
                    }
                }
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [currentStep, steps.length, isMobile]);

    return (
        <section ref={sectionRef} id="how-it-works" className="min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white w-full py-12 md:py-10 relative">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-0 md:mb-16  md:block">
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-gray max-w-2xl mx-auto text-sm">
                        Experience our seamless delivery process designed to make your life easier with every step.
                    </p>
                </div>

                {/* Phone with Steps - Full height on mobile */}
                <div className={`relative max-w-6xl mx-auto ${isMobile ? 'h-screen' : 'h-[400px] sm:h-[500px] md:h-[650px]'}`}>
                    {/* Independent Orange Circle Background */}
                    <div className="md:w-100 md:h-100 rounded-full bg-orange absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

                    {/* StepsGrid - Hidden on mobile */}
                    <div className="hidden md:block">
                        <StepsGrid steps={steps} currentStep={currentStep} />
                    </div>

                    {/* CenterPhone */}
                    <CenterPhone screens={screens} currentScreen={currentStep} />
                </div>

                {/* Progress Indicator - Hidden on mobile */}
                
            </div>
        </section>
    );
}