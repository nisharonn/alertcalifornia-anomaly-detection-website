import React from 'react';
import placeholder from "../imgs/placeholder.png";



const Results = () => {
    return (
        <section id="results" className="px-25 py-10 space-y-10 bg-white scroll-mt-20">

            <div className="text-center space-y-4">
                <h2 className="text-gray-800 text-4xl font-bold">
                    Results
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    key results of our model's performance
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
                    <h3 className="text-5xl font-bold text-jade">XX%</h3>
                    <p className="mt-3 text-gray-600 font-medium">
                    Metric 1 (Train/Val/Test Accuracy)
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
                    <h3 className="text-5xl font-bold text-orange">XX%</h3>
                    <p className="mt-3 text-gray-600 font-medium">
                    Metric 2 (False Positive Rate)
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
                    <h3 className="text-5xl font-bold text-jade">XX%</h3>
                    <p className="mt-3 text-gray-600 font-medium">
                    Metric 3 (False Negative Rate)
                    </p>
                </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 grid items-center text-center space-y-6">

                <h2 className="text-orange font-bold text-lg">
                    EMBEDDING SPACE VIEWER
                </h2>

                <div className="flex items-center justify-center bg-gray-100 rounded-3xl p-20">
                    <p> insert visualization tool </p>
                </div>

            </div>

        

        </section>
    )
}

export default Results