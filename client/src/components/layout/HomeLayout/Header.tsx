import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return(
        <header className="w-full bg-white shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/">
          <span className="text-xl font-bold text-blue-600 tracking-wide hover:opacity-80 transition duration-150">
            InventoVault
          </span>
                </Link>

                {/* Navigation */}
                <nav className="space-x-6 hidden md:flex">
                    <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition">
                        Dashboard
                    </Link>
                    <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition">
                        Pricing
                    </Link>
                    <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition">
                        Contact
                    </Link>
                </nav>

                {/* Call to Action */}
                <div className="hidden md:block">
                    <Link
                        href="/dashboard"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;