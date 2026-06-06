import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, GraduationCap, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    const highlights = [
        { label: "AI & BIT Graduate", value: "Bachelor 2027" },
        { label: "Academic Batch", value: "2024" },
        { label: "Career Stage", value: "Open to Internships" }
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-gray-900 to-teal-950 pt-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="space-y-7"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                        >
                            <Sparkles size={16} />
                            Fresh graduate building practical web and AI projects
                        </motion.p>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Hi, I am Sohan Koirala.
                                <span className="block bg-linear-to-r from-cyan-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                                    AI & BIT graduate.
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
                                I build clean, responsive web interfaces and keep growing my skills in artificial intelligence,
                                problem solving, and full-stack development. I am currently looking for my first internship,
                                trainee, or junior developer opportunity.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-300/60 px-7 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300 hover:text-gray-950"
                            >
                                Contact Me
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-3">
                            <a
                                href="https://github.com/230052Sohankoirala"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 text-gray-300 ring-1 ring-white/10 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <FaGithub size={23} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sohan-koirala-6b0314289/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 text-gray-300 ring-1 ring-white/10 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <FaLinkedin size={23} />
                            </a>
                            <a
                                href="mailto:koiralam613@gmail.com"
                                aria-label="Email Sohan"
                                className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 text-gray-300 ring-1 ring-white/10 transition hover:bg-cyan-400 hover:text-gray-950"
                            >
                                <Mail size={23} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Portfolio</p>
                                    <h2 className="text-2xl font-bold text-white">Sohan Koirala</h2>
                                </div>
                                <div className="grid h-14 w-14 place-items-center rounded-lg bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30">
                                    <BrainCircuit size={30} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-lg bg-gray-950/60 p-5 ring-1 ring-white/10">
                                    <div className="mb-3 flex items-center gap-3 text-emerald-200">
                                        <GraduationCap size={22} />
                                        <p className="font-semibold">Bachelor in AI BIT</p>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        Focused on programming fundamentals, web development, data concepts, and AI foundations.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {highlights.map((item) => (
                                        <div key={item.label} className="rounded-lg border border-white/10 bg-gray-900/70 p-4">
                                            <p className="text-xs text-gray-400">{item.label}</p>
                                            <p className="mt-2 font-semibold text-white">{item.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4">
                                    <p className="text-sm font-semibold text-amber-100">Currently</p>
                                    <p className="mt-1 text-sm text-gray-300">
                                        Improving React, Tailwind CSS, JavaScript, and AI project skills while preparing for my first tech role.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Home;
