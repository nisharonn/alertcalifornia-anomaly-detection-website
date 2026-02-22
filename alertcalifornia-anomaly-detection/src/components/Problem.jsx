import React from 'react';
import img1 from "../imgs/degraded/img1.jpg";
import img2 from "../imgs/degraded/img2.jpg";
import img3 from "../imgs/degraded/img3.jpg";
import img4 from "../imgs/degraded/img4.jpg";
import placeholder from "../imgs/placeholder.png";



const Problem = () => {
    return (
        <section id="problem" className="p-25 space-y-10 scroll-mt-20">

            {/* <div className="grid items-center text-center mx-auto mb-20">
                <h1 className="text-6xl font-bold text-gray-800 mb-12">
                    What's the issue with these images?
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto max-w-250 lg:gap-12">
                        <img src={img1} className="w-full rounded-2xl" />
                        <img src={img2} className="w-full rounded-2xl" />
                        <img src={img3} className="w-full rounded-2xl" />
                        <img src={img4} className="w-full rounded-2xl" />
                </div>

            </div> */}
            
            
            <div className="grid grid-cols-2 gap-12">

                <div id="problem-left" className="space-y-3">
                    <h2 className="text-gray-800 text-4xl font-bold">Problem Statement</h2>      
                    <p className="text-gray-600"> Large-scale environmental camera networks are critical infrastructure for early wildfire detection, 
                        awareness, and safety. The ALERTCalifornia system is an evergrowing network that operates over 1,200 
                        cameras across the state, providing continuous live visual coverage to support environmental monitoring. 
                        The effectiveness of such systems depends not only on camera availability but also on the quality of the 
                        images captured. 
                    </p>  
                    <p className="font-bold text-orange">
                        However, outdoor anomaly detection is uniquely challenging for a number of reasons: 
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Image quality can degrade due to natural factors such as clouds, fog, dust, water droplets, or seasonal changes</li>
                        <li>Hardware-related issues—like blur, glare, focus loss, or physical obstructions—can impair visibility</li>
                        <li>Anomalies are often temporary, subjective, and sparsely labeled</li>
                    </ul>
                    <p className="text-gray-600">
                        As the volume of visual data grows, relying on manual monitoring becomes increasingly time-consuming and inefficient. 
                        This motivates the development of an automated image quality and anomaly detection framework.

                    </p>

                </div>
                
                <div id="problem-right" className="flex items-center justify-center">
                    <img
                        src={placeholder}
                        className="w-full max-w-md rounded-2xl border-4 border-gray-600"
                    />
                </div>

            </div>

        </section>
    )
}

export default Problem