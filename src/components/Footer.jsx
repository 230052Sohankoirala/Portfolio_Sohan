import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-bold text-white">Sohan Koirala</h3>
                        <p className="mt-3 max-w-sm text-gray-400">
                            AI/BIT graduate building web projects and preparing for my first role in tech.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Explore</h4>
                        <div className="mt-4 flex flex-col gap-2">
                            <Link to="/projects" className="text-gray-400 transition hover:text-cyan-200">Projects</Link>
                            <Link to="/about" className="text-gray-400 transition hover:text-cyan-200">About</Link>
                            <Link to="/contact" className="text-gray-400 transition hover:text-cyan-200">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Connect</h4>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://github.com/230052Sohankoirala"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sohan-koirala-6b0314289/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="mailto:koiralam613@gmail.com"
                                aria-label="Email Sohan"
                                className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-center text-sm text-gray-500">
                        Copyright {currentYear} Sohan Koirala. Built with React and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
