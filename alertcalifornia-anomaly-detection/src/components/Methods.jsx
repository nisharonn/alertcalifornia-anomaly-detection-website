import React from 'react';
import placeholder from "../imgs/placeholder.png";
import { useState } from "react";



const Methods = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <section id="methods" className="px-25 py-10 space-y-10 bg-cream scroll-mt-20">

            <div className="text-center space-y-12">

                <h2 className="text-gray-800 text-4xl font-bold">
                Methods
                </h2>

                <div className="grid grid-cols-1 max-w-7xl mx-auto">

                    <div className="bg-white/90 text-white rounded-3xl p-10 space-y-6 shadow-md hover:shadow-lg transition duration-300">
                        
                        <p className="opacity-90 text-orange">
                        methods section simplfied for a general audience
                        </p>

                        <div className="space-y-6">

                            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">

                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold">
                                    1
                                </div>

                                <h2 className="font-bold text-gray-800 text-lg text-left">
                                    Step 1:
                                </h2>

                                <p className="col-start-2 text-gray-600 text-left">
                                    short description
                                </p>

                            </div>

                            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">

                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold">
                                    2
                                </div>

                                <h2 className="font-bold text-gray-800 text-lg text-left">
                                    Step 2:
                                </h2>

                                <p className="col-start-2 text-gray-600 text-left">
                                    short description
                                </p>

                            </div>

                            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">

                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold">
                                    3
                                </div>

                                <h2 className="font-bold text-gray-800 text-lg text-left">
                                    Step 3:
                                </h2>

                                <p className="col-start-2 text-gray-600 text-left">
                                    short description
                                </p>

                            </div>

                            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">

                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange text-white font-bold">
                                    4
                                </div>

                                <h2 className="font-bold text-gray-800 text-lg text-left">
                                    Step 4:
                                </h2>

                                <p className="col-start-2 text-gray-600 text-left">
                                    short description
                                </p>

                            </div>
                        </div>
            
                    </div>

                    <h2 className="text-orange text-lg font-bold text-left mt-10 mb-5">
                    MODEL ARCHITECTURE
                    </h2>

                    <p className="text-gray-700 text-left">
                    short explanation of the model architecture and training process, written for a general audience.
                    </p>

                    <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-4 px-5 py-2 rounded-full bg-orange text-white font-semibold hover:bg-orange/90 transition"
                    >
                    {showMore ? "Hide Details" : "Learn More"}
                    </button>

                    {showMore && (
                    <div className="mt-4 p-5 bg-gray-50 rounded-2xl text-gray-700">
                        <p> detailed description of model architecture and training process</p>
                        <p> include image of model architecture </p>
                        <img src={placeholder} className="w-1/2 mx-auto rounded-2xl" />
                    </div>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Methods