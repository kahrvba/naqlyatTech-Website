import React from 'react';
import QRDownloadCard from '../../ui/QRDownloadCard';

export default function CTA() {
    return (
        <section id="download" className="py-8 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-orange rounded-xl overflow-hidden">
                    <div className="p-5 sm:p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Text Content */}
                            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Download Our Online<br className="hidden md:block" /> Mobile App
                                </h2>
                                <p className="text-white mb-6 md:mb-8 md:mr-20 opacity-90 text-sm max-w-lg mx-auto md:mx-0">
                                    Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum
                                </p>

                                {/* Stats */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:space-x-10 mb-5 mt-6 md:mt-15">
                                    <div className="text-center px-2">
                                        <p className="text-white font-bold text-2xl md:text-3xl">5K+</p>
                                        <p className="text-white text-xs opacity-90">Downloads</p>
                                    </div>
                                    <div className="text-center px-2">
                                        <p className="text-white font-bold text-2xl md:text-3xl">4K+</p>
                                        <p className="text-white text-xs opacity-90">Active Users</p>
                                    </div>
                                    <div className="text-center px-2">
                                        <p className="text-white font-bold text-2xl md:text-3xl">10K+</p>
                                        <p className="text-white text-xs opacity-90">Reviews</p>
                                    </div>
                                </div>
                            </div>

                            {/* QR Download Cards */}
                            <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-center md:justify-end gap-4 sm:gap-6">
                                <QRDownloadCard
                                    platform="iOS"
                                    buttonText="Download now"
                                    qrLink="https://apps.apple.com/app/idXXXXXXXXX"
                                    iconImage="/images/apple.png"
                                    iconAlt="Apple logo"
                                />
                                <QRDownloadCard
                                    platform="Android"
                                    buttonText="Download now"
                                    qrLink="https://play.google.com/store/apps/details"
                                    iconImage="/images/playstore.png"
                                    iconAlt="Play Store logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}