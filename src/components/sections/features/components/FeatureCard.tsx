import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-white p-6  rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light-orange bg-opacity-30">
                    <div className="text-orange">
                        {icon}
                    </div>
                </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray text-sm flex-1">
                {description}
            </p>
        </div>
    );
}
