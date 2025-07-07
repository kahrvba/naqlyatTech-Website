import React from 'react';
import Image from 'next/image';

export default function CTA() {
    return (
        <section id="download" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-orange rounded-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Text Content */}
                            <div className="md:w-1/2 mb-8 ">
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    Download Our Online<br />   Mobile App
                                </h2>
                                <p className="text-white mb-8 mr-20 opacity-90 text-xs max-w-lg">
                                Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum ipusum Loreum Loreum                                </p>

                                {/* Stats */}
                                <div className="flex space-x-10 mb-5 mt-15">
                                    <div className="text-center">
                                        <p className="text-white font-bold text-3xl">5K+</p>
                                        <p className="text-white text-xs opacity-90">Downloads</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-bold text-3xl">4K+</p>
                                        <p className="text-white text-xs opacity-90">Active Users</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-bold text-3xl">10K+</p>
                                        <p className="text-white text-xs opacity-90">Reviews</p>
                                    </div>
                                </div>
                            </div>

                            {/* QR Codes */}
                            <div className="md:w-1/2 flex space-x-4">
                                <Image
                                    src="/images/applecode.png"
                                    alt="iOS App Store QR Code"
                                    width={150}
                                    height={150}
                                    className=" w-full h-full object-fit"
                                />
                                <Image
                                    src="/images/playcode.png"
                                    alt="Android Play Store QR Code"
                                    width={150}
                                    height={150}
                                    className=" w-full h-full mt-10 object-fit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}