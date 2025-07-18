import React from 'react';
import Image from 'next/image';
import QRCode from 'react-qr-code';

interface QRDownloadCardProps {
    platform: string;
    buttonText: string;
    qrLink: string;
    iconImage: string;
    iconAlt?: string;
    bgColor?: string;
}

export default function QRDownloadCard({
    platform,
    buttonText,
    qrLink,
    iconImage,
    iconAlt = '',
    bgColor = 'bg-[#3A3A3A]'
}: QRDownloadCardProps) {
    return (
        <div className={`relative rounded-2xl shadow-xl p-4 w-[220px] h-[260px] flex flex-col justify-between items-center ${bgColor}`}>
            {/* Platform & Icon */}
            <div className="flex items-center w-full justify-between mb-2">
                <h3 className="text-white text-lg font-bold">For {platform}</h3>
                <div className="absolute -top-2 -right-2">
                    <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                        <Image src={iconImage} alt={iconAlt} width={20} height={20} />
                    </div>
                </div>
            </div>
            {/* Download Button */}
            <button className="justify-start items-center py-2 px-4 rounded-full bg-orange text-white font-semibold text-sm mb-4">{buttonText}</button>
            {/* QR Code */}
            <div className="flex flex-col items-center justify-center ">
                <div className="bg-white p-1 rounded-lg mb-2">
                    <QRCode value={qrLink} size={80} />
                </div>
                <p className="text-white text-xs mt-2 opacity-80">Scan the QR code to download</p>
            </div>
        </div>
    );
}
