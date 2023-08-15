import React from "react";

const US= () => {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Alexandra Johnson",
            title: "Happy Client",
            quote: "The event planning team at XYZ Events made my dream bridal shower a reality. From the decorations to the little details, everything was perfect. I couldn't be happier!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Michael Williams",
            title: "Satisfied Customer",
            quote: "I wanted to surprise my wife with a memorable birthday party, and XYZ Events exceeded my expectations. The creativity and attention to detail were truly impressive."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Sophia Miller",
            title: "Corporate Client",
            quote: "Organizing a corporate gathering was stress-free with the help of XYZ Events. Their professional approach and seamless execution made the event a huge success."
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Hear What Our Clients Have to Say
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Discover how Genie Events made their events extraordinary.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                <figure>
                                    <div className="flex items-center gap-x-4">
                                        <img src={item.avatar} alt={`${item.name}`} className="w-16 h-16 rounded-full" />
                                        <div>
                                            <span className="block text-gray-800 font-semibold">{item.name}</span>
                                            <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="mt-6 text-gray-700">
                                            {item.quote}
                                        </p>
                                    </blockquote>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default US;
