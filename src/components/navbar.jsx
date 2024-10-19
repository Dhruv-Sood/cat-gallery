"use client"
import { FaGithub } from "react-icons/fa";
import HyperText from "./ui/hyper-text";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-screen flex items-center p-4 fixed top-0 left-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'} z-50`}>
      <div className="w-1/6 flex justify-start">
        <Link href="/" className="cursor-pointer"><HyperText text="Cat Gallery" className="text-2xl font-bold cursor-pointer" /></Link>
      </div>
      <div className="hidden md:flex md:w-2/3 justify-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300 cursor-pointer">
            <HyperText text="Home" className="text-xl cursor-pointer" />
          </Link>
          <span className="text-gray-500 cursor-pointer">/</span>
          <div  className="hover:text-gray-300 cursor-pointer">
            <HyperText text="Cat Gallery" className="text-xl cursor-pointer" />
          </div>
          <span className="text-gray-500 cursor-pointer">/</span>
          <div cclassName="hover:text-gray-300 cursor-pointer">
            <HyperText text="About" className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <a href="https://github.com/Dhruv-Sood/cat-gallery" target="_blank" className="w-1/6 flex justify-end">
        {/* github logo */}
        <FaGithub className="h-6 w-6 cursor-pointer" />
      </a>
    </nav>
  )
}
export default Navbar