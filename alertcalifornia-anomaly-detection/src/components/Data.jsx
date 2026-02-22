import React from 'react';
import placeholder from "../imgs/placeholder.png";



const Data = () => {
    return (
        <section id="data" className="px-25 py-10 space-y-10 bg-white scroll-mt-20">

            <div className="text-center space-y-12">

                <h2 className="text-gray-800 text-4xl font-bold">
                Data
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    <div className="bg-jade/90 text-white h-[40vh] rounded-3xl p-10 shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                        Data Extraction
                        </h3>
                        <p className="opacity-90">
                        data extraction process from methods 
                        </p>
                    </div>

                    <div className="bg-jade/90 text-white  h-[40vh] rounded-3xl p-10 shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                        Data Labeling
                        </h3>
                        <p className="opacity-90">
                        data labeling process with labeling studio. show examples and labeling scheme
                        </p>
                    </div>

                </div>

            </div>
        

        </section>
    )
}

export default Data