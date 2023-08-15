import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCalendarEvent, BiLightbulb, BiPackage, BiStar, BiSmile } from 'react-icons/bi';

const Hey = () => {
    const features = [
        {
            icon: <BiCalendarEvent className="w-6 h-6" />,
            title: "Memorable Events",
            desc: "Create unforgettable and unique bridal showers tailored to your preferences, making your special moments even more memorable."
        },
        {
            icon: <BiLightbulb className="w-6 h-6" />,
            title: "Creative Ideas",
            desc: "Our experienced team brings innovative and creative ideas to the table, turning your vision into a reality with every detail thoughtfully planned."
        },
        {
            icon: <BiPackage className="w-6 h-6" />,
            title: "Full-service Packages",
            desc: "Enjoy stress-free planning with our comprehensive packages that cover everything from decor and themes to entertainment and catering."
        },
        {
            icon: <AiOutlineHeart className="w-6 h-6" />,
            title: "Personal Touch",
            desc: "We infuse every event with a personal touch, ensuring that your bridal shower reflects your personality, style, and preferences."
        },
        {
            icon: <BiStar className="w-6 h-6" />,
            title: "Exquisite Details",
            desc: "Attention is given to every detail, ensuring that every element of your event is exquisite, creating a truly enchanting experience."
        },
        {
            icon: <BiSmile className="w-6 h-6" />,
            title: "Client-Centric Approach",
            desc: "We prioritize your needs and desires, providing exceptional service that exceeds expectations and leaves you with a smile."
        },
    ];

    return (
        <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Crafting Unforgettable Bridal Showers
                </h3>
                <p className="mt-3">
                    Elevate your bridal shower experience with our expert planning and attention to detail.
                </p>
            </div>
            <div className="mt-12">
                <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Hey;
