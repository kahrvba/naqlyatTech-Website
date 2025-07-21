import React from 'react';
import Image from 'next/image';

interface AppStoreButtonProps {
    type: 'appstore' | 'playstore';
    className?: string;
}

export default function AppStoreButton({ type, className = '' }: AppStoreButtonProps) {
    const isAppStore = type === 'appstore';

    return (
        <button className={`flex items-center bg-black text-white px-3 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors ${className}`}>
            <span className="mr-3">
                {isAppStore ? (
                    <Image src="/images/apple.png" alt="App Store" width={20} height={15} />
                ) : (
                    <Image src="/images/playstore.png" alt="Google Play" width={15} height={15} />
                )}
            </span>
            <div className="text-left">
                <div className=" font-semibold text-sm leading-none opacity-90">
                    Available on the
                </div>
                <div className="font-semibold text-sm">
                    {isAppStore ? 'App Store' : 'Google Play'}
                </div>
            </div>
        </button>
    );
}