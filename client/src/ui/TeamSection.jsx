import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        {
            name: "Johnathan Demario",
            role: "Founder",
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=600&fit=crop&crop=center",
            description: "In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris."
        },
        {
            name: "Bryan Machado",
            role: "Chef",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=600&fit=crop&crop=center",
            description: "Duis sed ut dolor viverra porttitor semper et faucibus facilisis. Hac maecenas rhoncus."
        },
        {
            name: "Adam Joseph",
            role: "Chef",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center",
            description: "Faucibus sed vitae dui justo duis in. Egestas ipsum ut a elementum at laoreet at quam vitae."
        },
        {
            name: "Putin Desque",
            role: "Owner",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=600&fit=crop&crop=center",
            description: "Molestie viverra mattis nisl vitae orci feugiat in. Aliquet quis orci turpis aliquet."
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const getVisibleMembers = () => {
        const members = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % teamMembers.length;
            members.push(teamMembers[index]);
        }
        return members;
    };

    const visibleMembers = getVisibleMembers();

    return (
        <div className="bg-[#B7BCA9] px-8 py-16 min-h-screen">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="mb-8 font-bold text-[#36392D] text-6xl">Our team</h1>

                        {/* Navigation Arrows */}
                        <div className="flex space-x-4">
                            <button
                                onClick={handlePrevious}
                                className="group flex justify-center items-center hover:bg-gray-800 border border-gray-400 hover:border-gray-800 rounded-full w-12 h-12 hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="group flex justify-center items-center hover:bg-gray-800 border border-gray-400 hover:border-gray-800 rounded-full w-12 h-12 hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="max-w-md text-gray-600 text-lg leading-relaxed">
                        In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit tellus mauris.
                    </div>
                </div>

                {/* Team Grid */}
                <div className="gap-6 grid grid-cols-4">
                    {visibleMembers.map((member, index) => (
                        <div
                            key={`${member.name}-${currentIndex}-${index}`}
                            className="group justify-center items-center transition-all duration-500 ease-out"
                        >
                            {/* Image Container with glowing shadow */}
                            <div className="relative shadow-lg group-hover:shadow-2xl mb-6 rounded-lg aspect-[3/4] overflow-hidden transition-shadow duration-500">

                                {/* Optional glowing background behind image */}
                                <div className="z-0 absolute -inset-1 bg-black opacity-20 blur-xl rounded-lg" />

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="z-10 relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center items-center space-y-3 text-center">
                                <h3 className="font-bold text-gray-900 text-xl">{member.name}</h3>
                                <p className="font-medium text-gray-600">{member.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;