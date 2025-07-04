import React from 'react';

interface AppStoreButtonProps {
    type: 'appstore' | 'playstore';
    className?: string;
}

export default function AppStoreButton({ type, className = '' }: AppStoreButtonProps) {
    const isAppStore = type === 'appstore';

    return (
        <button className={`flex items-center bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors ${className}`}>
            <span className="mr-3">
                {isAppStore ? (
                    <svg width="24" height="28" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0625 10.5517C13.0392 8.15675 15.0142 7.04425 15.0942 6.99675C14.0258 5.45175 12.365 5.2655 11.7675 5.2515C10.2883 5.11217 8.85583 6.18217 8.10917 6.18217C7.3445 6.18217 6.18 5.2655 4.9195 5.2935C3.3325 5.3215 1.86333 6.18967 1.04833 7.566C-0.63917 10.3618 0.64417 14.4943 2.26667 16.8427C3.0705 17.9972 4.01667 19.3062 5.25667 19.2502C6.4595 19.1942 6.93 18.4545 8.3815 18.4545C9.81433 18.4545 10.2558 19.2502 11.515 19.2222C12.81 19.194 13.6343 18.0372 14.41 16.8707C15.3327 15.5292 15.7108 14.2107 15.7248 14.1407C15.6963 14.1267 13.0882 13.0492 13.0625 10.5517Z" fill="white" />
                        <path d="M10.6608 3.52417C11.2933 2.73667 11.7153 1.65667 11.5847 0.56167C10.6563 0.59667 9.50134 1.1865 8.84134 1.9565C8.25384 2.632 7.74534 3.74 7.89084 4.80917C8.93334 4.88917 10.0003 4.298 10.6608 3.52417Z" fill="white" />
                    </svg>
                ) : (
                    <svg width="24" height="26" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.928 10.82L4.747 19.002L16.044 10.82L4.747 2.63798L12.928 10.82Z" fill="white" stroke="white" strokeWidth="0.5" />
                        <path d="M12.928 10.82H4.747H16.044H12.928Z" fill="white" stroke="white" strokeWidth="0.5" />
                        <path d="M4.747 2.63798V19.002V2.63798Z" fill="white" stroke="white" strokeWidth="0.5" />
                    </svg>
                )}
            </span>
            <div className="text-left">
                <div className="text-xs leading-none opacity-90">
                    {isAppStore ? 'Download on the' : 'GET IT ON'}
                </div>
                <div className="font-semibold text-lg">
                    {isAppStore ? 'App Store' : 'Google Play'}
                </div>
            </div>
        </button>
    );
}