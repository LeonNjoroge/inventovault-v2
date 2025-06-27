import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white  mt-4">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-600">InventoVault</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        Smarter inventory for growing businesses.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-sm font-semibold uppercase mb-3 text-gray-800">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#features" className="hover:text-blue-600 transition">Features</Link></li>
                        <li><Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
                        <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="text-sm text-gray-500 md:col-span-2 lg:col-span-1 md:text-right">
                    <p>&copy; {new Date().getFullYear()} InventoVault. All rights reserved.</p>
                    <p className="mt-1">Made by Leon Creates Online.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
