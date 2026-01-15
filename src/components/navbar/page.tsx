"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    // Treat "/" as "/log-base-2"
    const activeRoute =
        pathname === "/" ? "/log-base-2" : pathname;

    const handleExternalClick = () => {
        window.open("https://anubhavcreates.hashnode.dev/", "_blank");
    }

    return (
        <nav className="w-full bg-black text-white">
            <div className="max-w-325 mx-auto px-4 py-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        Anubhav.Dev
                    </span>
                </div>

                {/* Nav */}
                <div className="flex items-center gap-1 bg-gray-900/50 rounded-full px-3 py-2 backdrop-blur-sm border border-gray-800">

                    <Link
                        href="/"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/log-base-2"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Log₂
                    </Link>

                    <Link
                        href="/BinaryToDecimal"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/BinaryToDecimal"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Bin to Dec
                    </Link>

                    <Link
                        href="/HexadecimalToDecimal"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/HexadecimalToDecimal"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Hex to Dec
                    </Link>
                    <Link
                        href="/DecimalToHexadecimal"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/DecimalToHexadecimal"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Dec to Hex
                    </Link>
                    <Link
                        href="/BaseBAddition"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/BaseBAddition"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Base-B Addition
                    </Link>
                    <Link
                        href="/HexAddition"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/HexAddition"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        Hex Addition
                    </Link>
                    <Link
                        href="/HexDigitAndHexStringMultiplication"
                        className={`px-5 py-2 rounded-full transition-colors
              ${activeRoute === "/HexDigitAndHexStringMultiplication"
                                ? "bg-gray-800/70 text-white"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                            }`}
                    >
                        HDHSM
                    </Link>
                </div>

                {/* CTA */}
                <button
                    onClick={handleExternalClick}
                    className="bg-blue-600 uppercase hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30">
                    Blogs
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
