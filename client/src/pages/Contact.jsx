import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ShawarmaContact() {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
            {/* Header */}
            <div className="bg-red-600 py-8 text-white">
                <div className="mx-auto px-6 max-w-4xl text-center">
                    <h1 className="mb-2 font-bold text-4xl">Shawarma Hub</h1>
                    <p className="text-red-100 text-lg">Authentic Middle Eastern Flavors</p>
                </div>
            </div>

            <div className="mx-auto px-6 py-12 max-w-6xl">
                <div className="gap-12 grid md:grid-cols-2">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="mb-6 font-bold text-gray-800 text-3xl">Visit Us</h2>

                        {/* Address */}
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="flex items-start space-x-4">
                                <MapPin className="flex-shrink-0 mt-1 text-red-600" size={24} />
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Address</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        123 Food Street, Downtown District<br />
                                        Jalna, Maharashtra 431203<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="flex items-start space-x-4">
                                <Phone className="flex-shrink-0 mt-1 text-red-600" size={24} />
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Phone</h3>
                                    <p className="font-medium text-gray-600 text-lg">+91 98765 43210</p>
                                    <p className="text-gray-500 text-sm">Call for orders & reservations</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="flex items-start space-x-4">
                                <Clock className="flex-shrink-0 mt-1 text-red-600" size={24} />
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Opening Hours</h3>
                                    <div className="space-y-1 text-gray-600">
                                        <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                                        <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                                        <p>Sun: 12:00 PM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="flex items-start space-x-4">
                                <Mail className="flex-shrink-0 mt-1 text-red-600" size={24} />
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@albaikshawarma.com</p>
                                    <p className="text-gray-500 text-sm">For catering & events</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map + Extra Info */}
                    <div className="space-y-6">
                        <h2 className="font-bold text-gray-800 text-3xl">Find Us</h2>

                        {/* Embedded Google Map */}
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <iframe
                                title="Al-Baik Shawarma Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.758838797186!2d75.88657901526656!3d19.845033986643204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba1fddc0f2dfd%3A0x4a5d4c16c77e218e!2sJalna%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722230080000"
                                width="100%"
                                height="320"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-orange-100 p-6 rounded-lg">
                            <h3 className="mb-3 font-semibold text-orange-800">Why Visit Us?</h3>
                            <ul className="space-y-2 text-orange-700 text-sm">
                                <li>• Fresh shawarma made to order</li>
                                <li>• Halal certified ingredients</li>
                                <li>• Free parking available</li>
                                <li>• Takeaway & dine-in options</li>
                                <li>• Family-friendly atmosphere</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="bg-red-600 mt-12 p-8 rounded-lg text-white text-center">
                    <h3 className="mb-2 font-bold text-2xl">Craving Authentic Shawarma?</h3>
                    <p className="mb-4 text-red-100">Visit us today or call for quick pickup!</p>
                    <div className="font-bold text-2xl">+91 98765 43210</div>
                </div>
            </div>
        </div>
    );
}
