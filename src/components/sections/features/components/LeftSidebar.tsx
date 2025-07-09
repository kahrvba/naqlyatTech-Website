import { Feature } from '../types';
import { FeatureCard } from './FeatureCard';

interface LeftSidebarProps {
    feature: Feature;
}

export function LeftSidebar({ feature }: LeftSidebarProps) {
    return (
        <div className="lg:w-1/3">
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">Our Features</h2>
            <div className="w-12 h-1 bg-orange mb-6"></div>
            <p className="text-gray text-sm leading-relaxed">
                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum
                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum
                pusum Loreum Loreum ipusum
            </p>

            {/* Feature Card under description */}
            <div className="mt-10 flex">
                <div className="flex-1">
                    <FeatureCard {...feature} />
                </div>
            </div>
        </div>
    );
}
