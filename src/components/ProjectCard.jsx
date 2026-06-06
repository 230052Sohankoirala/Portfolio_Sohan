import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full overflow-hidden rounded-lg border border-white/10 bg-white/5 transition duration-300 hover:border-cyan-300/50"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gray-950/70 text-cyan-200 text-xs rounded-full ring-1 ring-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">

                    <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={18} />
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
