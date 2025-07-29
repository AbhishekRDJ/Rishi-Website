import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhoAreWeSection = () => {
    const containerRef = useRef(null);
    const autoScrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", alt: "Restaurant interior" },
        { id: 3, src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80", alt: "Dining experience" },
        { id: 4, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", alt: "Restaurant atmosphere" },
        { id: 5, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80", alt: "Serving food" },
        { id: 6, src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80", alt: "Chef preparing dish" },
        { id: 7, src: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?auto=format&fit=crop&w=800&q=80", alt: "Cafe ambiance" }
    ];

    const scrollAmount = 280;

    const scrollToNext = () => {
        containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        resetAutoSlide();
    };

    const scrollToPrev = () => {
        containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        resetAutoSlide();
    };

    const resetAutoSlide = () => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        if (!isHovered) {
            autoScrollRef.current = setInterval(() => {
                if (containerRef.current && !isHovered) {
                    const container = containerRef.current;
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    if (container.scrollLeft >= maxScroll) {
                        container.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                }
            }, 2000);
        }
    };

    useEffect(() => {
        resetAutoSlide();
        return () => clearInterval(autoScrollRef.current);
    }, [isHovered]);

    return (
        <section className="bg-[#CFD2C6] py-12 lg:py-20 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
                    {/* Text Section */}
                    <div className="space-y-6">
                        <h2 className="font-bold text-gray-800 text-3xl lg:text-4xl">
                            Who are we?
                        </h2>

                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                            Welcome to our cozy, vibrant space where culinary passion meets friendly service.
                            Whether you're here for a fresh morning brew, a wood-fired pizza, or just the vibe —
                            we've got something for everyone.
                        </p>
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                            Our team is dedicated to delivering unforgettable experiences every time you walk
                            through our doors. Come taste the difference that authentic Italian craftsmanship makes.
                        </p>

                        <div className="flex space-x-3">
                            <button
                                onClick={scrollToPrev}
                                className="flex justify-center items-center hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-700 rounded-full w-11 h-11 text-gray-800 hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={scrollToNext}
                                className="flex justify-center items-center hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-700 rounded-full w-11 h-11 text-gray-800 hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full">
                        <div
                            ref={containerRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex gap-4 py-2 overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide"
                        >
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative flex-shrink-0 w-64 sm:w-72 lg:w-80 snap-start"
                                >
                                    <div className="shadow-md group-hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar */}
            <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default WhoAreWeSection;
