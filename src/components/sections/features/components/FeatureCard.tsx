interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
                <span className="inline-block text-orange text-sm font-bold bg-light-orange bg-opacity-30 py-1 px-2 rounded">
                    {icon}
                </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray text-sm">
                {description}
            </p>
        </div>
    );
}
