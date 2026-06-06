import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-300/50"
        >
            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>

            <div className="space-y-4">
                {skill.items.map((item, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-medium">{item.name}</span>
                            <span className="text-cyan-300 text-sm font-semibold">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-950/70 rounded-full h-2 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full bg-linear-to-r from-cyan-300 to-emerald-300 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
