import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const foodItems = [
    {
        id: 1,
        name: "Gnocchi with almonds",
        price: "$10",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
        id: 2,
        name: "Mini spinach ravioli",
        price: "$12",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
        id: 3,
        name: "Lasagna",
        price: "$8",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
        id: 4,
        name: "Carbonara spaghetti",
        price: "$15",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
        id: 5,
        name: "Risotto",
        price: "$14",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
        id: 6,
        name: "Bruschetta",
        price: "$6",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
];

const categories = ["Appetizers", "Pasta", "Pizza", "Salads", "Soups", "Desserts"];

export default function RestaurantMenu() {
    const [activeCategory, setActiveCategory] = useState("Pasta");
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#CFD2C6] px-4 sm:px-6 lg:px-12 py-14 text-white">
            <div className="mb-12 text-center">
                <h1 className="mb-6 font-bold text-[#36392D] text-4xl md:text-5xl lg:text-6xl">Menu</h1>
                <p className="mx-auto max-w-2xl text-[#36392D] text-sm sm:text-base leading-relaxed">
                    Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.
                </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full border text-sm sm:text-base transition ${activeCategory === cat
                                ? "bg-[#36392D] text-white"
                                : "bg-[#B7BCA9] text-black border-gray-500 hover:bg-[#A7AF98] hover:text-black"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Scrollable Food Cards */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="hidden top-1/2 left-0 z-10 absolute lg:flex justify-center items-center bg-black/50 hover:bg-black p-2 rounded-full transition -translate-y-1/2"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="hidden top-1/2 right-0 z-10 absolute lg:flex justify-center items-center bg-black/50 hover:bg-black p-2 rounded-full transition -translate-y-1/2"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 px-2 sm:px-4 lg:px-10 pb-4 overflow-x-auto scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    {foodItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 bg-white shadow-md hover:shadow-xl rounded-xl min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] overflow-hidden transition duration-300 cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-44 sm:h-52 object-cover"
                            />
                            <div className="p-4 text-black text-center">
                                <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
