import React from 'react';

const TestimonialCard = ({ name, role, avatar, message, date, position, delay, customStyle }) => (
    <div
        className={`absolute bg-white rounded-2xl p-6 shadow-xl max-w-xs animate-pulse ${position}`}
        style={{
            ...customStyle,
            animationDelay: `${delay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
        }}
    >
        <div className="flex items-start gap-3 mb-4">
            <img src={avatar} alt={name} className="rounded-full w-12 h-12 object-cover" />
            <div>
                <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
                <p className="text-gray-500 text-xs">{role}</p>
            </div>
        </div>

        <p className="mb-4 text-gray-700 text-sm leading-relaxed">{message}</p>

        <div className="flex items-center gap-2">
            <div className="bg-red-500 rounded w-4 h-4"></div>
            <span className="text-gray-400 text-xs">{date}</span>
        </div>
    </div>
);

export default function FloatingTestimonials() {
    const testimonials = [
        {
            name: "Roman Atwoods",
            role: "Designer at MyWindow",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            message: "Disco is finally solving a big problem with UI building. It's intuitive!",
            date: "2021.03.01",
            position: "top-2 left-50 z-10",
            delay: 0,
        },
        {
            name: "Martin Goutry",
            role: "Frontend Dev at MyWindow",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            message: "The ease of use and workflow really impressed our whole team.",
            date: "2021.03.06",
            position: "top-10 right-24 z-20",
            delay: 1,
        },
        {
            name: "Agnes Remi",
            role: "UI Designer",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=100&h=100&fit=crop&crop=face",
            message: "The visual design of the product is stunning. Love working with it.",
            date: "2021.03.02",
            position: "top-30 left-132 z-30",
            delay: 0.5,
        },
        {
            name: "Theo Champion",
            role: "UX Lead at Looply",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
            message: "The animations and smooth interface make the experience enjoyable.",
            date: "2021.03.07",
            position: "bottom-34 left-60 z-20",
            delay: 1.5,
        },
        {
            name: "Lucie Zhang",
            role: "Product Researcher",
            avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face",
            message: "We were amazed by the quick onboarding and smooth experience.",
            date: "2021.03.10",
            position: "bottom-64 right-50 z-10",
            delay: 2,
        },
        {
            name: "Arjun Mehta",
            role: "CTO at Finely",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
            message: "Disco has revolutionized how our devs approach frontend work.",
            date: "2021.03.12",
            position: "top-1/2 right-1/3 z-20",
            delay: 1.8,
        },
    ];

    return (
        <section className="relative bg-gray-900 py-20 min-h-screen overflow-hidden">
            <div className="mx-auto px-6 text-center container">
                <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="mx-auto mb-16 max-w-2xl text-gray-400 text-lg">
                    Don't just take our word for it. Here's what real users have to say about their experience.
                </p>
            </div>

            {/* Testimonial Floating Cards */}
            <div className="relative w-full h-[760px] sm:h-[800px] md:h-[700px]">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>

            <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-pulse {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
