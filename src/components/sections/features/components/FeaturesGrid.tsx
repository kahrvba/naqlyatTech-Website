import { Feature } from '../types';
import { FeatureCard } from './FeatureCard';

interface FeaturesGridProps {
    features: Feature[];
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
    return (
        <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
        </div>
    );
}
