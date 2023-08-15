import React from 'react';

const Footer = () => {
    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'About'
        },
        {
            href: 'javascript:void()',
            name: 'Blog'
        },
        {
            href: 'javascript:void()',
            name: 'Services' // Add a meaningful name here
        },
        {
            href: 'javascript:void()',
            name: 'Team'
        },
        {
            href: 'javascript:void()',
            name: 'Careers'
        },
        {
            href: 'javascript:void()',
            name: 'Support'
        }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img
                src="https://via.placeholder.com/120x50" // Placeholder logo image URL
                alt="Brand Logo"
                className="w-32 sm:mx-auto"
                />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Made by BrandAide, currently the property of BrandAide
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item, idx) => (
                    <li className=" hover:text-gray-800" key={idx}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2023 BrandAide All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {/* Social media icons */}
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}

export default Footer;
