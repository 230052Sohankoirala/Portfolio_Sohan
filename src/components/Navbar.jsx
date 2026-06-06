import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-bold text-white"
                    >
                        Sohan<span className="text-cyan-300">.</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-gray-300 transition hover:text-cyan-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((value) => !value)}
                        className="grid h-10 w-10 place-items-center rounded-lg text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={23} /> : <Menu size={23} />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden border-t border-white/10 py-3"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-cyan-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
