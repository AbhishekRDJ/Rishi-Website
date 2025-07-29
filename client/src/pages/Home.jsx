import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhoAreWeSection from '../ui/WhoAreWeSection'
import RestaurantMenu from '../ui/RestaurantMenu'
import BeverageMenuSection from '../ui/BeverageMenuSection'
import TeamSection from '../ui/TeamSection'
import TestimonialCard from '../ui/TestimonialCard'

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <><div
            className="bg-gray-900 bg-cover bg-no-repeat bg-center min-h-screen text-white"
            style={{
                backgroundImage: `url('heroBG.png')`,
            }}
        >
            <main className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="w-full max-w-7xl">
                    <div className="ml-4 max-w-4xl">
                        <h2 className="font-stretch-125% text-white sm:text-6xl text-7xl lg:text-7xl xl:text-7xl leading-tight tracking-tight">
                            <span className="block">Made by Italians.</span>
                            <span className="block mt-2">Enjoyed by Everyone.</span>
                        </h2>
                    </div>
                </div>
            </main>
        </div>
            <WhoAreWeSection />
            <RestaurantMenu />
            <BeverageMenuSection />
            <TeamSection />
            <TestimonialCard />
        </>
    );
};

export default Home;
