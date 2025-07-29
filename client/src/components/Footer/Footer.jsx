import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <footer className="bg-gray-100 py-12 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start space-y-8 lg:space-y-0">

                    <nav className="flex sm:flex-row flex-col lg:flex-col sm:space-x-8 lg:space-x-0 space-y-4 sm:space-y-0 lg:space-y-4">
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200">
                            Menu
                        </a>
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200">
                            Team
                        </a>
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200">
                            Events
                        </a>
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors duration-200">
                            Contact
                        </a>
                    </nav>

                    <div className="flex flex-col items-center space-y-6">

                        <h1 className="font-light text-gray-600 text-3xl tracking-wide">
                            Shawarma Hub
                        </h1>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="flex justify-center items-center bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex justify-center items-center bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex justify-center items-center bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex justify-center items-center bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 transition-colors duration-200"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-end space-y-4">
                        <h3 className="font-medium text-gray-700 text-sm">
                            Sign up to our newsletter
                        </h3>
                        <div className="flex flex-col items-center lg:items-end space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="bg-transparent px-0 py-2 border-gray-400 focus:border-gray-600 border-b focus:outline-none w-64 text-gray-700 text-sm placeholder-gray-500"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSubmit(e);
                                        }
                                    }}
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="font-medium text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;