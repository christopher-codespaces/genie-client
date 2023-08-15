import React from "react";

const Hero = () => {
    return (
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Elevate Your Events with Stunning Designs.</h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Transform ordinary moments into extraordinary experiences. From weddings to corporate gatherings, we specialize in creating captivating event designs that leave a lasting impression.</p>

                            <form action="#" method="POST" className="mt-8 sm:mt-10">
                                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email address"
                                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                        required=""
                                    />
                                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                        <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Get Inspired</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                            <div className="flex items-center">
                                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">1200+</p>
                                <p className="ml-3 text-sm text-gray-900 font-pj">Events<br />Designed</p>
                            </div>

                            <div className="hidden sm:block">
                                <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                </svg>
                            </div>

                            <div className="flex items-center">
                                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$5M+</p>
                                <p className="ml-3 text-sm text-gray-900 font-pj">Value<br />Created</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className="w-full rounded-lg h-65" src="https://scontent.fcpt1-1.fna.fbcdn.net/v/t39.30808-6/364766746_624509036454312_29660024000928512_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeG3Eddt77JLIIviLrt_hxH-P2aX0MZPBQ4_ZpfQxk8FDqv3L9R72CZYtga5n_h09G30VXI0RAT6k4wmPajYsF5v&_nc_ohc=jPWRwsgveo0AX-85vH0&_nc_ht=scontent.fcpt1-1.fna&oh=00_AfDhLlU9JcPyGOHArByaIYKeSj-KJ4CsRMudSxI9E-wGjw&oe=64DFFFF9" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
