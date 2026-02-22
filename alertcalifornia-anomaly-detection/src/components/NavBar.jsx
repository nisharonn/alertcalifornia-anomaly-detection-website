import React from 'react'
import logo from "../imgs/ac-logo-black.png";
import github from "../assets/github-logo.svg";
import { useEffect } from "react";


function NavBar() {
    useEffect(() => {
      const navbar = document.getElementById("navbar");
  
      const handleScroll = () => {

        if (window.scrollY > window.innerHeight/5) {
          navbar.classList.add(
            "shadow-md",
            "backdrop-blur-sm",
            "bg-cream/50",
          );
        } else {
          navbar.classList.remove(
            "shadow-md",
            "backdrop-blur-sm",
            "bg-cream/50",
          );
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav id="navbar"
        className="fixed top-0 left-0 w-full bg-cream p-6 flex items-center justify-between transition-shadow duration-300 z-50">
        <div className="flex items-center">
                <img src={logo} alt="ALERTCalifornia logo" className="h-13"/>
            </div>
            <div className="space-x-8">
                <a href="#problem" className="text-gray-600 hover:text-jade transition duration-300">Problem</a>
                <a href="#data" className="text-gray-600 hover:text-jade transition duration-300">Data</a>
                <a href="#methods" className="text-gray-600 hover:text-jade transition duration-300">Methods</a>
                <a href="#results" className="text-gray-600 hover:text-jade transition duration-300">Results</a>
                <a href="#contact" className="text-gray-600 hover:text-jade transition duration-300">Contact</a>
                <a href="https://github.com/ModernNeesh/alertcalifornia-anomaly-detection" 
                    target="_blank">
                    <img src={github} alt="GitHub repository" 
                        className="inline-block h-7 transition-transform duration-200 hover:scale-110"/>
                </a>
            </div>     
        </nav>
    )
}

export default NavBar