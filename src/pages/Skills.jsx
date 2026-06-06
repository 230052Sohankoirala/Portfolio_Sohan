import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

const Skills = () => {
    const focusAreas = [
        "React Components",
        "Responsive Layouts",
        "API Integration",
        "JavaScript Fundamentals",
        "AI Concepts",
        "Problem Solving",
        "Git Workflow",
        "Clean UI"
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
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Skills</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Tools I am building with.</h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-300">
                        I am still early in my career, so I present these skills honestly. My focus is on strong fundamentals,
                        clean interfaces, and steady improvement through projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {skills.map((skillGroup, index) => (
                        <SkillCard key={skillGroup.category} skill={skillGroup} index={index} />
                    ))}
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-lg border border-white/10 bg-gray-800/45 p-8 shadow-2xl shadow-black/10 backdrop-blur md:p-10 lg:p-12"
                >
                    <h2 className="text-3xl font-bold text-white">Current Focus</h2>
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {focusAreas.map((skill) => (
                            <motion.div
                                key={skill}
                                whileHover={{ y: -3, borderColor: "rgba(34, 211, 238, 0.45)" }}
                                transition={{ duration: 0.2 }}
                                className="flex min-h-16 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-950/55 px-4 py-5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-900/80"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </main>
    );
};

export default Skills;
