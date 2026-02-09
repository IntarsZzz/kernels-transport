
import React from 'react';

const Marquee: React.FC = () => {
    const routes = [
        'DOBELE', 'RĪGA', 'VIENNA', 'PRAGUE', 'MILAN', 'MUNICH', 'BERLIN', 'WARSAW', 'BRATISLAVA', 'LINZ'
    ];

    return (
        <div className="py-10 bg-white border-y border-gray-100 overflow-hidden select-none scroll-reveal">
            <div className="animate-marquee flex whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex">
                        {routes.map((route, idx) => (
                            <React.Fragment key={idx}>
                                <span className="text-6xl md:text-8xl font-black text-gray-50 uppercase tracking-tighter mx-10 hover:text-brand-orange/10 transition-colors">
                                    {route}
                                </span>
                                <span className="text-brand-orange text-2xl flex items-center">•</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
