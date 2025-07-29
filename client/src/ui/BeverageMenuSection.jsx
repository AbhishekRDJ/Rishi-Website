import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeverageMenuSection = () => {
    const [activeSection, setActiveSection] = useState('Cocktails');
    const [imageTransition, setImageTransition] = useState(false);

    const beverageData = {
        Wine: {
            image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=800&fit=crop&crop=center',
            title: 'Vintage Reserve',
            price: '$12',
            description: '2018 Cabernet Sauvignon, aged in French oak barrels',
        },
        Cocktails: {
            image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=800&fit=crop&crop=center',
            title: 'Midnight Craze',
            price: '$8',
            description: '2 oz silver tequila, 1 oz cointreau, 1 oz lime juice, salt for the rim',
        },
        Beer: {
            image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=800&fit=crop&crop=center',
            title: 'Craft Lager',
            price: '$6',
            description: 'Premium craft beer with citrus notes and crisp finish',
        },
    };

    const sections = ['Wine', 'Cocktails', 'Beer'];
    const currentIndex = sections.indexOf(activeSection);

    const handleSectionChange = (section) => {
        if (section !== activeSection) {
            setImageTransition(true);
            setTimeout(() => {
                setActiveSection(section);
                setImageTransition(false);
            }, 150);
        }
    };

    const handleArrowClick = (direction) => {
        const newIndex =
            direction === 'prev'
                ? (currentIndex - 1 + sections.length) % sections.length
                : (currentIndex + 1) % sections.length;
        handleSectionChange(sections[newIndex]);
    };

    const currentData = beverageData[activeSection];

    return (
        <div className="flex justify-center items-center bg-[#CFD2C6] md:p-16 px-4 py-10 min-h-screen">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-12 w-full max-w-6xl">
                {/* Left - Image */}
                <div className="flex justify-center w-full lg:w-1/2">
                    <div className="relative shadow-2xl rounded-lg w-full max-w-md overflow-hidden">
                        <img
                            src={currentData.image}
                            alt={currentData.title}
                            className={`w-full h-96 object-cover transition-all duration-300 ease-in-out rounded-lg ${imageTransition ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                        />

                        {/* Overlay */}
                        <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                            <h3 className="mb-1 font-bold text-xl">{currentData.title}</h3>
                            <p className="mb-2 font-semibold text-orange-300 text-lg">{currentData.price}</p>
                            <p className="opacity-90 text-sm leading-relaxed">{currentData.description}</p>
                        </div>
                    </div>
                </div>

                {/* Right - Menu Items */}
                <div className="px-2 w-full lg:w-1/2">
                    <div className="flex flex-col justify-center space-y-8">
                        {sections.map((section) => (
                            <div key={section} className="relative">
                                <button
                                    onClick={() => handleSectionChange(section)}
                                    className={`text-left w-full transition-all duration-300 ease-out ${activeSection === section
                                            ? 'text-gray-800 translate-x-2'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <h2
                                        className={`font-bold transition-all duration-300 ${activeSection === section
                                                ? 'text-4xl sm:text-5xl tracking-tight'
                                                : 'text-3xl sm:text-4xl'
                                            }`}
                                    >
                                        {section}
                                    </h2>
                                </button>
                                <div
                                    className={`h-0.5 bg-gray-800 mt-2 transition-all duration-300 ${activeSection === section ? 'w-16 opacity-100' : 'w-0 opacity-0'
                                        }`}
                                />
                            </div>
                        ))}

                        {/* Navigation Arrows */}
                        <div className="flex space-x-4 pt-6">
                            <button
                                onClick={() => handleArrowClick('prev')}
                                className="group flex justify-center items-center hover:bg-gray-800 border border-gray-400 hover:border-gray-800 rounded-full w-10 sm:w-12 h-10 sm:h-12 hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>

                            <button
                                onClick={() => handleArrowClick('next')}
                                className="group flex justify-center items-center hover:bg-gray-800 border border-gray-400 hover:border-gray-800 rounded-full w-10 sm:w-12 h-10 sm:h-12 hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeverageMenuSection;
