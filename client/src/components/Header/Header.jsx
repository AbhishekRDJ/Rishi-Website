import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="hover:bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset text-gray-400 hover:text-gray-500"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                            Home
                        </a>
                        <a href="#" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                            Menu
                        </a>
                        <a href="#" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                            Team
                        </a>
                    </nav>

                    <div className="flex-shrink-0">
                        <h1 className="font-bold text-gray-400 text-2xl tracking-wide cursor-pointer" onClick={() => window.location.href = '/'}
                        >
                            Shawarma Hub
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                            Events
                        </a>
                        <a href="/contact" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
                            Contact
                        </a>

                    </nav>

                    <div className="md:hidden">
                        <a href="#" className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-sm">
                            EN
                        </a>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 sm:px-3 pt-2 pb-3 border-gray-200 border-t">
                            <a href="#" className="block px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-base">
                                Menu
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-base">
                                Team
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-base">
                                Events
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-base">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;