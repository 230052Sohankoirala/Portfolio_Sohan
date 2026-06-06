import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, GraduationCap, Target } from "lucide-react";

const About = () => {
    const strengths = [
        {
            icon: Code2,
            title: "Frontend Development",
            description: "Building responsive React interfaces with clean components, Tailwind CSS, and attention to layout details."
        },
        {
            icon: BrainCircuit,
            title: "AI Foundation",
            description: "Academic background in AI concepts, data thinking, and using technology to solve practical problems."
        },
        {
            icon: Target,
            title: "Career Focus",
            description: "Ready for an internship, trainee role, or junior opportunity where I can learn, contribute, and grow with a team."
        }
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-950 via-gray-900 to-teal-950 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-14 max-w-3xl"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Me</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">A fresh AI/BIT graduate starting my professional journey.</h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-300">
                        My name is Sohan Koirala. I completed my Bachelor in AI BIT in 2027 as part of the 2024 batch.
                        I have not worked a professional developer job yet, so this portfolio is built to show my learning,
                        my project work, and the kind of role I am preparing for.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg border border-white/10 bg-white/5 p-8"
                    >
                        <div className="mb-6 grid h-16 w-16 place-items-center rounded-lg bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30">
                            <GraduationCap size={34} />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Education</h2>
                        <div className="mt-6 space-y-5">
                            <div className="border-l-2 border-cyan-300 pl-5">
                                <h3 className="text-lg font-semibold text-white">Bachelor in AI BIT</h3>
                                <p className="text-cyan-200">Graduated in 2027</p>
                                <p className="mt-2 text-gray-400">Academic batch: 2024</p>
                            </div>
                            <div className="border-l-2 border-emerald-300 pl-5">
                                <h3 className="text-lg font-semibold text-white">Current Direction</h3>
                                <p className="text-gray-400">
                                    Looking for internships, trainee programs, and entry-level developer roles where I can work on real products.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-5 text-gray-300"
                    >
                        <p className="text-lg leading-relaxed">
                            I enjoy turning ideas into useful interfaces. My strongest interest is the space where web development
                            meets AI: building applications that are simple for users but thoughtful behind the scenes.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Right now I am focused on React, JavaScript, Tailwind CSS, API integration, and improving my coding habits.
                            I care about writing readable code, understanding the fundamentals, and learning from experienced developers.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Since this is my first portfolio, I want it to be honest: I am at the beginning of my career, but I am serious,
                            consistent, and ready to contribute.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {strengths.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="rounded-lg border border-white/10 bg-gray-900/70 p-6 transition hover:border-cyan-300/50">
                                <Icon size={34} className="mb-4 text-cyan-300" />
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-gray-400">{item.description}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </main>
    );
};

export default About;
