import React from 'react';
import bgVideo from "../videos/timelapse.mp4";


const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">


            <video autoPlay loop mute playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/60"></div>


            <div className="relative z-10 text-white px-6 text-center font-bgrotesque">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-jade mb-4 md:px-15">Quality of Service 
                <span className="text-orange"> Anomaly Detection </span>
                in Wildfire Monitoring Networks</h1>
            </div>
        </section>
    )
}

export default Hero