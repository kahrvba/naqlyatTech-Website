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
                                    Download Our Online Mobile App
                                </h2>
                                <p className="text-white mb-8 opacity-90 text-xs max-w-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                </p>

                                {/* Stats */}
                                <div className="flex space-x-5 mb-6">
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
                            <div className="md:w-1/3 flex space-x-4">
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
                                    className=" w-full h-full mt-5 object-fit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}